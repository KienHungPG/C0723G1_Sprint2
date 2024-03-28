package com.example.kwatch_be.service;

import com.example.kwatch_be.dto.ProductDto;
import com.example.kwatch_be.model.Product;
import com.example.kwatch_be.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService{
    @Autowired
    private IProductRepository productRepository;

    @Override
    public List<Product> getList() {
        return productRepository.findAll();
    }

    @Override
    public Product findById(int id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public Page<ProductDto> getAllAndSearch(Pageable pageable, String categoryName, String productName) {
        return productRepository.findAllProduct(pageable,"%"+categoryName+"%","%"+productName+"%");
    }

    @Override
    public Page<ProductDto> findAllProductByBrand(Pageable pageable, Integer id, String categoryName, String productName) {
        return productRepository.findAllProductByBrand(pageable,id,"%"+categoryName+"%","%"+productName+"%");
    }

    @Override
    public void save(Product product) {
        productRepository.save(product);
    }
}
