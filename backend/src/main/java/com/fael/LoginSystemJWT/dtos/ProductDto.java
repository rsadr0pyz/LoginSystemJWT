package com.fael.LoginSystemJWT.dtos;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ProductDto {

        @NotBlank
        @Size(max = 50)
        private String name;

        @NotBlank
        @Size(max = 255)
        private String description;

        @NotNull
        @Min(0)
        private float price;

        @Min(0)
        private int amount;
}
