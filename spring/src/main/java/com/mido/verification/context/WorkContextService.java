package com.mido.verification.context;

import com.mido.verification.common.VerificationData;
import com.mido.verification.upload.UploadedFile;
import com.mido.verification.upload.UploadedFileRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
public class WorkContextService {

    private final WorkContextRepository workContextRepository;
    private final UploadedFileRepository uploadedFileRepository;

    public WorkContextService(
            WorkContextRepository workContextRepository,
            UploadedFileRepository uploadedFileRepository
    ) {
        this.workContextRepository = workContextRepository;
        this.uploadedFileRepository = uploadedFileRepository;
    }

    @Transactional(readOnly = true)
    public WorkContextResponse get(UUID verificationId) {
        WorkContext context = workContextRepository.findByVerificationData_Id(verificationId)
                .orElseThrow(() -> new IllegalArgumentException("WorkContext not found for verification: " + verificationId));

        VerificationData data = context.getVerificationData();

        WorkContextResponse response = WorkContextResponse.from(context);
        String inputType = data.getInputType();
        response.setContextType(inputType);

        if ("FILE".equals(inputType)) {
            uploadedFileRepository.findTopByVerificationDataOrderByUploadedAtDesc(data)
                    .map(UploadedFile::getFileName)
                    .ifPresent(response::setFileName);
        }

        // language / lineCount / snippet 은 추후 코드 분석 로직 추가 시 설정

        return response;
    }
}
