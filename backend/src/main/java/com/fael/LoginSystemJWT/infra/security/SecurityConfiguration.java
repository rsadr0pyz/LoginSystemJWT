package com.fael.LoginSystemJWT.infra.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fael.LoginSystemJWT.models.User.UserRole;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {


        @Autowired
        private SecurityFilter securityFilter;

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

                return httpSecurity
                                .csrf(csrf -> csrf.disable())
                                .sessionManagement(session -> session
                                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                                .authorizeHttpRequests(authorize -> {
                                        authorize.requestMatchers(HttpMethod.POST, "/auth/login")
                                                        .permitAll();
                                        authorize.requestMatchers(HttpMethod.POST, "/auth/register")
                                                        .permitAll();
                                        authorize.requestMatchers(HttpMethod.POST, "/api/products/register")
                                                        .hasRole(UserRole.ADMIN.getRole());
                                        authorize.requestMatchers(HttpMethod.POST, "/api/products/update*")
                                                        .hasRole(UserRole.ADMIN.getRole());
                                        authorize.anyRequest().authenticated();
                                })
                                .build();
        }

        @Bean
        public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
                return config.getAuthenticationManager();
        }

        @Bean
        public PasswordEncoder passwordEncoder(){
                return new BCryptPasswordEncoder();
        }
}
