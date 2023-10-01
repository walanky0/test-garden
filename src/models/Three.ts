import {
    DAYS_IN_CIRCLE,
    THREE_APPLES_MAX_COUNT,
    THREE_APPLES_MIN_COUNT,
} from "../constants";
import getRandomInt from "../utils/getRandomInt";
import Apple from "./Apple";

class Three {
    private _apples: Apple[];
    private _daysLive = 0;
    constructor() {
        const applesCount = getRandomInt(
            THREE_APPLES_MIN_COUNT,
            THREE_APPLES_MAX_COUNT
        );
        this._apples = Array(applesCount).fill(new Apple());
    }

    get applesCount() {
        return this._apples.length;
    }

    clearExpiredApples() {
        const beforeApplesCount = this._apples.length;
        this._apples = this._apples.filter((apple) => !apple.isExpired);
        const afterApplesCount = this._apples.length;

        return beforeApplesCount - afterApplesCount;
    }

    passDay() {
        this._daysLive++;
        if (this._daysLive % DAYS_IN_CIRCLE === 0) {
            this._apples.push(new Apple());
        }
        this._apples.forEach((apple) => apple.passDay());
    }
}

export default Three;
