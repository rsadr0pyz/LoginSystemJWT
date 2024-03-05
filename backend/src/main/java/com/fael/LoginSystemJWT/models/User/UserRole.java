package com.fael.LoginSystemJWT.models.User;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;;

public enum UserRole {
        ADMIN("admin", List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), 
                                    new SimpleGrantedAuthority("ROLE_USER"))),

        USER("admin", List.of(new SimpleGrantedAuthority("ROLE_USER")));





        private String role;
        private Collection<? extends GrantedAuthority> authorities;

        UserRole(String role, Collection<? extends GrantedAuthority> authorities){
                this.role = role;
                this.authorities = authorities;
        }

        public String getRole(){
                return role;
        }

        public Collection<? extends GrantedAuthority> getAuthorities(){
                return authorities;
        }
}
