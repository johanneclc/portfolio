package com.example.portfolio_backend.refferals;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/refferals")
public class RefferalController {
    final RefferalRepository refferalRepository;
    final UserRepository userRepository;

    public RefferalController (RefferalRepository refferalRepository, UserRepository userRepository) {
        this.refferalRepository = refferalRepository;
        this.userRepository = userRepository;
    }

    @GetMapping()
    public ResponseEntity<List<Refferal>> getAll() {
        return new ResponseEntity<>(refferalRepository.findAll(), HttpStatus.OK); 
    }

    @PostMapping()
    @Transactional
    public ResponseEntity<Refferal> createRefferal(@RequestBody Refferal refferal) {
        return new ResponseEntity<>(refferalRepository.save(refferal), HttpStatus.CREATED);
    }
}
