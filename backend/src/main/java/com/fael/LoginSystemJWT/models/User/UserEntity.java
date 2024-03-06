package com.fael.LoginSystemJWT.models.User;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "Users")
@Entity(name = "user")
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class UserEntity implements UserDetails{
        
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(length = 255, nullable = false)
        private String login;

        @Column(length = 255, nullable = false)
        private String password;

        @Column(length = 255, nullable = false)
        private UserRole role;



        public UserEntity(String login, String password, UserRole role) {
                this.login = login;
                this.password = password;
                this.role = role;
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
                return role.getAuthorities();
        }

        @Override
        public String getUsername() {
                return login;
        }

        @Override
        public boolean isAccountNonExpired() {
                return true;
        }

        @Override
        public boolean isAccountNonLocked() {
                return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
                return true;
        }

        @Override
        public boolean isEnabled() {
                return true;
        }
}
