package com.ecommerce.user_service.Service;

import com.ecommerce.user_service.Entity.User;
import com.ecommerce.user_service.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SignInService {

    private final UserRepository userrepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public SignInService(UserRepository userrepository) {
        this.userrepository = userrepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public User authenticateUser(String username, String password){
        User user = userrepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Invalid username or password"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid username or password");
        }
        return user;
    }
}
