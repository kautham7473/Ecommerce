package com.ecommerce.user_service.Controller;

import com.ecommerce.user_service.Entity.User;
import com.ecommerce.user_service.Service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class UserController {

    private final UserService userservice;

    public UserController(UserService userservice) {
        this.userservice = userservice;
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

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User registeredUser = userservice.registerUser(user);
            return ResponseEntity.ok(Map.of(
                    "message", "User Registered Successfully",
                    "user", registeredUser
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }
}
