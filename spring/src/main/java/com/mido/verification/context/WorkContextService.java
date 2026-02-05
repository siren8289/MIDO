package com.mido.verification.context;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
public class WorkContextService {

    private final WorkContextRepository workContextRepository;

    public WorkContextService(WorkContextRepository workContextRepository) {
        this.workContextRepository = workContextRepository;
    }

    @Transactional(readOnly = true)
    public WorkContextResponse get(UUID verificationId) {
        WorkContext context = workContextRepository.findByVerificationData_Id(verificationId)
                .orElseThrow(() -> new IllegalArgumentException("WorkContext not found for verification: " + verificationId));
        return WorkContextResponse.from(context);
    }
}
