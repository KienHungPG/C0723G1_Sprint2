package com.example.kwatch_be.service;

import com.example.kwatch_be.model.Account;

import java.util.Optional;

public interface IAccountService {
//    Optional<Account> findAccountByEmail(String email);

    Optional<Account> findByUsername(String username);

    Account registerAccount(Account account) throws Exception ;
    String login(String username,String passWord) throws Exception;
}
