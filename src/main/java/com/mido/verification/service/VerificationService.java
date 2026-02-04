package com.mido.verification.service;

import com.mido.verification.domain.ManualInput;
import com.mido.verification.domain.UploadedFile;
import com.mido.verification.domain.VerificationData;
import com.mido.verification.domain.WorkContext;
import com.mido.verification.repository.ManualInputRepository;
import com.mido.verification.repository.UploadedFileRepository;
import com.mido.verification.repository.VerificationDataRepository;
import com.mido.verification.repository.WorkContextRepository;
import com.mido.verification.web.dto.ManualInputRequest;
import com.mido.verification.web.dto.WorkContextResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.UUID;

@Service
public class VerificationService {

    private final VerificationDataRepository verificationDataRepository;
    private final ManualInputRepository manualInputRepository;
    private final UploadedFileRepository uploadedFileRepository;
    private final WorkContextRepository workContextRepository;

    public VerificationService(
            VerificationDataRepository verificationDataRepository,
            ManualInputRepository manualInputRepository,
            UploadedFileRepository uploadedFileRepository,
            WorkContextRepository workContextRepository
    ) {
        this.verificationDataRepository = verificationDataRepository;
        this.manualInputRepository = manualInputRepository;
        this.uploadedFileRepository = uploadedFileRepository;
        this.workContextRepository = workContextRepository;
    }

    @Transactional
    public UUID createManualInput(ManualInputRequest request) {
        Instant now = Instant.now();

        VerificationData data = new VerificationData();
        data.setId(UUID.randomUUID());
        data.setInputType(request.getInputType());
        data.setRepoUrl(request.getRepoUrl());
        data.setCommitHash(request.getCommitHash());
        data.setPrNumber(request.getPrNumber());
        data.setCode(request.getCode());
        data.setCreatedAt(now);
        data.setUpdatedAt(now);
        verificationDataRepository.save(data);

        ManualInput manualInput = new ManualInput();
        manualInput.setId(UUID.randomUUID());
        manualInput.setVerificationData(data);
        manualInput.setInputMethod(request.getInputMethod());
        manualInput.setRawInput(request.getRawInput());
        manualInput.setCreatedAt(now);
        manualInputRepository.save(manualInput);

        WorkContext context = new WorkContext();
        context.setId(UUID.randomUUID());
        context.setVerificationData(data);
        context.setDisplayRepoUrl(data.getRepoUrl());
        context.setDisplayCommitHash(data.getCommitHash());
        context.setDisplayPrNumber(data.getPrNumber());
        context.setCreatedAt(now);
        workContextRepository.save(context);

        return data.getId();
    }

    @Transactional
    public void uploadFile(UUID verificationId, MultipartFile file) throws IOException {
        VerificationData data = verificationDataRepository.findById(verificationId)
                .orElseThrow(() -> new IllegalArgumentException("VerificationData not found: " + verificationId));

        Instant now = Instant.now();

        UploadedFile uploadedFile = new UploadedFile();
        uploadedFile.setId(UUID.randomUUID());
        uploadedFile.setVerificationData(data);
        uploadedFile.setFileName(file.getOriginalFilename());
        uploadedFile.setFileType(file.getContentType());
        uploadedFile.setFileContent(new String(file.getBytes(), StandardCharsets.UTF_8));
        uploadedFile.setUploadedAt(now);
        uploadedFileRepository.save(uploadedFile);

        data.setCode(uploadedFile.getFileContent());
        data.setUpdatedAt(now);
    }

    @Transactional(readOnly = true)
    public WorkContextResponse getWorkContext(UUID verificationId) {
        WorkContext context = workContextRepository.findByVerificationData_Id(verificationId)
                .orElseThrow(() -> new IllegalArgumentException("WorkContext not found for verification: " + verificationId));
        return WorkContextResponse.from(context);
    }
}

