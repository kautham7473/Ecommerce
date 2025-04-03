package com.ecommerce.product_service.entity;

import jakarta.persistence.Entity;

import java.awt.*;

@Entity
public class Product {
    private int productId;
    private String productName;
    private String productDescription;
}
