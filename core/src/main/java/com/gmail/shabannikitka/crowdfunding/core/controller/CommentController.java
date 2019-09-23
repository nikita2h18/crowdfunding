package com.gmail.shabannikitka.crowdfunding.core.controller;

import com.gmail.shabannikitka.crowdfunding.core.dto.CommentDto;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoSuchEntityException;
import com.gmail.shabannikitka.crowdfunding.core.service.CommentService;
import com.gmail.shabannikitka.crowdfunding.core.service.TokenService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentController {

    private final CommentService commentService;
    private final TokenService tokenService;

    public CommentController(CommentService commentService, TokenService tokenService) {
        this.commentService = commentService;
        this.tokenService = tokenService;
    }

    @GetMapping(path = "{id}")
    public List<CommentDto> getComments(@PathVariable("id") Long id) {
        return commentService.getComments(id);
    }

    @PostMapping(path = "{id}")
    public void commentCreate(@RequestHeader("token") String token,@PathVariable("id") Long id, @RequestBody String comment) throws NoSuchEntityException {
        commentService.commentCreate(comment, id, tokenService.validate(token));
    }
}
