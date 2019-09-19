package com.gmail.shabannikitka.crowdfunding.core.dto;

import java.time.LocalDate;

public class CampaignDto {
    public Long id;
    public String name;
    public String summary;
    public double target;
    public Long userId;
    public LocalDate from;
    public String userName;
    public LocalDate to;
    public String imagePath;

    public CampaignDto(Long id, String name, String summary, double target, Long userId, LocalDate from, String userName, LocalDate to, String imagePath) {
        this.id = id;
        this.name = name;
        this.summary = summary;
        this.target = target;
        this.userId = userId;
        this.from = from;
        this.userName = userName;
        this.to = to;
        this.imagePath = imagePath;
    }
}
