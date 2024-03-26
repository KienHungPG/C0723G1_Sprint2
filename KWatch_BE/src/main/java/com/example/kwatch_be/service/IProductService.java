package com.example.kwatch_be.service;

import com.example.kwatch_be.dto.ProductDto;
import com.example.kwatch_be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    List<Product> getList();
    Product findById(int id);
    Page<ProductDto> getAllAndSearch(Pageable pageable, String categoryName, String productName);
    Page<ProductDto> findAllProductByBrand(Pageable pageable,Integer id,
                                           String categoryName,
                                           String productName);
}
