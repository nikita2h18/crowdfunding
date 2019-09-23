package com.gmail.shabannikitka.crowdfunding.core.repository;

import com.gmail.shabannikitka.crowdfunding.core.entity.Campaign;
import com.gmail.shabannikitka.crowdfunding.core.entity.Comment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CommentRepository extends CrudRepository<Comment, Long> {
    List<Comment> findAllByCampaignId(Long id);
}
