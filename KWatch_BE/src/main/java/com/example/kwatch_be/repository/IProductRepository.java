package com.example.kwatch_be.repository;

import com.example.kwatch_be.dto.ProductDto;
import com.example.kwatch_be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT p.code AS productCode, p.color AS productColor, " +
            "p.description AS productDescription, p.name AS productName, " +
            "p.price AS productPrice, p.price_sale AS productPriceSale, " +
            "p.quantity AS productQuantity, p.sex AS productSex, " +
            "p.size AS productSize, p.water_resistant AS productWaterResistant, " +
            "p.thumbnail AS productThumbnail, i.file_path AS images, " +
            "c.name AS categoryName, b.name AS brandName " +
            "FROM product p " +
            "JOIN category c ON c.id = p.category_id " +
            "JOIN images i ON i.product_id = p.id " +
            "JOIN brand b ON b.id = p.brand_id " +
            "WHERE c.name LIKE :categoryName AND p.name LIKE :productName " +
            "GROUP BY p.id", nativeQuery = true)
    Page<ProductDto> findAllProduct(Pageable pageable, @Param("categoryName") String categoryName,
                                    @Param("productName") String productName);


    @Query(value = "select product.id as productId, product.`name` as productName, product.code as productCode, product.price as productPrice," +
            "product.sex as productSex, product.`description` as productDescription, product.`color` as productColor," +
            "product.quantity as productQuantity, product.`water_resistant` as productWaterResistant, product.`size` as productSize, product.price_sale as priceSale," +
            "category.`name` as categoryName, brand.`name` as brandName," +
            "max(images.file_path) as images from product " +
            "join category on category.id = product.category_id " +
            "join brand on brand.id = product.brand_id and brand.id = :id " +
            "join images on images.product_id = product.id " +
            "where category.`name` like :categoryName and product.`name` like :productName " +
            "group by product_id",nativeQuery = true)
    Page<ProductDto> findAllProductByBrand(Pageable pageable,@Param("id") int id,
                                           @Param("categoryName") String categoryName,
                                           @Param("productName") String productName);
}
