package com.ecommerce.product_service.exception;

import com.ecommerce.product_service.entity.Product;

import java.util.List;

public class InvalidUserException extends RuntimeException {
    String message;
    public InvalidUserException(String s) {
        this.message = s;
    }
}
