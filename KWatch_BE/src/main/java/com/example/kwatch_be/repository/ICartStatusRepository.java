package com.example.kwatch_be.repository;

import com.example.kwatch_be.model.CartStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICartStatusRepository extends JpaRepository<CartStatus,Integer> {
}
