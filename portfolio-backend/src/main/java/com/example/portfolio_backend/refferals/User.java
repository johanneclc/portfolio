package com.example.portfolio_backend.refferals;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id; 

    @Column(name = "name")
    private String name;

    @Column(name = "job")
    private String job;

    @Column(name = "company")
    private String company; 
    
    @OneToOne(mappedBy = "author", cascade = CascadeType.ALL)
    private Refferal refferal; 
}
