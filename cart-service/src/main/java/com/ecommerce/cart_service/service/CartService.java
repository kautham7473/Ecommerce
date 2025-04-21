package com.ecommerce.cart_service.service;

import com.ecommerce.cart_service.dto.CartItemWithProduct;
import com.ecommerce.cart_service.entity.CartItem;
import com.ecommerce.cart_service.entity.ProductInfo;
import com.ecommerce.cart_service.repository.CartItemRepository;
import com.ecommerce.cart_service.repository.ProductInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartItemRepository cartRepo;
    private final ProductInfoRepository productRepo;

    public List<CartItemWithProduct> getCartItems(Long userId) {
        List<CartItem> items = cartRepo.findByUserId(userId);
        return items.stream().map(item -> {
            ProductInfo product = productRepo.findById(item.getProductId()).orElse(null);
            return new CartItemWithProduct(item, product);
        }).collect(Collectors.toList());
    }

    public void addToCart(CartItem item) {
        cartRepo.save(item);
    }

    public void removeFromCart(Long cartItemId) {
        cartRepo.deleteById(cartItemId);
    }

    public void updateCartItemQuantity(Long cartItemId, int quantity) {
        CartItem item = cartRepo.findById(cartItemId).orElseThrow();
        item.setQuantity(quantity);
        cartRepo.save(item);
    }

}
