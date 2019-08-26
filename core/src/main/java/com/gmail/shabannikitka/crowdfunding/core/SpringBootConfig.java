package com.gmail.shabannikitka.crowdfunding.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication(scanBasePackages = "com.gmail.shabannikitka.crowdfunding.core")
@EnableScheduling
public class SpringBootConfig {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootConfig.class, args);
    }

}