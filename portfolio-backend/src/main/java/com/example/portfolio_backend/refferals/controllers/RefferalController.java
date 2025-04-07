package com.example.portfolio_backend.refferals.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.portfolio_backend.refferals.models.Refferal;
import com.example.portfolio_backend.refferals.services.RefferalService;


@CrossOrigin
@RestController
@RequestMapping("/refferals")
public class RefferalController {
    final RefferalService refferalService;

    public RefferalController (RefferalService refferalService) {
        this.refferalService = refferalService;
    }

    @GetMapping()
    public ResponseEntity<List<Refferal>> getAll() {
        return new ResponseEntity<>(refferalService.getAllRefferals(), HttpStatus.OK); 
    }

    @PostMapping()
    public ResponseEntity<Refferal> createRefferal(@RequestBody Refferal refferal) {
        return new ResponseEntity<>(refferalService.createRefferal(refferal), HttpStatus.CREATED);
    }
}
