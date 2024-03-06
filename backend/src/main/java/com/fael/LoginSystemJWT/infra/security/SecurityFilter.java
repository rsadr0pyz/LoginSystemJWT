package com.fael.LoginSystemJWT.infra.security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fael.LoginSystemJWT.models.User.UserEntity;
import com.fael.LoginSystemJWT.repositories.UserRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class SecurityFilter extends OncePerRequestFilter{

        @Autowired
        private TokenService tokenService;

        @Autowired
        private UserRepository userRepository;

        @Override
        protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                        FilterChain filterChain) throws ServletException, IOException {
                
                String token = recoverToken(request);
                System.out.println("token: "+ token);

                if(token != null){
                        var login = tokenService.validateToken(token);
                        System.out.println("Login:" + login);
                        
                        if(!login.isEmpty()){
                                UserEntity user = userRepository.findByLogin(login);
                                var authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
        
                                SecurityContextHolder.getContext().setAuthentication(authentication);
                        }
                }
                filterChain.doFilter(request, response);
        }


        private String recoverToken(HttpServletRequest request){

                var authHeader = request.getHeader("Authorization");

                if(authHeader == null) return null;

                return authHeader.replace("Bearer", "");
        }
        
}
