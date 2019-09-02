package com.gmail.shabannikitka.crowdfunding.core.service;

import com.gmail.shabannikitka.crowdfunding.core.entity.Token;
import com.gmail.shabannikitka.crowdfunding.core.entity.User;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoSuchEntityException;
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
        Token token = new Token(TokenGenerator.generate(), user);

        return tokenRepository.save(token).getToken();
    }

    public User validate(String token) throws NoSuchEntityException {
        return tokenRepository.findByToken(token)
                .orElseThrow(() -> new NoSuchEntityException("No such user"))
                .getUser();
    }
}
