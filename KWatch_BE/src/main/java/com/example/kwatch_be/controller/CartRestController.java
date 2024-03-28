package com.example.kwatch_be.controller;

import com.example.kwatch_be.model.Cart;
import com.example.kwatch_be.model.Product;
import com.example.kwatch_be.service.ICartService;
import com.example.kwatch_be.service.ICartStatusService;
import com.example.kwatch_be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/cart")
public class CartRestController {
    @Autowired
    private ICartService cartService;

    @Autowired
    private IProductService productService;

    @Autowired
    private ICartStatusService cartStatusService;

    @GetMapping("/{id}")
    private ResponseEntity<List<Cart>> getCart(@PathVariable Integer id) {
        List<Cart> getListCart = cartService.getCartByIdUser(id);
        return new ResponseEntity<>(getListCart, HttpStatus.OK);
    }

    @GetMapping("price/{id}")
    private ResponseEntity<Double> getAmountPriceCart(@PathVariable Integer id) {
        Double priceCart = cartService.getTotalPriceCart(id);
        return new ResponseEntity<>(priceCart, HttpStatus.OK);
    }

    @GetMapping("addToCart/{idUser}/{idProduct}")
    private void addToCart(@PathVariable Integer idUser, @PathVariable Integer idProduct) {
        List<Cart> carts = cartService.checkCart(idUser, idProduct);
        if (carts.isEmpty()) {
            cartService.addToCard(idUser, idProduct);
        } else {
            Cart cart = cartService.findCartByIdAccountAndIdAccessory(idUser, idProduct);
            cart.setQuantity(cart.getQuantity() + 1);
            cartService.save(cart);
        }
    }

    @GetMapping("COD")
    private void Cod(@RequestParam Double price,
                         @RequestParam Integer idUser,
                         @RequestParam(defaultValue = "") String note,
                         @RequestParam(defaultValue = "") String address,
                         @RequestParam(defaultValue = "") String phone,
                         @RequestParam(defaultValue = "") String email) {
        List<Cart> carts = cartService.getListPay(idUser);
        LocalDateTime dateTime = LocalDateTime.now();
        for (Cart cart : carts) {
            Product product = productService.findById(cart.getProduct().getId());
            product.setQuantity(product.getQuantity() - cart.getQuantity());
            productService.save(product);
            cart.setCartStatus(cartStatusService.findById(2));
            cart.setStatusPayment(1);
            cart.setDateBuy(dateTime);
            cart.setTotalPrice(product.getPrice());
            cart.setNote(note);
            cartService.save(cart);
        }
    }

    @GetMapping("payment/success/{idUser}")
    private void donePayment(@PathVariable Integer idCart) {
        Cart cart = cartService.findById(idCart);
        LocalDateTime dateTime = LocalDateTime.now();
        Product product = productService.findById(cart.getProduct().getId());
        cart.setCartStatus(cartStatusService.findById(2));
        cart.setStatusPayment(2);
        cart.setDateBuy(dateTime);
        cart.setTotalPrice(product.getPrice());
        cartService.save(cart);
    }

    @GetMapping("deleteCart/{idCart}")
    private void deleteCart(@PathVariable Integer idCart) {
        cartService.deleteCart(idCart);
    }

    @GetMapping("setQuantity/{quantity}/{idCart}")
    private void deleteCart(@PathVariable int quantity, @PathVariable Integer idCart) {
        cartService.updateQuantity(quantity, idCart);
    }

    @GetMapping("checkQuantityPayment")
    private ResponseEntity<?> checkQuantityPayment(@RequestParam Integer idUser) {
        List<Cart> carts = cartService.getListPay(idUser);
        for (Cart cart : carts) {
            Product product = productService.findById(cart.getProduct().getId());
            System.out.println(product.getQuantity() - cart.getQuantity() < -1);
            if (product.getQuantity() - cart.getQuantity() < -1) {
                System.out.println("NO");
                return new ResponseEntity<>("NO", HttpStatus.OK);
            }
        }
        System.out.println("YES");
        return new ResponseEntity<>("YES", HttpStatus.OK);
    }
}
