import { expect, test, describe } from "@jest/globals";
import Coordinate from "../../entities/Coordinate";

describe('coordinate data retrieval', () => {    
    test('get coordinate X', () => {
        const coord1 = new Coordinate(5,3);
        const coord2 = new Coordinate(10,3);
        const coord3 = new Coordinate(1,3);

        expect(coord1.coordX).toBe(5);
        expect(coord2.coordX).toBe(10);
        expect(coord3.coordX).toBe(1);
    });

    test('get coordinate Y', () => {
        const coord1 = new Coordinate(1,6);
        const coord2 = new Coordinate(3,10);
        const coord3 = new Coordinate(1,3);

        expect(coord1.coordY).toBe(6);
        expect(coord2.coordY).toBe(10);
        expect(coord3.coordY).toBe(3);
    });
});