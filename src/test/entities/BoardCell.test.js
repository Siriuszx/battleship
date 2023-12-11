import { expect, test } from "@jest/globals";
import BoardCell from "../../entities/BoardCell";
import hitStatus from "../../entities/HitStatus";
import Ship from "../../entities/Ship";
import Coordinate from "../../entities/Coordinate";

test('test occupy cell', () => {
    const boardCell1 = new BoardCell(1, 1);
    const ship = new Ship(new Coordinate(1,1), true, 1);

    expect(boardCell1.isOccupied).toBeFalsy();
    expect(boardCell1.occupy(ship)).toBeTruthy();

    expect(boardCell1.isOccupied).toBeTruthy();
    expect(boardCell1.occupy(ship)).toBeFalsy();
});

test('test cell hit', () => {
    const boardCell1 = new BoardCell(1, 1);
    const boardCell2 = new BoardCell(2, 2);
    const ship = new Ship(new Coordinate(2,2), true, 1);

    expect(boardCell1.hit()).toBeTruthy();
    expect(boardCell1.hit()).toBeFalsy();

    boardCell2.occupy(ship);

    expect(boardCell2.hit()).toBeTruthy();
    expect(boardCell2.hit()).toBeFalsy();
});