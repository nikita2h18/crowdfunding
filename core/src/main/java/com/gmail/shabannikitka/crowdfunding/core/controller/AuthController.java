package com.gmail.shabannikitka.crowdfunding.core.controller;

import com.gmail.shabannikitka.crowdfunding.core.dto.AuthUserDto;
import com.gmail.shabannikitka.crowdfunding.core.entity.User;
import com.gmail.shabannikitka.crowdfunding.core.exception.AuthenticationException;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoSuchEntityException;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoSuchTokenException;
import com.gmail.shabannikitka.crowdfunding.core.service.AuthService;
import com.gmail.shabannikitka.crowdfunding.core.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
public class AuthController {

    private final AuthService authService;
    private final TokenService tokenService;

    @Autowired
    public AuthController(AuthService authService, TokenService tokenService) {
        this.authService = authService;
        this.tokenService = tokenService;
    }

    @PostMapping
    public String auth(@RequestBody AuthUserDto authUserDto) throws AuthenticationException, NoSuchEntityException {
        return authService.auth(authUserDto);
    }

    @PostMapping
    @RequestMapping("/log_out")
    public void logOut(@RequestHeader("token") String token) throws NoSuchEntityException, NoSuchTokenException {
        User user = tokenService.validate(token);

        authService.logOut(token);
    }
}
