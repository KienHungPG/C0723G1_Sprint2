package com.example.kwatch_be.service;

import com.example.kwatch_be.config.JwtTokenUtil;
import com.example.kwatch_be.model.Account;
import com.example.kwatch_be.repository.IAccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.zip.DataFormatException;

@RequiredArgsConstructor
@Service
public class AccountService implements IAccountService{
    @Autowired
    private final JwtTokenUtil jwtTokenUtil;
    @Autowired
    private final AuthenticationManager authenticationManager;
    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private IAccountRepository accountRepository;


//    @Override
//    public Optional<Account> findAccountByEmail(String email) {
//        return accountRepository.findByEmail(email);
//    }

    @Override
    public Optional<Account> findByUsername(String username) {
        return accountRepository.findByUsername(username);
    }

    @Override
    public Account registerAccount(Account account) throws Exception {
        return accountRepository.save(account);
    }


    @Override
    public String login(String username, String password) throws Exception {
        Optional<Account>  optionalAccount = accountRepository.findByUsername(username);
        if (optionalAccount.isEmpty()){
            throw new DataFormatException("Tài khoản hoặc mật khẩu không hợp đúng!");
        }
        Account existingAccount = optionalAccount.get();

        // chua dang nhap google
        if (!passwordEncoder.matches(password, existingAccount.getPassword())){
            throw new BadCredentialsException("Tài khoản hoặc mật khẩu không hợp đúng!");
        }

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                username, password,existingAccount.getAuthorities()
        );
        authenticationManager.authenticate(authenticationToken);
        return jwtTokenUtil.generateToken(optionalAccount.get());
    }
}
