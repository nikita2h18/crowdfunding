package com.gmail.shabannikitka.crowdfunding.core.repository;

import com.gmail.shabannikitka.crowdfunding.core.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByLogin(@Param("login") String login);

    List<User> findAll();

    Optional<User> findById(Long id);
}
