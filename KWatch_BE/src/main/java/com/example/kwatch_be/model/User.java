package com.example.kwatch_be.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private LocalDate birthday;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String email;

    @Column(name = "phone_number",nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    private boolean gender;

    @Column(nullable = false)
    private String avatar;

    @Column(name = "id_card" ,nullable = false)
    private String idCard;

    @Column(name = "is_deleted", nullable = false, columnDefinition = "bit(1) default 0")
    private boolean isDeleted;

    @OneToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private Account account;
}
