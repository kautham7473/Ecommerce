//package com.ecommerce.product_service.config;
//
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//
//import javax.sql.DataSource;
//
//@Configuration
//public class DataSourceConfig {
//
//    @Bean
//    @ConfigurationProperties(prefix = "spring.datasource")
//    public DataSource dataSource() {
//        DriverManagerDataSource dataSource = new DriverManagerDataSource();
//        dataSource.setDriverClassName("org.mariadb.jdbc.Driver");
//        dataSource.setUrl("jdbc:mariadb://kautham.helioho.st:3306/kautham_ecomm");
//        dataSource.setUsername("kautham_admin");
//        dataSource.setPassword("why873~4R");
//        return dataSource;
//    }
//}
//
