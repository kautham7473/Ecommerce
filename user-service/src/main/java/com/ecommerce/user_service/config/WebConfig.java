package com.ecommerce.user_service.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173","https://neocart-ui.onrender.com")
                .allowedMethods("*")
                .allowedHeaders("*") // <--- this is key
                .allowCredentials(true); // optional, use if you're using cookies or sessions
    }

}
