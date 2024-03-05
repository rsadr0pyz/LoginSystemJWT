package com.fael.LoginSystemJWT.dtos;

import jakarta.validation.constraints.NotBlank;

public record LoginDto(
        @NotBlank 
        String login,

        @NotBlank 
        String password
){}

        
