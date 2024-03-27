package com.example.kwatch_be.dto;

public class ApiResponse<T>{
    private T dataRes;
    private String token;

    public ApiResponse(T dataRes, String token) {
        this.dataRes = dataRes;
        this.token = token;
    }

    public ApiResponse() {
    }

    public T getDataRes() {
        return dataRes;
    }

    public void setDataRes(T dataRes) {
        this.dataRes = dataRes;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
