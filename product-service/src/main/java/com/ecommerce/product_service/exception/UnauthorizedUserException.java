package com.ecommerce.product_service.exception;

public class UnauthorizedUserException extends RuntimeException {

    String message;

    public UnauthorizedUserException(String message) {
        this.message = message;
    }
}
