package com.gmail.shabannikitka.crowdfunding.core.dto;

import com.gmail.shabannikitka.crowdfunding.core.entity.enums.Role;

import java.time.LocalDate;

public class UserDto {
    public Long id;
    public String login;
    public String password;
    public Role role;
}
