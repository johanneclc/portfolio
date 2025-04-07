package com.example.portfolio_backend.refferals.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.portfolio_backend.refferals.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    
}
