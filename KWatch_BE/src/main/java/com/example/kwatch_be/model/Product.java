package com.example.kwatch_be.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private double price;

    @Column(nullable = false)
    private double priceSale;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Integer quantity;

    @Column(name = "is_deleted", nullable = false,columnDefinition = "bit(1) default 0")
    private boolean isDeleted;

    @ManyToOne
    @JoinColumn(name = "category_detail_id", referencedColumnName = "id")
    private  CategoryDetail categoryDetail;

    @ManyToOne
    @JoinColumn(name = "brand_id",referencedColumnName = "id")
    private Brand brand;

    @OneToMany(mappedBy = "product")
    @JsonBackReference
    private List<Images> images;
}
