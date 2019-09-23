package com.gmail.shabannikitka.crowdfunding.core.service;

import com.gmail.shabannikitka.crowdfunding.core.dto.CommentDto;
import com.gmail.shabannikitka.crowdfunding.core.entity.Campaign;
import com.gmail.shabannikitka.crowdfunding.core.entity.Comment;
import com.gmail.shabannikitka.crowdfunding.core.entity.User;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoSuchEntityException;
import com.gmail.shabannikitka.crowdfunding.core.repository.CampaignRepository;
import com.gmail.shabannikitka.crowdfunding.core.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final CampaignRepository campaignRepository;

    public CommentService(CommentRepository commentRepository, CampaignRepository campaignRepository) {
        this.commentRepository = commentRepository;
        this.campaignRepository = campaignRepository;
    }

    public void commentCreate(String commentMessage, Long id, User user) throws NoSuchEntityException {
        Campaign campaign = campaignRepository.findById(id).orElseThrow(
                () -> new NoSuchEntityException("No such campaign")
        );

        Comment comment = new Comment(
                commentMessage,
                user,
                campaign
        );

        commentRepository.save(comment);
    }

    public List<CommentDto> getComments(Long id) {
        return commentRepository.findAllByCampaignId(id)
                .stream()
                .map(
                        comment -> new CommentDto(
                                comment.getComment()
                        )
                ).collect(Collectors.toList());
    }
}
