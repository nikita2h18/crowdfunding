package com.gmail.shabannikitka.crowdfunding.core.service;

import com.gmail.shabannikitka.crowdfunding.core.dto.AuthUserDto;
import com.gmail.shabannikitka.crowdfunding.core.entity.User;
import com.gmail.shabannikitka.crowdfunding.core.exception.AuthenticationException;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoSuchEntityException;
import com.gmail.shabannikitka.crowdfunding.core.repository.UserRepository;
import com.gmail.shabannikitka.crowdfunding.core.sequrity.Hasher;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final TokenService tokenService;

    public AuthService(UserRepository userRepository, TokenService tokenService) {
        this.userRepository = userRepository;
        this.tokenService = tokenService;
    }

    public String auth(AuthUserDto authUserDto) throws AuthenticationException, NoSuchEntityException {
        User user = userRepository.findByLogin(authUserDto.login)
                .orElseThrow(() -> new NoSuchEntityException("No such client"));

        if (!Hasher.check(authUserDto.password, user.getPassword()))
            throw new AuthenticationException("Invalid client credentials");

        return  tokenService.getToken(user);
    }
}
