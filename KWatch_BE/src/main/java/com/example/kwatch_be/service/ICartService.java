package com.example.kwatch_be.service;

import com.example.kwatch_be.model.Cart;

import java.util.List;

public interface ICartService {
    List<Cart> getListPay(Integer id);
    List<Cart> getCartByIdUser(Integer id);
    Double getTotalPriceCart(Integer id);
    void addToCard(Integer idUser, Integer idProduct);
    void deleteCart(Integer id);
    void updateQuantity(int quantity, Integer idCart);
    void save(Cart cart);

    Cart findById(Integer id);
    List<Cart> checkCart(Integer idUser, Integer idProduct);
    Cart findCartByIdAccountAndIdAccessory(Integer idUser, Integer idProduct);
}
