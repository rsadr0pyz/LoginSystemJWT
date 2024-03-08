package com.fael.LoginSystemJWT.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fael.LoginSystemJWT.dtos.ProductDto;
import com.fael.LoginSystemJWT.models.Product.ProductEntity;
import com.fael.LoginSystemJWT.services.ProductService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/products")
public class ProductController {
        
        @Autowired
        private ProductService productService;

        @GetMapping("/all")
        public ResponseEntity<List<ProductEntity>> getAllProducts(){
                return ResponseEntity.ok().body(productService.getAll());
        }       

        @PostMapping("/register")
        public ResponseEntity<ProductEntity> registerProduct(@RequestBody @Valid ProductDto productDto){
                return ResponseEntity.ok().body(productService.registerProduct(productDto));
        }

        @PostMapping("/update/{id}")
        public ResponseEntity<ProductEntity> updateProduct(@PathVariable("id") Long id, @RequestBody @Valid ProductDto productDto){
                productService.updateProduct(productDto, id);
                return ResponseEntity.ok().build();
        }
        
}
