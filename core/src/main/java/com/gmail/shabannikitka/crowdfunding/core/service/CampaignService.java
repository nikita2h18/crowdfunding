package com.gmail.shabannikitka.crowdfunding.core.service;

import com.gmail.shabannikitka.crowdfunding.core.dto.CampaignDto;
import com.gmail.shabannikitka.crowdfunding.core.dto.CreateCampaignDto;
import com.gmail.shabannikitka.crowdfunding.core.entity.Campaign;
import com.gmail.shabannikitka.crowdfunding.core.entity.User;
import com.gmail.shabannikitka.crowdfunding.core.exception.DuplicationException;
import com.gmail.shabannikitka.crowdfunding.core.repository.CampaignRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CampaignService {

    private final CampaignRepository campaignRepository;

    @Autowired
    public CampaignService(CampaignRepository campaignRepository) {
        this.campaignRepository = campaignRepository;
    }

    public CampaignDto createCampaign(CreateCampaignDto createCampaignDto, User user) throws DuplicationException {
        if (campaignRepository.findByName(createCampaignDto.name).isPresent())
            throw new DuplicationException("Campaign with such name already exist");

        Campaign campaign = new Campaign(
                createCampaignDto.name,
                createCampaignDto.summary,
                createCampaignDto.target,
                user,
                LocalDate.now(),
                createCampaignDto.to,
                createCampaignDto.imagePath
        );

        campaignRepository.save(campaign);

        return new CampaignDto(
                campaign.getName(),
                campaign.getSummary(),
                campaign.getTarget(),
                campaign.getUser().getId(),
                campaign.getFrom(),
                campaign.getTo(),
                campaign.getImagePath()
        );
    }

    public List<CampaignDto> showAllCampaigns() {
        return campaignRepository.findAll().stream()
                .map(
                        c -> new CampaignDto(
                                c.getName(),
                                c.getSummary(),
                                c.getTarget(),
                                c.getUser().getId(),
                                c.getFrom(),
                                c.getTo(),
                                c.getImagePath()
                        )
                ).collect(Collectors.toList());
    }

    public List<CampaignDto> showUserCampaigns(User user) {
        return campaignRepository.findAllByUserId(user.getId()).stream()
                .map(
                        campaign -> new CampaignDto(
                                campaign.getName(),
                                campaign.getSummary(),
                                campaign.getTarget(),
                                campaign.getUser().getId(),
                                campaign.getFrom(),
                                campaign.getTo(),
                                campaign.getImagePath()
                        )
                ).collect(Collectors.toList());
    }
}
