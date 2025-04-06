package com.ecommerce.product_service.dto;

import com.ecommerce.product_service.entity.ProductCategory;
import lombok.Data;

@Data
public class ProductRequestDTO {
    private String name;
    private String description;
    private Double price;
    private Integer stock;
    private ProductCategory category;
    private Double discountPercentage;
    private String imageUrl;
    private Double averageRating;
}
