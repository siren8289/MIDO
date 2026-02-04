package com.mido.verification.repository;

import com.mido.verification.domain.VerificationData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VerificationDataRepository extends JpaRepository<VerificationData, UUID> {
}

