import { GARDEN_THREES_MAX_COUNT, GARDEN_THREES_MIN_COUNT } from "../constants";
import getRandomInt from "../utils/getRandomInt";
import Three from "./Three";

class Garden {
    private _threes: Three[];
    private _daysCount = 0;

    constructor() {
        const threesCount = getRandomInt(
            GARDEN_THREES_MIN_COUNT,
            GARDEN_THREES_MAX_COUNT
        );
        this._threes = Array(threesCount).fill(new Three());
    }

    get threesCount() {
        return this._threes.length;
    }

    get applesCount() {
        return this._threes.reduce((prev, acc) => prev + acc.applesCount, 0);
    }

    get daysCount() {
        return this._daysCount;
    }

    passDay() {
        this._daysCount++;
        this._threes.forEach((three) => three.passDay());
    }

    clearExpiredApples() {
        this._threes.forEach((three) => three.clearExpiredApples());
    }
}

export default Garden;
