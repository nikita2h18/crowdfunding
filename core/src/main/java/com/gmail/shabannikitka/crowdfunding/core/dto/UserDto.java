package com.gmail.shabannikitka.crowdfunding.core.dto;

public class UserDto {
    public Long id;
    public String login;
    public String token;
    public String role;

    public UserDto(Long id, String login, String role) {
        this.id = id;
        this.login = login;
        this.role = role;
    }

    public UserDto(Long id, String login, String token, String role) {
        this.id = id;
        this.login = login;
        this.token = token;
        this.role = role;
    }
}
