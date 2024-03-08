package com.fael.LoginSystemJWT.services;

import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.fael.LoginSystemJWT.models.User.UserEntity;

@Service
public class TokenService {
        

        private String secret = "abcdefghijklmnopqrstuvwxyz";

        private final Algorithm algorithm = Algorithm.HMAC256(secret);

        public String generateToken(UserEntity user){
                try {
                        String token = JWT.create()
                                          .withIssuer("Login-System")
                                          .withSubject(user.getLogin())
                                          .withClaim("firstName", user.getFirstName())
                                          .withClaim("lastName", user.getLastName())
                                          //.withExpiresAt(generateExpirationDate())
                                          .sign(algorithm);

                        return token;
                } catch (JWTCreationException e) {
                        throw new RuntimeException("Error while generating token", e);
                }
        }


        public String validateToken(String token){

                try {
                        return JWT.require(algorithm)
                                  .withIssuer("Login-System")
                                  .build()
                                  .verify(token)
                                  .getSubject();
                } catch (JWTVerificationException e) {
                        return "";
                }
        }

        /*private Instant generateExpirationDate(){
                return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
        }*/
}
