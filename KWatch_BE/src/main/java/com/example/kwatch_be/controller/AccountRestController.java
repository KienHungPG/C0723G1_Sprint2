package com.example.kwatch_be.controller;

import com.example.kwatch_be.dto.AccountDTO;
import com.example.kwatch_be.dto.ApiResponse;
import com.example.kwatch_be.model.Account;
import com.example.kwatch_be.service.IAccountService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("account")
public class AccountRestController {
    @Autowired
    private IAccountService accountService;

    @Autowired
    private PasswordEncoder passwordEncoder;



    @PostMapping("/login")
    public ResponseEntity<Object> loginAccount( @RequestBody AccountDTO accountDTO){
        ApiResponse<Account> response = new ApiResponse<>();
        try{
            String token = accountService.login(accountDTO.getUsername(), accountDTO.getPassword());
            Account account = accountService.findByUsername(accountDTO.getUsername()).get();
            response.setToken(token);
            response.setDataRes(account);

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }



}
