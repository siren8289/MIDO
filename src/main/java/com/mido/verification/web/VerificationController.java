package com.mido.verification.web;

import com.mido.verification.service.VerificationService;
import com.mido.verification.web.dto.IdResponse;
import com.mido.verification.web.dto.ManualInputRequest;
import com.mido.verification.web.dto.WorkContextResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@RestController
@RequestMapping("/api/verifications")
public class VerificationController {

    private final VerificationService verificationService;

    public VerificationController(VerificationService verificationService) {
        this.verificationService = verificationService;
    }

    @PostMapping("/manual")
    public ResponseEntity<IdResponse> createManual(@RequestBody ManualInputRequest request) {
        UUID id = verificationService.createManualInput(request);
        return ResponseEntity.ok(new IdResponse(id));
    }

    @PostMapping("/{id}/upload")
    public ResponseEntity<Void> uploadFile(
            @PathVariable("id") UUID id,
            @RequestParam("file") MultipartFile file
    ) throws IOException {
        verificationService.uploadFile(id, file);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}/context")
    public ResponseEntity<WorkContextResponse> getContext(@PathVariable("id") UUID id) {
        return ResponseEntity.ok(verificationService.getWorkContext(id));
    }
}

