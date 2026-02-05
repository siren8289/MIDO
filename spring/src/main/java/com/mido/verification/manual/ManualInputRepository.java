package com.mido.verification.manual;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ManualInputRepository extends JpaRepository<ManualInput, UUID> {
}
