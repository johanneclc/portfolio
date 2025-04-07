package com.example.portfolio_backend.refferals.models;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "refferal")
public class Refferal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id; 

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User author; 

    @Column()
    private String description; 

    @Column()
    private String date; 

    // TODO: à tester
    @ColumnDefault("0")
    private Boolean isApproved; 
}
