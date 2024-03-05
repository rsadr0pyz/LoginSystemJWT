package com.fael.LoginSystemJWT.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fael.LoginSystemJWT.models.User.UserEntity;



public interface UserRepository extends JpaRepository<UserEntity, Long>{

        public UserEntity findByLogin(String login);
}
