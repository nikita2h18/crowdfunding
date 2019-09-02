package com.gmail.shabannikitka.crowdfunding.core.repository;

import com.gmail.shabannikitka.crowdfunding.core.entity.Campaign;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CampaignRepository extends CrudRepository<Campaign, Long> {

    Optional<Campaign> findByName(String name);

}
