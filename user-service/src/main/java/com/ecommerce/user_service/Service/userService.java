package com.ecommerce.user_service.Service;


import com.ecommerce.user_service.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.ecommerce.user_service.Repository.userRepository;

import java.util.List;

@Service
public class userService {

    private final userRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public userService(userRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public User registerUser(User user){
        if(userRepository.findByEmail(user.getEmail()).isPresent()){
            throw  new RuntimeException("User email is already present");
        }
        if(userRepository.findByPhoneNo(user.getPhoneNo()).isPresent()){
            throw  new RuntimeException("User phone number is already present");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
