package com.mido.verification.upload;

import com.mido.verification.common.VerificationData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UploadedFileRepository extends JpaRepository<UploadedFile, UUID> {

    Optional<UploadedFile> findTopByVerificationDataOrderByUploadedAtDesc(VerificationData verificationData);
}
