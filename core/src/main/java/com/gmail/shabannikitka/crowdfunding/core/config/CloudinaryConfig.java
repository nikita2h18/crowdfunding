package com.gmail.shabannikitka.crowdfunding.core.config;

import com.cloudinary.Cloudinary;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class CloudinaryConfig {
    @Value("dhqpm9g01")
    private String cloudName;

    @Value("289394936245893")
    private String apiKey;

    @Value("AvUeymF3fWMlX4F53LVYXg9iYGA")
    private String apiSecret;

    @Bean
    public Cloudinary cloudConfig() {
        Cloudinary cloudinary = null;
        Map config = new HashMap();
        config.put("cloud_name", cloudName);
        config.put("api_key", apiKey);
        config.put("api_secret", apiSecret);
        cloudinary = new Cloudinary(config);
        return cloudinary;
    }
}
