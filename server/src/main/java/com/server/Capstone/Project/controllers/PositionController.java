package com.server.Capstone.Project.controllers;

import com.server.Capstone.Project.models.Position;
import com.server.Capstone.Project.services.PositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("positions")
public class PositionController {

    @Autowired
    PositionService positionService;

    @PostMapping
    public ResponseEntity<Position>createPosition(@RequestBody Position position){
        return new ResponseEntity<>(positionService.newPosition(position), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Position>>findAllPositions(){
        return new ResponseEntity<>(positionService.findAllPositions(), HttpStatus.OK);
    }



}
