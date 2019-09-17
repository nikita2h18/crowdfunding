package com.gmail.shabannikitka.crowdfunding.core.dto;

import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

public class CreateCampaignDto {
    public String name;
    public String summary;
    public Double target;
    public LocalDate to;
    public String image;
}
