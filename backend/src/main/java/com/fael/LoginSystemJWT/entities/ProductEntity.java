package com.fael.LoginSystemJWT.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "Products")
@Entity(name = "product")
@NoArgsConstructor
@Getter 
@Setter
public class ProductEntity {
        
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(length = 50, nullable = false)
        private String name;

        @Column(length = 255, nullable = false)
        private String description;

        @Column(precision = 2, nullable = false)
        private float price;

        @Column
        private int amount;
}
