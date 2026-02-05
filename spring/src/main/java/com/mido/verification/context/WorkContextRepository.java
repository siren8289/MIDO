package com.mido.verification.context;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface WorkContextRepository extends JpaRepository<WorkContext, UUID> {

    Optional<WorkContext> findByVerificationData_Id(UUID verificationDataId);
}
