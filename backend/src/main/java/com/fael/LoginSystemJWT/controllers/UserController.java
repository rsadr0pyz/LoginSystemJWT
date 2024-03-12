package com.fael.LoginSystemJWT.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fael.LoginSystemJWT.models.User.UserEntity;
import com.fael.LoginSystemJWT.repositories.UserRepository;

@RestController
@RequestMapping("/api/users")
public class UserController {
        
        @Autowired
        private UserRepository userRepository;

        @GetMapping("/all")
        public ResponseEntity<List<UserEntity>> getAllUsers(){
                return ResponseEntity.ok().body(userRepository.findAll());
        }
}
