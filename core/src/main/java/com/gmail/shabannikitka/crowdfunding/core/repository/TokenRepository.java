package com.gmail.shabannikitka.crowdfunding.core.repository;

import com.gmail.shabannikitka.crowdfunding.core.entity.Token;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TokenRepository extends CrudRepository<Token, Long> {

    Optional<Token> findByToken(String token);

}
