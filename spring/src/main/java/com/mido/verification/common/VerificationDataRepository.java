package com.mido.verification.common;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VerificationDataRepository extends JpaRepository<VerificationData, UUID> {
}
