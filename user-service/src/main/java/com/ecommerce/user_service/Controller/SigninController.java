package com.ecommerce.user_service.Controller;

import com.ecommerce.user_service.DTO.LoginDto;
import com.ecommerce.user_service.Entity.User;
import com.ecommerce.user_service.Service.SigninService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class SigninController {
    private final SigninService signinService;

    @Autowired
    public SigninController(SigninService signinService) {
        this.signinService = signinService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDto loginDto) {
        try {
            User user = signinService.Authenticate(loginDto.getUsername(), loginDto.getPassword());
            return ResponseEntity.ok(Map.of(
                    "message", "Login Succesfull",
                    "user", user
            ));
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }

}
