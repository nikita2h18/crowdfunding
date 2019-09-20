package com.gmail.shabannikitka.crowdfunding.core.controller;

import com.gmail.shabannikitka.crowdfunding.core.dto.CampaignDto;
import com.gmail.shabannikitka.crowdfunding.core.dto.CreateCampaignDto;
import com.gmail.shabannikitka.crowdfunding.core.dto.UpdateCampaignDto;
import com.gmail.shabannikitka.crowdfunding.core.exception.DuplicationException;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoAccessRightsException;
import com.gmail.shabannikitka.crowdfunding.core.exception.NoSuchEntityException;
import com.gmail.shabannikitka.crowdfunding.core.service.CampaignService;
import com.gmail.shabannikitka.crowdfunding.core.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    //TODO
    @PostMapping("/create")
    public CampaignDto createCampaign(@RequestHeader("token") String token, @RequestBody CreateCampaignDto createCampaignDto)
            throws NoSuchEntityException, DuplicationException {
        return campaignService.createCampaign(createCampaignDto, tokenService.validate(token));
    }

    @GetMapping("/all")
    public List<CampaignDto> showAllCampaigns() {
        return campaignService.showAllCampaigns();
    }

    @GetMapping(path = "/{id}")
    public CampaignDto getCampaign(@PathVariable("id") Long id) throws NoSuchEntityException {
        return campaignService.getCampaign(id);
    }

    @GetMapping("/user")
    public List<CampaignDto> showUserCampaigns(@RequestHeader("token") String token) throws NoSuchEntityException {
        return campaignService.showUserCampaigns(tokenService.validate(token));
    }

    @PutMapping("/{id}")
    public void updateCampaign(@RequestHeader("token") String token, @PathVariable("id") Long id, @RequestBody UpdateCampaignDto updateCampaignDto)
            throws NoSuchEntityException, NoAccessRightsException {
        campaignService.updateCampaign(updateCampaignDto, id, tokenService.validate(token));
    }

    @DeleteMapping(path = "/{id}")
    public void deleteCampaign(@RequestHeader("token") String token, @PathVariable("id") Long id)
            throws NoSuchEntityException, NoAccessRightsException {
        campaignService.deleteCampaign(id, tokenService.validate(token));
    }
}
