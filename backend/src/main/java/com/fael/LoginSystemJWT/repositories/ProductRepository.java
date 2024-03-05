package com.fael.LoginSystemJWT.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fael.LoginSystemJWT.entities.ProductEntity;



@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long>{
        
}
