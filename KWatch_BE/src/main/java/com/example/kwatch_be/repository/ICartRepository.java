package com.example.kwatch_be.repository;

import com.example.kwatch_be.model.Cart;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICartRepository extends JpaRepository<Cart,Integer> {
    @Query(value = "select * from cart c where c.cart_status_id = 1 and c.user_id = :id", nativeQuery = true)
    List<Cart> getCart(@Param("id") Integer id);

    @Query(value = "select sum(p.price * c.quantity) from cart c\n" +
            "join product p on c.product_id = p.id\n" +
            "where c.cart_status_id = 1 and c.user_id = :id", nativeQuery = true)
    Double getTotalPriceByAccountId(@Param("id") Integer id);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO cart (`user_id`, `product_id`, `cart_status_id`,`quantity`,`status_payment`) VALUES (:idUser, :idProduct, '1','1','0')", nativeQuery = true)
    void addToCard(@Param("idUser") Integer idUser, @Param("idProduct") Integer idProduct);

    @Modifying
    @Transactional
    @Query(value = "select * from cart c\n" +
            "where c.cart_status_id = 1 and status_payment = 0 and user_id = :id ;", nativeQuery = true)
    List<Cart> getListPay(@Param("id") Integer id);

    @Modifying
    @Transactional
    @Query(value = "update cart set quantity = :quantity where cart.id = :id", nativeQuery = true)
    void updateQuantity(@Param("quantity") int quantity, @Param("id") Integer id);

    @Query(value = "select * from cart c\n" +
            "where c.user_id =  :idUser and c.product_id = :idProduct and c.cart_status_id = 1 ", nativeQuery = true)
    List<Cart> checkCart(@Param("idUser") Integer id, @Param("idProduct") Integer idAccessory);

    @Query(value = "select * from cart c\n" +
            "where c.user_id =  :idUser and c.product_id = :idProduct and c.cart_status_id = 1 ", nativeQuery = true)
    Cart findCartByIdUserAndIdProduct(@Param("idUser") Integer idUser, @Param("idProduct") Integer idProduct);

}
