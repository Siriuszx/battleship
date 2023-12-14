import { test, describe, expect } from "@jest/globals";
import Player from "../../entities/Player";
import Ship from "../../entities/Ship";
import Coordinate from "../../entities/Coordinate";

describe('test player meta info', () => {
    const player1 = new Player('Player One');
    const player2 = new Player('Player Two');
    const player3 = new Player('Player Three');

    test('player name retrieval', () => {
        expect(player1.getPlayerName()).toBe('Player One');
        expect(player2.getPlayerName()).toBe('Player Two');
        expect(player3.getPlayerName()).toBe('Player Three');
    });
});

describe('test player board ship data', () => {
    const player1 = new Player('Player One');
    const player2 = new Player('Player Two');
    const player3 = new Player('Player Three');

    test('valid ship log data', () => {
        expect(player1.getShips()).toHaveLength(0);

        player1.addShip(new Ship());

        expect(player1.getShips()).toHaveLength(1);

        player2.addShip(new Ship());
        player2.addShip(new Ship());

        expect(player2.getShips()).toHaveLength(2);
        expect(player3.getShips()).toHaveLength(0);
    });

    test('valid hit coordinate logging', () => {
        const coord1 = new Coordinate(1, 1);
        const coord2 = new Coordinate(10, 10);

        expect(player1.getHitLog()).toHaveLength(0);

        player1.logHit(coord1);
        player1.logHit(coord2);

        expect(player1.getHitLog()).toHaveLength(2);

        const newHitLog = player1.getHitLog();

        expect(newHitLog[0].coordX).toBe(1);
        expect(newHitLog[0].coordY).toBe(1);

        expect(newHitLog[1].coordX).toBe(10);
        expect(newHitLog[1].coordY).toBe(10);
    });
});