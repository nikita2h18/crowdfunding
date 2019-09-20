package com.gmail.shabannikitka.crowdfunding.core.service;

import com.gmail.shabannikitka.crowdfunding.core.dto.CampaignDto;
import com.gmail.shabannikitka.crowdfunding.core.dto.CreateCampaignDto;
import com.gmail.shabannikitka.crowdfunding.core.dto.UpdateCampaignDto;
import com.gmail.shabannikitka.crowdfunding.core.entity.Campaign;
import com.gmail.shabannikitka.crowdfunding.core.entity.User;
import com.gmail.shabannikitka.crowdfunding.core.entity.enums.Role;
import com.gmail.shabannikitka.crowdfunding.core.exception.DuplicationException;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoAccessRightsException;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoSuchEntityException;
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
                campaign.getId(),
                campaign.getName(),
                campaign.getSummary(),
                campaign.getTarget(),
                campaign.getUser().getId(),
                campaign.getFrom(),
                campaign.getUser().getLogin(),
                campaign.getTo(),
                campaign.getImagePath()
        );
    }

    public List<CampaignDto> showAllCampaigns() {
        return campaignRepository.findAll().stream()
                .map(
                        c -> new CampaignDto(
                                c.getId(),
                                c.getName(),
                                c.getSummary(),
                                c.getTarget(),
                                c.getUser().getId(),
                                c.getFrom(),
                                c.getUser().getLogin(),
                                c.getTo(),
                                c.getImagePath()
                        )
                ).collect(Collectors.toList());
    }

    public List<CampaignDto> showUserCampaigns(User user) {
        return campaignRepository.findAllByUserId(user.getId()).stream()
                .map(
                        campaign -> new CampaignDto(
                                campaign.getId(),
                                campaign.getName(),
                                campaign.getSummary(),
                                campaign.getTarget(),
                                campaign.getUser().getId(),
                                campaign.getFrom(),
                                campaign.getUser().getLogin(),
                                campaign.getTo(),
                                campaign.getImagePath()
                        )
                ).collect(Collectors.toList());
    }

    public void updateCampaign(UpdateCampaignDto updateCampaignDto, User user) throws NoSuchEntityException, NoAccessRightsException {
        Campaign campaign = campaignRepository.findById(updateCampaignDto.id)
                .orElseThrow(() -> new NoSuchEntityException("Campaign not found"));

        if (!campaign.getUser().getId().equals(user.getId()) && !user.getRole().equals(Role.ADMIN)) {
            throw new NoAccessRightsException("No access rights to update it");
        }

        campaign.setName(updateCampaignDto.name);
        campaign.setSummary(updateCampaignDto.summary);
        campaign.setTarget(updateCampaignDto.target);
        campaign.setImagePath(updateCampaignDto.imagePath);
        campaign.setTo(updateCampaignDto.to);

        campaignRepository.save(campaign);
    }

    public void deleteCampaign(Long id, User user) throws NoSuchEntityException, NoAccessRightsException {
        Campaign campaign = campaignRepository.findById(id)
                .orElseThrow(() -> new NoSuchEntityException("Campaign not found"));

        if (!campaign.getUser().getId().equals(user.getId()) && !user.getRole().equals(Role.ADMIN)) {
            throw new NoAccessRightsException("No access rights to update it");
        }

        campaignRepository.delete(campaign);
    }

    public CampaignDto getCampaign(Long id) throws NoSuchEntityException {
        return campaignRepository.findById(id)
                .map(
                        campaign -> new CampaignDto(
                                campaign.getId(),
                                campaign.getName(),
                                campaign.getSummary(),
                                campaign.getTarget(),
                                campaign.getUser().getId(),
                                campaign.getFrom(),
                                campaign.getUser().getLogin(),
                                campaign.getTo(),
                                campaign.getImagePath()
                        )
                )
                .orElseThrow(() -> new NoSuchEntityException("Campaign not found"));
    }
}
