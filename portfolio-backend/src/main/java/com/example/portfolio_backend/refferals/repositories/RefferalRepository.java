package com.example.portfolio_backend.refferals.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.portfolio_backend.refferals.models.Refferal;

@Repository
public interface RefferalRepository extends JpaRepository<Refferal, Integer> {
    
}
