package com.ecommerce.product_service.controller;

import com.ecommerce.product_service.dto.ProductRequestDTO;
import com.ecommerce.product_service.entity.Product;
import com.ecommerce.product_service.exception.InvalidUserException;
import com.ecommerce.product_service.service.ProductService;
import com.ecommerce.product_service.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;

    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("/products")
    @PreAuthorize("hasRole('ADMIN', 'SELLER')")
    public Product addNewProduct(@RequestBody ProductRequestDTO product, @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7).trim(); // Remove "Bearer " and trim
        Long sellerId = jwtUtil.extractUserId(token);
        return productService.addProduct(product, sellerId);
    }

    @GetMapping("/products")
    @PreAuthorize("hasRole('ADMIN', 'SELLER')")
    public List<Product> getAllProducts(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7).trim(); // Remove "Bearer " and trim
        Long sellerId = jwtUtil.extractUserId(token);
        String role = jwtUtil.extractRole(token);
        if(role.equalsIgnoreCase("SELLER"))
            return productService.getAllProducts(sellerId);
        else if (role.equalsIgnoreCase("ADMIN")) {
            return productService.getAllProductsAdmin();
        } else {
            throw new InvalidUserException("You have no access to this endpoint");
        }
    }

    @GetMapping("/products/{id}")
    @PreAuthorize("hasRole('SELLER')")
    public Product getProductById(@PathVariable("id") Long id) {
            return productService.getProductById(id);
    }

    @PutMapping("/products/{id}")
    @PreAuthorize("hasRole('ADMIN', 'SELLER')")
    public Product updateProduct(@PathVariable("id") Long id, @RequestBody ProductRequestDTO requestDTO, @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7).trim(); // Remove "Bearer " and trim
        Long sellerId = jwtUtil.extractUserId(token);
        return productService.updateProductById(id, requestDTO, sellerId);
    }

    @DeleteMapping("/products/{id}")
    @PreAuthorize("hasRole('ADMIN', 'SELLER')")
    public String deleteProduct(@PathVariable("id") Long id, @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7).trim(); // Remove "Bearer " and trim
        Long sellerId = jwtUtil.extractUserId(token);
        return productService.deleteProduct(id, sellerId);
    }
}
