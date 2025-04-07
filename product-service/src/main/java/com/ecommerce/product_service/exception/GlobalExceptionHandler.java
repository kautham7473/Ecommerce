package com.ecommerce.product_service.exception;

import com.ecommerce.product_service.dto.ProductResponseDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UnauthorizedUserException.class)
    public ResponseEntity<ProductResponseDTO> handleUnauthorizedUserException(UnauthorizedUserException ex) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ProductResponseDTO(ex.message));
    }

    @ExceptionHandler(InvalidUserException.class)
    public ResponseEntity<ProductResponseDTO> handleInvalidUserException(InvalidUserException ex) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ProductResponseDTO(ex.message));
    }
}
