package com.example.spygame.service;

import org.springframework.stereotype.Service;

import java.io.*;
import java.util.*;

@Service
public class GameService {

    private List<String> words = new ArrayList<>();

    public GameService() {
        try {
            InputStream is = getClass().getClassLoader().getResourceAsStream("words.txt");
            BufferedReader reader = new BufferedReader(new InputStreamReader(is));

            String line;
            while ((line = reader.readLine()) != null) {
                words.add(line);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<String> generateGame(int players) {
        Random rand = new Random();

        String chosenWord = words.get(rand.nextInt(words.size()));
        int spyIndex = rand.nextInt(players);

        List<String> result = new ArrayList<>();

        for (int i = 0; i < players; i++) {
            if (i == spyIndex) {
                result.add("SPY 🕵️");
            } else {
                result.add(chosenWord);
            }
        }

        return result;
    }
}