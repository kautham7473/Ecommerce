package com.ecommerce.user_service.controller;

import com.ecommerce.user_service.entity.User;
import com.ecommerce.user_service.repository.UserRepository;
import com.ecommerce.user_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = {"http://localhost:5173", "https://neocart-ui.onrender.com"})
public class UserController {

    @Autowired
    private UserService userservice;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/check-username")
    public ResponseEntity<Map<String, Boolean>> checkUsername(@RequestParam String username) {
        boolean isAvailable = !userRepository.existsByUsername(username);
        return ResponseEntity.ok(Collections.singletonMap("available", isAvailable));
    }


    @GetMapping("/all")
    public ResponseEntity<?> getAllUsers() {
        List<User> users = userservice.getAllUsers();
        if (users.isEmpty()) {
            return ResponseEntity.ok(Map.of(
                    "message", "No users found in the database."
            ));
        }
        return ResponseEntity.ok(users);
    }
}
