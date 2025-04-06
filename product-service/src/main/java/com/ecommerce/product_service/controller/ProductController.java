package com.ecommerce.product_service.controller;

import com.ecommerce.product_service.dto.ProductRequestDTO;
import com.ecommerce.product_service.entity.Product;
import com.ecommerce.product_service.service.ProductService;
import com.ecommerce.product_service.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;

    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("/products")
    public Product addNewProduct(@RequestBody ProductRequestDTO product, @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7).trim(); // Remove "Bearer " and trim
        Long sellerId = jwtUtil.extractUserId(token);
        return productService.addProduct(product, sellerId);
    }

    @GetMapping("/products")
    public List<Product> getAllProducts(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7).trim(); // Remove "Bearer " and trim
        Long sellerId = jwtUtil.extractUserId(token);
        return productService.getAllProducts(sellerId);
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable("id") Long id) {
        return productService.getProductById(id);
    }

    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable("id") Long id, @RequestBody ProductRequestDTO requestDTO, @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7).trim(); // Remove "Bearer " and trim
        Long sellerId = jwtUtil.extractUserId(token);
        return productService.updateProductById(id, requestDTO, sellerId);
    }

    @DeleteMapping("/product/{id}")
    public String deleteProduct(@PathVariable("id") Long id, @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7).trim(); // Remove "Bearer " and trim
        Long sellerId = jwtUtil.extractUserId(token);
        return productService.deleteProduct(id, sellerId);
    }
}
