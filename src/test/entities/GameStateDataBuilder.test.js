import { test, expect, describe, jest } from "@jest/globals";
import GameStateDataBuilder from "../../entities/dataStateContainers/GameStateDataBuilder";

describe('valid data creation', () => {
    test('test data creation/retrieval', () => {
        const mockGetBoard = jest.fn(() => []);

        const builder = new GameStateDataBuilder();
        const gameStateData = builder
        .setCurrentUserName('Player One')
        .setIsGameRunning(true)
        .setIsRoundRunning(false)
        .setIsPlayerOneTurn(false)
        .setPlayerOneUserName('Player One')
        .setPlayerTwoUserName('Player Two')
        .setPlayerOneFleetSize(5)
        .setPlayerTwoFleetSize(5)
        .setCurrentPlayerFleetSize(5)
        .build();
            
        expect(gameStateData.currentUserName).toBe('Player One');
        expect(gameStateData.isGameRunning).toBeTruthy();
        expect(gameStateData.isRoundRunning).toBeFalsy();
        expect(gameStateData.isPlayerOneTurn).toBeFalsy();
        expect(gameStateData.playerOneUserName).toBe('Player One');
        expect(gameStateData.playerTwoUserName).toBe('Player Two');
        expect(gameStateData.playerOneFleetSize).toBe(5);
        expect(gameStateData.playerTwoFleetSize).toBe(5);
        expect(gameStateData.currentPlayerFleetSize).toBe(5);
    });
});