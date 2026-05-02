package com.example.springhelloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String healthcheck() {
        return "OK";
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello, World!";
    }
}

