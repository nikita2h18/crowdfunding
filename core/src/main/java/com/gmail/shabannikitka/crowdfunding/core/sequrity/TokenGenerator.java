package com.gmail.shabannikitka.crowdfunding.core.sequrity;

import java.util.UUID;

public class TokenGenerator {

    public static String generate() {
        return UUID.randomUUID().toString();
    }
}