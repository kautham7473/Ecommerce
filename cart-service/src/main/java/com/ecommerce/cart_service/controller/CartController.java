package com.ecommerce.cart_service.controller;

import com.ecommerce.cart_service.entity.CartItem;
import com.ecommerce.cart_service.dto.CartItemWithProduct;
import com.ecommerce.cart_service.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    // Add to cart
    @PostMapping
    public ResponseEntity<String> addToCart(@RequestBody CartItem cartItem) {
        cartService.addToCart(cartItem);
        return ResponseEntity.ok("Item added to cart");
    }

    // Get all items for a user with product details
    @GetMapping("/{userId}")
    public ResponseEntity<List<CartItemWithProduct>> getCart(@PathVariable Long userId) {
        return ResponseEntity.ok(cartService.getCartItems(userId));
    }

    // Remove item from cart
    @DeleteMapping("/{cartItemId}")
    public ResponseEntity<String> removeFromCart(@PathVariable Long cartItemId) {
        cartService.removeFromCart(cartItemId);
        return ResponseEntity.ok("Item removed from cart");
    }

    // Update quantity
    @PutMapping("/{cartItemId}")
    public ResponseEntity<String> updateQuantity(@PathVariable Long cartItemId, @RequestParam int quantity) {
        cartService.updateCartItemQuantity(cartItemId, quantity);
        return ResponseEntity.ok("Quantity updated");
    }
}
