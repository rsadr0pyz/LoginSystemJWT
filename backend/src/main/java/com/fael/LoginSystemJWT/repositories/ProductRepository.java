package com.fael.LoginSystemJWT.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fael.LoginSystemJWT.models.Product.ProductEntity;



@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long>{
        
}
