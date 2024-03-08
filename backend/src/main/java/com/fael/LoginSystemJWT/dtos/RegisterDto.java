package com.fael.LoginSystemJWT.dtos;

import com.fael.LoginSystemJWT.models.User.UserRole;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RegisterDto (

        @NotBlank
        String login,

        @NotBlank
        String password,

        @NotBlank
        String firstName,

        @NotBlank
        String lastName,

        @NotBlank
        @Email
        String email,

        @NotBlank
        UserRole role
){}
