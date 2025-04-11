package com.ecommerce.product_service.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

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
