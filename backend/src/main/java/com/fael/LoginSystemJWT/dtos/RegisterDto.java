package com.fael.LoginSystemJWT.dtos;

import com.fael.LoginSystemJWT.models.User.UserRole;

import jakarta.validation.constraints.NotBlank;

public record RegisterDto (

        @NotBlank
        String login,

        @NotBlank
        String password,

        @NotBlank
        UserRole role
){}
