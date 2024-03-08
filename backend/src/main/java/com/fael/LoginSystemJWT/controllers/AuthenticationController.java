package com.fael.LoginSystemJWT.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fael.LoginSystemJWT.dtos.LoginDto;
import com.fael.LoginSystemJWT.dtos.LoginResponseDto;
import com.fael.LoginSystemJWT.dtos.RegisterDto;
import com.fael.LoginSystemJWT.models.User.UserEntity;
import com.fael.LoginSystemJWT.repositories.UserRepository;
import com.fael.LoginSystemJWT.services.TokenService;

@RestController
@RequestMapping("auth")
public class AuthenticationController {
        
        @Autowired
        private AuthenticationManager authenticationManager;

        @Autowired
        private PasswordEncoder passwordEncoder;

        @Autowired
        private TokenService tokenService;

        @Autowired
        private UserRepository userRepository;
        

        @PostMapping("/login")
        public ResponseEntity<?> login(@RequestBody LoginDto loginDto){

              var usernamePassword = new UsernamePasswordAuthenticationToken(loginDto.login(), loginDto.password());  
              var auth = authenticationManager.authenticate(usernamePassword);

              String token = tokenService.generateToken((UserEntity) auth.getPrincipal());
              return ResponseEntity.ok(new LoginResponseDto(token));
        }

        @PostMapping("/register")
        public ResponseEntity<?> register(@RequestBody RegisterDto registerDto){

                if(userRepository.findByLogin(registerDto.login()) != null){
                        return ResponseEntity.badRequest().build();
                }

                String encryptedPassword = passwordEncoder.encode(registerDto.password());
                
                UserEntity user = new UserEntity(registerDto.login(), encryptedPassword, registerDto.role(), 
                                                registerDto.firstName(), registerDto.lastName(), registerDto.email());

                userRepository.save(user);

                return ResponseEntity.ok().build();
        }
}
