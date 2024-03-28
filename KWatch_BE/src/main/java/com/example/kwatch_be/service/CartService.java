package com.example.kwatch_be.service;

import com.example.kwatch_be.model.Cart;
import com.example.kwatch_be.repository.ICartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService{
    @Autowired
    private ICartRepository cartRepository;
    @Override
    public List<Cart> getListPay(Integer id) {
        return cartRepository.getListPay(id);
    }

    @Override
    public List<Cart> getCartByIdUser(Integer id) {
        return cartRepository.getCart(id);
    }

    @Override
    public Double getTotalPriceCart(Integer id) {
        return cartRepository.getTotalPriceByAccountId(id);
    }

    @Override
    public void addToCard(Integer idUser, Integer idProduct) {
        cartRepository.addToCard(idUser,idProduct);
    }

    @Override
    public void deleteCart(Integer id) {
        cartRepository.deleteById(id);
    }

    @Override
    public void updateQuantity(int quantity, Integer idCart) {
        cartRepository.updateQuantity(quantity,idCart);
    }

    @Override
    public void save(Cart cart) {
        cartRepository.save(cart);
    }

    @Override
    public Cart findById(Integer id) {
        return cartRepository.findById(id).orElse(null);
    }

    @Override
    public List<Cart> checkCart(Integer idUser, Integer idProduct) {
        return cartRepository.checkCart(idUser,idProduct);
    }

    @Override
    public Cart findCartByIdAccountAndIdAccessory(Integer idUser, Integer idProduct) {
        return cartRepository.findCartByIdUserAndIdProduct(idUser,idProduct);
    }
}
