function hitStatus() {
    const NOT_HIT = 'NOT_HIT';
    const HIT_CELL = 'HIT_CELL';
    const HIT_SHIP = 'HIT_SHIP';
    const BUILDING_SHIP = 'BUILDING_SHIP';

    return {
        NOT_HIT,
        HIT_CELL,
        HIT_SHIP,
        BUILDING_SHIP
    };
};

export default hitStatus;