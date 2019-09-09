package com.gmail.shabannikitka.crowdfunding.core.service;

import com.gmail.shabannikitka.crowdfunding.core.dto.UserDto;
import com.gmail.shabannikitka.crowdfunding.core.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminService {

    private final UserRepository userRepository;

    @Autowired
    public AdminService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDto> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(c -> new UserDto(
                                c.getId(),
                                c.getLogin(),
                                c.getRole().toString()
                        )
                )
                .collect(Collectors.toList());
    }
}
