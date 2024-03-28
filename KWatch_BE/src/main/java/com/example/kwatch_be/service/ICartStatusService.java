package com.example.kwatch_be.service;

import com.example.kwatch_be.model.CartStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICartStatusService {
    CartStatus findById(Integer id);
}
