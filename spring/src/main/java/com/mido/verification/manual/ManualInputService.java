package com.mido.verification.manual;

import com.mido.verification.common.VerificationData;
import com.mido.verification.common.VerificationDataRepository;
import com.mido.verification.context.WorkContext;
import com.mido.verification.context.WorkContextRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.UUID;

@Service
public class ManualInputService {

    private final VerificationDataRepository verificationDataRepository;
    private final ManualInputRepository manualInputRepository;
    private final WorkContextRepository workContextRepository;

    public ManualInputService(
            VerificationDataRepository verificationDataRepository,
            ManualInputRepository manualInputRepository,
            WorkContextRepository workContextRepository
    ) {
        this.verificationDataRepository = verificationDataRepository;
        this.manualInputRepository = manualInputRepository;
        this.workContextRepository = workContextRepository;
    }

    @Transactional
    public UUID create(ManualInputRequest request) {
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
}
