package com.gmail.shabannikitka.crowdfunding.core.service;

import com.gmail.shabannikitka.crowdfunding.core.entity.Token;
import com.gmail.shabannikitka.crowdfunding.core.entity.User;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoSuchEntityException;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoSuchTokenException;
import com.gmail.shabannikitka.crowdfunding.core.repository.TokenRepository;
import com.gmail.shabannikitka.crowdfunding.core.sequrity.TokenGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TokenService {

    private final TokenRepository tokenRepository;

    @Autowired
    public TokenService(TokenRepository tokenRepository) {
        this.tokenRepository = tokenRepository;
    }

    public String getToken(User user) {
        return tokenRepository.save(new Token(TokenGenerator.generate(), user)).getToken();
    }

    public User validate(String token) throws NoSuchEntityException {
        return tokenRepository.findByToken(token)
                .orElseThrow(() -> new NoSuchEntityException("No such user"))
                .getUser();
    }

    public void remove(String token) throws NoSuchTokenException {
        tokenRepository.delete(tokenRepository.findByToken(token)
                .orElseThrow(NoSuchTokenException::new));
    }
}
