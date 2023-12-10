import { test, expect } from '@jest/globals';
import Ship from '../../entities/Ship';
import Coordinate from '../../entities/Coordinate';


test('hitting valid parts of the ship', () => {
    const mockShip = new Ship(new Coordinate(0, 0), true, 5);

    expect(mockShip.tryHit(new Coordinate(0, 0))).toBeTruthy();
    expect(mockShip.tryHit(new Coordinate(1, 0))).toBeTruthy();
    expect(mockShip.tryHit(new Coordinate(2, 0))).toBeTruthy();
    expect(mockShip.tryHit(new Coordinate(3, 0))).toBeTruthy();
    expect(mockShip.tryHit(new Coordinate(4, 0))).toBeTruthy();

    expect(mockShip.timesHit).toBe(5);

    expect(mockShip.tryHit(new Coordinate(5, 0))).toBeFalsy();
    expect(mockShip.tryHit(new Coordinate(5, 0))).toBeFalsy();

    expect(mockShip.timesHit).toBe(5);
});

test('ship gets sunk if all of its parts have been hit', () => {
    const mockShip = new Ship(new Coordinate(0, 0), true, 5);

    expect(mockShip.isSunk).toBeFalsy();
    
    mockShip.tryHit(new Coordinate(0, 0))
    mockShip.tryHit(new Coordinate(1, 0));
    mockShip.tryHit(new Coordinate(2, 0));

    expect(mockShip.isSunk).toBeFalsy();
    
    mockShip.tryHit(new Coordinate(3, 0));
    mockShip.tryHit(new Coordinate(4, 0))
    
    expect(mockShip.isSunk).toBeTruthy();
});

test('correct ship length', () => {
    const mockShip1 = new Ship(new Coordinate(3, 3), false, 5);
    const mockShip2 = new Ship(new Coordinate(5, 1), true, 2);

    expect(mockShip1.length).toBeCloseTo(5);
    expect(mockShip2.length).toBeCloseTo(2);
});

test('correct hit counter increase', () => {
    const mockShip = new Ship(new Coordinate(0, 0), true, 3);

    expect(mockShip.timesHit).toBe(0);
    
    mockShip.tryHit(new Coordinate(0, 0))
    mockShip.tryHit(new Coordinate(1, 0));

    expect(mockShip.timesHit).toBe(2);

    mockShip.tryHit(new Coordinate(2, 0));

    expect(mockShip.timesHit).toBe(3);
});