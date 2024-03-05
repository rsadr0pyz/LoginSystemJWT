package com.fael.LoginSystemJWT.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.fael.LoginSystemJWT.repositories.UserRepository;




@Service
public class AuthorizationService implements UserDetailsService{

        @Autowired
        private UserRepository userRepository;

        @Override
        public UserDetails loadUserByUsername(String username){
                return userRepository.findByLogin(username);
        }
        
}
