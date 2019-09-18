package com.gmail.shabannikitka.crowdfunding.core.controller;

import com.gmail.shabannikitka.crowdfunding.core.dto.CampaignDto;
import com.gmail.shabannikitka.crowdfunding.core.dto.CreateCampaignDto;
import com.gmail.shabannikitka.crowdfunding.core.entity.User;
import com.gmail.shabannikitka.crowdfunding.core.exception.DuplicationException;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoSuchEntityException;
import com.gmail.shabannikitka.crowdfunding.core.service.CampaignService;
import com.gmail.shabannikitka.crowdfunding.core.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/campaign")
public class CampaignController {

    private final CampaignService campaignService;
    private final TokenService tokenService;


    @Autowired
    public CampaignController(CampaignService campaignService, TokenService tokenService) {
        this.campaignService = campaignService;
        this.tokenService = tokenService;
    }

    @PostMapping
    @RequestMapping("/create")
    public CampaignDto createCampaign(@RequestHeader("token") String token, @RequestBody CreateCampaignDto createCampaignDto)
            throws NoSuchEntityException, DuplicationException {
        User user = tokenService.validate(token);

        return campaignService.createCampaign(createCampaignDto, user);
    }

}
