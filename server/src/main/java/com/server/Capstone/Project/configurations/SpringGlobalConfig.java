package com.server.Capstone.Project.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SpringGlobalConfig implements WebMvcConfigurer {

    public void addCorsMappings(CorsRegistry registry){

        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedHeaders("*")
                .allowedMethods("*");

    }

}
