package com.ecommerce.product_service.controller;

import com.ecommerce.product_service.entity.Product;
import com.ecommerce.product_service.service.ProductService;
import com.ecommerce.product_service.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin(origins = "http://localhost:5173") // Adjust origin as needed
public class CustomerProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private JwtUtil jwtUtil;

    /**
     * This endpoint is accessible to ROLE_CONSUMER only.
     * Returns all products visible to consumers.
     */
    @GetMapping("/products")
    @PreAuthorize("hasRole('CUSTOMER')")
    public List<Product> getAllProductsForCustomer() {
        return productService.getAllProductsAdmin(); // or another method if filtered
    }

    /**
     * Consumer can view individual product details.
     */
    @GetMapping("/products/{id}")
    @PreAuthorize("hasRole('CUSTOMER')")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }
}
