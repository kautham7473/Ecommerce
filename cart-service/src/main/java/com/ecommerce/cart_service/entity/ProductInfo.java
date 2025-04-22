package com.ecommerce.cart_service.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "products")
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ProductInfo {

    @Id
    @Column(name = "product_id")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "price")
    private Double price;
}
