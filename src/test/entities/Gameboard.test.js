import { test, expect } from '@jest/globals';
import Gameboard from '../../entities/Gameboard';
import Coordinate from '../../entities/Coordinate';

test('valid ship placement', () => {
    const mockBoard = new Gameboard();

    expect(mockBoard.placeShip(new Coordinate(1, 1), true, 5)).toBeTruthy();

    expect(mockBoard.placeShip(new Coordinate(1, 1), true, 5)).toBeFalsy();
    expect(mockBoard.placeShip(new Coordinate(5, 1), true, 5)).toBeFalsy();
    expect(mockBoard.placeShip(new Coordinate(6, 1), true, 5)).toBeFalsy();

    expect(mockBoard.placeShip(new Coordinate(1, 2), false, 5)).toBeTruthy();
    expect(mockBoard.placeShip(new Coordinate(4, 3), true, 5)).toBeTruthy();
});

test('hitting valid cells', () => {
    const mockBoard = new Gameboard();

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
    const mockBoard = new Gameboard();

    mockBoard.placeShip(new Coordinate(1, 1), true, 1);
    mockBoard.placeShip(new Coordinate(1, 2), true, 1);
    mockBoard.placeShip(new Coordinate(4, 3), true, 1);

    expect(mockBoard.allShipsSunk()).toBeFalsy();

    mockBoard.receiveAttack(new Coordinate(1, 1));

    expect(mockBoard.allShipsSunk()).toBeFalsy();

    mockBoard.receiveAttack(new Coordinate(1, 2));
    mockBoard.receiveAttack(new Coordinate(4, 3));

    expect(mockBoard.allShipsSunk()).toBeTruthy()
});