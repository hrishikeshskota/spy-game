package com.example.spygame.controller;

import com.example.spygame.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GameController {

    @Autowired
    private GameService gameService;

    @GetMapping("/game")
    public List<String> startGame(@RequestParam int players) {
        return gameService.generateGame(players);
    }
}