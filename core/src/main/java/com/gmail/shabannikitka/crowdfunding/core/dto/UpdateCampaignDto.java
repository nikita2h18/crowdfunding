package com.gmail.shabannikitka.crowdfunding.core.dto;

import java.time.LocalDate;

public class UpdateCampaignDto {
    public Long id;
    public String name;
    public String summary;
    public double target;
    public LocalDate to;
    public String imagePath;
}
