import { test, expect, describe, jest } from "@jest/globals";
import GameboardDataBuilder from "../../entities/dataStateContainers/GameboardDataBuilder";

describe('valid data creation', () => {
    test('test data creation/retrieval', () => {
        const mockGetBoard = jest.fn(() => []);

        const builder = new GameboardDataBuilder();
        const gameboardData = builder
            .setBoardData(mockGetBoard())
            .setPlayerUserName('Player One')
            .setAllShipsSunk(false)
            .build();

        expect(gameboardData.boardData).toHaveLength(0);
        expect(gameboardData.playerUserName).toBe('Player One');
        expect(gameboardData.allShipsSunk).toBeFalsy();
    });
});