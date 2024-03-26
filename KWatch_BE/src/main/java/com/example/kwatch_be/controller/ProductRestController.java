package com.example.kwatch_be.controller;

import com.example.kwatch_be.dto.ProductDto;
import com.example.kwatch_be.model.Product;
import com.example.kwatch_be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class ProductRestController {
    @Autowired
    private IProductService productService;
    @GetMapping("/list")
    public ResponseEntity<Page<ProductDto>> getListProduct(@RequestParam(name = "categoryName",defaultValue = "",required = false)String categoryName,
                                                           @RequestParam(name = "productName",defaultValue = "",required = false)String productName,
                                                           @RequestParam(name = "page",defaultValue = "0",required = false)int page
    ){
        Pageable pageable = PageRequest.of(page,6);
        Page<ProductDto> productList = productService.getAllAndSearch(pageable,categoryName,productName);
        if (productList == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productList,HttpStatus.OK);
    }
    @GetMapping("/detail/{id}")
    public ResponseEntity<Product> getProductDetail(@PathVariable Integer id){
        Product product = productService.findById(id);
        if (product == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(product,HttpStatus.OK);
    }
}
