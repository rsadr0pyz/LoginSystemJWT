package com.fael.LoginSystemJWT.exceptionHandlers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.fael.LoginSystemJWT.controllers.ProductController;
import com.fael.LoginSystemJWT.exceptions.ProductNotFound;

@ControllerAdvice(assignableTypes = ProductController.class)
public class ProductControllerAdvice {
        
        @ExceptionHandler({ProductNotFound.class})
        public ResponseEntity<String> handleProductNotFoundException(ProductNotFound exc){
                return ResponseEntity.badRequest().body(exc.getMessage());
        }
}
