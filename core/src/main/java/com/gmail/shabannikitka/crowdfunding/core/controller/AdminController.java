package com.gmail.shabannikitka.crowdfunding.core.controller;

import com.gmail.shabannikitka.crowdfunding.core.dto.UserDto;
import com.gmail.shabannikitka.crowdfunding.core.entity.User;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoSuchEntityException;
import com.gmail.shabannikitka.crowdfunding.core.service.AdminService;
import com.gmail.shabannikitka.crowdfunding.core.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("admin")
public class AdminController {

    private final TokenService tokenService;
    private final AdminService adminService;


    @Autowired
    public AdminController(TokenService tokenService, AdminService adminService) {
        this.tokenService = tokenService;
        this.adminService = adminService;
    }

    @GetMapping
    @RequestMapping("users")
    public List<UserDto> getAllUsers(@RequestHeader("token") String token) throws NoSuchEntityException {
        User user = tokenService.validate(token);
        return adminService.getAllUsers();
    }
}
