package com.gmail.shabannikitka.crowdfunding.core.controller;

import com.gmail.shabannikitka.crowdfunding.core.dto.RegisterUserDto;
import com.gmail.shabannikitka.crowdfunding.core.dto.UserDto;
import com.gmail.shabannikitka.crowdfunding.core.exception.RegisterException;
import com.gmail.shabannikitka.crowdfunding.core.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("register")
public class RegisterController {

    private final RegisterService registerService;

    @Autowired
    public RegisterController(RegisterService registerService) {
        this.registerService = registerService;
    }

    @PostMapping
    public void register(@RequestBody RegisterUserDto registerUserDto) throws RegisterException {
        registerService.register(registerUserDto);
    }
}
