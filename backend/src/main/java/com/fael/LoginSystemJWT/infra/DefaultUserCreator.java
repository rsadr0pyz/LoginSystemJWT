package com.fael.LoginSystemJWT.infra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.fael.LoginSystemJWT.models.User.UserEntity;
import com.fael.LoginSystemJWT.models.User.UserRole;
import com.fael.LoginSystemJWT.repositories.UserRepository;


@Component
public class DefaultUserCreator implements CommandLineRunner{


        @Autowired UserRepository userRepository;
        @Autowired PasswordEncoder passwordEncoder;


        @Override
        public void run(String... args) throws Exception {
		if(userRepository.findByLogin("admin") != null){
			return;
                }

                String encryptedPassword = passwordEncoder.encode("admin");
                
                UserEntity user = new UserEntity("admin", encryptedPassword, UserRole.ADMIN);
		
		user.setFirstName("Admin");
                userRepository.save(user);
	}
        
}
