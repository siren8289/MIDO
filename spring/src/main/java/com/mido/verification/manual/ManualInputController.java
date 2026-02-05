package com.mido.verification.manual;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/verifications")
public class ManualInputController {

    private final ManualInputService manualInputService;

    public ManualInputController(ManualInputService manualInputService) {
        this.manualInputService = manualInputService;
    }

    @PostMapping("/manual")
    public ResponseEntity<IdResponse> create(@RequestBody ManualInputRequest request) {
        UUID id = manualInputService.create(request);
        return ResponseEntity.ok(new IdResponse(id));
    }
}
