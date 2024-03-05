package com.fael.LoginSystemJWT.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fael.LoginSystemJWT.dtos.ProductDto;
import com.fael.LoginSystemJWT.models.Product.ProductEntity;
import com.fael.LoginSystemJWT.repositories.ProductRepository;

import jakarta.validation.Valid;

@Service
public class ProductService {

        @Autowired
        private ProductRepository productRepository;

        public List<ProductEntity> getAll() {
                return productRepository.findAll();
        }

        public ProductEntity registerProduct(@Valid ProductDto productDto) {
                ProductEntity productEntity = new ProductEntity();

                BeanUtils.copyProperties(productDto, productEntity);

                return productRepository.save(productEntity);
        }


        
}
