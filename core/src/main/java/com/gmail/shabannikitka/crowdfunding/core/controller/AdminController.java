package com.gmail.shabannikitka.crowdfunding.core.controller;

import com.gmail.shabannikitka.crowdfunding.core.dto.UserDto;
import com.gmail.shabannikitka.crowdfunding.core.entity.User;
import com.gmail.shabannikitka.crowdfunding.core.entity.enums.Role;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoSuchEntityException;
import com.gmail.shabannikitka.crowdfunding.core.service.AdminService;
import com.gmail.shabannikitka.crowdfunding.core.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.naming.NoPermissionException;
import java.util.List;

@RestController
@RequestMapping("admin")
public class AdminController {

    private final TokenService tokenService;
    private final AdminService adminService;

    @Autowired
    public AdminController(TokenService tokenService, AdminService adminService) {
        this.tokenService = tokenService;
        this.adminService = adminService;
    }

    @GetMapping("users")
    public List<UserDto> getAllUsers(@RequestHeader("token") String token) throws NoSuchEntityException {
        tokenService.validate(token);
        return adminService.getAllUsers();
    }

    @PostMapping("block")
    public void block(@RequestHeader("token") String token, @RequestBody List<Long> userIds) throws NoSuchEntityException, NoPermissionException {
        if (tokenService.validate(token).getRole() == Role.ADMIN) {
            adminService.block(userIds);
        } else {
            throw new NoPermissionException("Access denied");
        }
    }

    @PostMapping("unblock")
    public void unblock(@RequestHeader("token") String token, @RequestBody List<Long> userIds) throws NoSuchEntityException, NoPermissionException {
        if (tokenService.validate(token).getRole() == Role.ADMIN) {
            adminService.unblock(userIds);
        } else {
            throw new NoPermissionException("Access denied");
        }
    }

    @PostMapping("setadmin")
    public void setAdminRole(@RequestHeader("token") String token, @RequestBody List<Long> userIds) throws NoSuchEntityException, NoPermissionException {
        if (tokenService.validate(token).getRole() == Role.ADMIN) {
            adminService.setAdminRole(userIds);
        } else {
            throw new NoPermissionException("Access denied");
        }
    }

    @PostMapping("setdefault")
    public void setDefaultRole(@RequestHeader("token") String token, @RequestBody List<Long> userIds) throws NoSuchEntityException, NoPermissionException {
        if (tokenService.validate(token).getRole() == Role.ADMIN) {
            adminService.setDefaultRole(userIds);
        } else {
            throw new NoPermissionException("Access denied");
        }
    }
}
