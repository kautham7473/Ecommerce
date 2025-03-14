package com.ecommerce.user_service.Controller;

import com.ecommerce.user_service.DTO.LoginDto;
import com.ecommerce.user_service.Entity.User;
import com.ecommerce.user_service.Service.SignInService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class SignInControllerTest {

    private MockMvc mockMvc;

    @Mock
    private SignInService signInService;

    @InjectMocks
    private SigninController signinController;

    private ObjectMapper objectMapper = new ObjectMapper();

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(signinController).build();
    }

    @Test
    void testLogin_Success() throws Exception {

        LoginDto loginDto = new LoginDto("testUser", "password123");
        User user = new User();
        user.setUsername("testUser");

        when(signInService.authenticateUser("testUser", "password123")).thenReturn(user);

        mockMvc.perform(post("/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(loginDto)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message").value("Login Succesfull"))
                .andExpect(jsonPath("$.user.username").value("testUser"));

        verify(signInService, times(1)).authenticateUser("testUser", "password123");
    }

    @Test
    void testLogin_Failure() throws Exception {
        LoginDto loginDto = new LoginDto("wrongUser", "wrongPass");

        when(signInService.authenticateUser("wrongUser", "wrongPass")).thenThrow(new RuntimeException("Invalid credentials"));

        mockMvc.perform(post("/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(loginDto)))
                .andExpect(status().isUnauthorized())
                .andExpect(content().string("Invalid username or password"));

        verify(signInService, times(1)).authenticateUser("wrongUser", "wrongPass");
    }
}
