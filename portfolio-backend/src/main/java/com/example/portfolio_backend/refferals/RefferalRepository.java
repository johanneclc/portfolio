package com.example.portfolio_backend.refferals;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RefferalRepository extends JpaRepository<Refferal, Integer> {
    
}
