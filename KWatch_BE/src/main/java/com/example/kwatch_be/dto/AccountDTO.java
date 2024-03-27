package com.example.kwatch_be.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AccountDTO {
    @NotBlank(message = "Tài Khoản không được để rỗng")
    @Size(min = 6,max = 35,message = "Tài Khoản có độ dài từ 6-35 kí tự")
    @Pattern(regexp = "^[a-z0-9_-]+$",message = "Tài Khoản Vui Lòng Nhập Đúng Định Dạng")
    String username;

    @NotBlank(message = "Mật Khẩu không được để rỗng")
    @Size(min = 6,max = 20,message = "Mật Khẩu độ dài từ 6-20 kí tự")
    String password;

    Long idAccount;
    Long idProduct;
    String token;


}
