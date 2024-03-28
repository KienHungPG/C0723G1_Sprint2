package com.example.kwatch_be.service;

import com.example.kwatch_be.model.CartStatus;
import com.example.kwatch_be.repository.ICartStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartStatusService implements ICartStatusService{
    @Autowired
    private ICartStatusRepository cartStatusRepository;
    @Override
    public CartStatus findById(Integer id) {
        return cartStatusRepository.findById(id).orElse(null);
    }
}
