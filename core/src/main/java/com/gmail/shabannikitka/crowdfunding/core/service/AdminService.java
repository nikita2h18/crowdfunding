package com.gmail.shabannikitka.crowdfunding.core.service;

import com.gmail.shabannikitka.crowdfunding.core.dto.UserDto;
import com.gmail.shabannikitka.crowdfunding.core.entity.User;
import com.gmail.shabannikitka.crowdfunding.core.entity.enums.Role;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoSuchEntityException;
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
                                c.getRole().toString(),
                                c.getBlocked()
                        )
                )
                .collect(Collectors.toList());
    }

    public void block(List<Long> userIds) throws NoSuchEntityException {
        for (Long userId : userIds) {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new NoSuchEntityException("No such user"));
            user.setBlocked(true);
            userRepository.save(user);
        }
    }

    public void unblock(List<Long> userIds) throws NoSuchEntityException {
        for (Long userId : userIds) {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new NoSuchEntityException("No such user"));
            user.setBlocked(false);
            userRepository.save(user);
        }
    }

    public void setAdminRole(List<Long> userIds) throws NoSuchEntityException {
        for (Long userId : userIds) {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new NoSuchEntityException("No such user"));
            user.setRole(Role.ADMIN);
            userRepository.save(user);
        }
    }

    public void setDefaultRole(List<Long> userIds) throws NoSuchEntityException {
        for (Long userId : userIds) {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new NoSuchEntityException("No such user"));
            user.setRole(Role.DEFAULT_USER);
            userRepository.save(user);
        }
    }
}
