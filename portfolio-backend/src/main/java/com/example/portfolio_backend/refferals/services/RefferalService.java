package com.example.portfolio_backend.refferals.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.portfolio_backend.refferals.models.Refferal;
import com.example.portfolio_backend.refferals.repositories.RefferalRepository;

import jakarta.transaction.Transactional;

@Service
public class RefferalService {
    
    private final RefferalRepository refferalRepository;

    public RefferalService (RefferalRepository refferalRepository) {
        this.refferalRepository = refferalRepository;
    }

    @Transactional
    public List<Refferal> getAllRefferals() {
        return refferalRepository.findAll(); 
    }

    public Refferal createRefferal(Refferal refferal){
        return refferalRepository.save(refferal);
    }
}
