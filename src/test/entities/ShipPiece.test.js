import { test, expect } from "@jest/globals";
import ShipPiece from "../../entities/ShipPiece";

test('test hit registration', () => {
    const shipPiece = new ShipPiece(1, 1);

    expect(shipPiece.hitStatus).toBeFalsy();

    expect(shipPiece.hit()).toBeTruthy();

    expect(shipPiece.hitStatus).toBeTruthy();
});