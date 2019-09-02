package com.gmail.shabannikitka.crowdfunding.core.dto;

import java.time.LocalDate;

public class CampaignDto {
    public String name;
    public String summary;
    public double target;
    public Long userId;
    public LocalDate from;
    public LocalDate to;

    public CampaignDto(String name, String summary, double target, Long userId, LocalDate from, LocalDate to) {
        this.name = name;
        this.summary = summary;
        this.target = target;
        this.userId = userId;
        this.from = from;
        this.to = to;
    }
}
