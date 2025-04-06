package com.ecommerce.product_service.service;

import com.ecommerce.product_service.dto.ProductRequestDTO;
import com.ecommerce.product_service.entity.Product;
import com.ecommerce.product_service.exception.UnauthorizedUserException;
import com.ecommerce.product_service.repo.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Slf4j
@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public Product addProduct(ProductRequestDTO requestDTO, Long user) {
        try {
            Product product = new Product(requestDTO.getName(), requestDTO.getDescription(), requestDTO.getPrice(), requestDTO.getStock(), requestDTO.getCategory()
                                            , user, requestDTO.getDiscountPercentage(), requestDTO.getImageUrl(), requestDTO.getAverageRating());
            return productRepository.save(product);
        } catch (RuntimeException e) {
            return null;
        }
    }

    public List<Product> getAllProducts(Long sellerId) {
        try {
            log.info("Fetching products uploaded by the seller");
            return productRepository.findBySellerId(sellerId);
        } catch (Exception e) {
            log.warn("Couldn't find the products uploaded by the seller");
            return null;
        }
    }

    public Product getProductById(Long id) {
        log.info("Fetching for the Product");
        Optional<Product> product = productRepository.findById(id);
        if(product.isPresent()) return product.get();
        else {
            log.warn("Product not found");
            return null;
        }
    }

    public Product updateProductById(Long id, ProductRequestDTO requestDTO, Long user) {
        try {
            Product product = productRepository.getReferenceById(id);
            if (Objects.equals(product.getSellerId(), user)) {
                product.setName(requestDTO.getName());
                product.setDescription(requestDTO.getDescription());
                product.setPrice(requestDTO.getPrice());
                product.setStock(requestDTO.getStock());
                product.setCategory(requestDTO.getCategory());
                product.setDiscountPercentage(requestDTO.getDiscountPercentage());
                product.setImageUrl(requestDTO.getImageUrl());
                product.setAverageRating(requestDTO.getAverageRating());
                return productRepository.save(product);
            }else {
                throw new UnauthorizedUserException("You're not authorized to modify this product");
            }

        } catch (RuntimeException e) {
            return null;
        }
    }

    public String deleteProduct(Long id, Long user) {
        Product product = productRepository.getReferenceById(id);
        if (Objects.equals(product.getSellerId(), user)) {
            productRepository.deleteById(id);
            return "Product have been deleted successfully";
        } else {
            throw new UnauthorizedUserException("You're not authorized to delete the product");
        }
    }
}
