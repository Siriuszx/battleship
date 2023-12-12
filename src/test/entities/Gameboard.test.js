import { test, expect } from '@jest/globals';
import Ship from '../../entities/Ship';
import GameboardController from '../../entities/Gameboard';
import Coordinate from '../../entities/Coordinate';

test('valid ship placement', () => {
    const mockBoard = new GameboardController();

    const ship1 = new Ship(new Coordinate(1, 1), true, 5);
    const ship2 = new Ship(new Coordinate(5, 1), true, 5);
    const ship3 = new Ship(new Coordinate(6, 1), true, 5);
    const ship4 = new Ship(new Coordinate(1, 2), false, 5);
    const ship5 = new Ship(new Coordinate(4, 3), true, 5);

    expect(mockBoard.placeShip(ship1, true, 5)).toBeTruthy();

    expect(mockBoard.placeShip(ship1, true, 5)).toBeFalsy();
    expect(mockBoard.placeShip(ship2, true, 5)).toBeFalsy();
    expect(mockBoard.placeShip(ship3, true, 5)).toBeFalsy();

    expect(mockBoard.placeShip(ship4, false, 5)).toBeTruthy();
    expect(mockBoard.placeShip(ship5, true, 5)).toBeTruthy();
});

test('hitting valid cells', () => {
    const mockBoard = new GameboardController();

    expect(mockBoard.receiveAttack(new Coordinate(1, 1))).toBeTruthy();
    expect(mockBoard.receiveAttack(new Coordinate(3, 1))).toBeTruthy();
    expect(mockBoard.receiveAttack(new Coordinate(5, 1))).toBeTruthy();
    expect(mockBoard.receiveAttack(new Coordinate(10, 10))).toBeTruthy();

    // test if attacked cells cannot be attacked again
    expect(mockBoard.receiveAttack(new Coordinate(5, 1))).toBeFalsy();
    expect(mockBoard.receiveAttack(new Coordinate(3, 1))).toBeFalsy();
    expect(mockBoard.receiveAttack(new Coordinate(10, 10))).toBeFalsy();
});

test('all ships sunk status', () => {
    const mockBoard = new GameboardController();

    const ship1 = new Ship(new Coordinate(1, 1), true, 1);
    const ship2 = new Ship(new Coordinate(1, 2), true, 1);
    const ship3 = new Ship(new Coordinate(4, 3), true, 1);

    mockBoard.placeShip(ship1, true, 1);
    mockBoard.placeShip(ship2, true, 1);
    mockBoard.placeShip(ship3, true, 1);

    expect(mockBoard.allShipsSunk()).toBeFalsy();

    mockBoard.receiveAttack(new Coordinate(1, 1));

    expect(mockBoard.allShipsSunk()).toBeFalsy();

    mockBoard.receiveAttack(new Coordinate(1, 2));
    mockBoard.receiveAttack(new Coordinate(4, 3));

    expect(mockBoard.allShipsSunk()).toBeTruthy()
});