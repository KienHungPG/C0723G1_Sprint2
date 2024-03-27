package com.example.kwatch_be.repository;

import com.example.kwatch_be.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IAccountRepository extends JpaRepository<Account,Integer> {
//    Optional<Account> findByEmail(String email);
    Optional<Account> findByUsername(String username);
    boolean existsByUsername(String username);
}
