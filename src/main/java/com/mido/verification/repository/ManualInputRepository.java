package com.mido.verification.repository;

import com.mido.verification.domain.ManualInput;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ManualInputRepository extends JpaRepository<ManualInput, UUID> {
}

