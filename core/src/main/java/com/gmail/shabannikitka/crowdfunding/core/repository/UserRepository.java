package com.gmail.shabannikitka.crowdfunding.core.repository;

import com.gmail.shabannikitka.crowdfunding.core.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByLogin(@Param("login") String login);

}
