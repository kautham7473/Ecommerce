package com.ecommerce.discovery_server.scheduler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
@Slf4j
public class PingScheduler {
    @Autowired
    RestTemplate restTemplate;
    @Scheduled(fixedRate = 300000) // 5 minutes
    public void pingDependency() {
        try {
            String response = restTemplate.getForObject("https://product-service-7gkf.onrender.com/ping", String.class);
            if (response!=null)
                log.info("Product Service had been called and got the response {}",response);
        } catch (Exception e) {
            // Log the failure but DON’T crash the service
            log.warn("Ping failed for Product Service: {}", e.getMessage());
        }
    }

}
