package com.ecommerce.cart_service.dto;

import com.ecommerce.cart_service.entity.CartItem;
import com.ecommerce.cart_service.entity.ProductInfo;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CartItemWithProduct {
    private CartItem cartItem;
    private ProductInfo productInfo;
}
