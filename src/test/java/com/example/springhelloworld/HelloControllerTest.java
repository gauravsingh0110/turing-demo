package com.example.springhelloworld;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class HelloControllerTest {

    @Test
    void healthcheckReturnsOk() {
        HelloController controller = new HelloController();

        assertEquals("OK", controller.healthcheck());
    }

    @Test
    void helloMethodReturnsGreeting() {
        HelloController controller = new HelloController();

        assertEquals("Hello, World!", controller.hello());
    }
}



