package com.gmail.shabannikitka.crowdfunding.core.dto;

import java.time.LocalDate;

public class CreateCampaignDto {
    public String name;
    public String summary;
    public double target;
    public LocalDate from;
    public LocalDate to;
}
