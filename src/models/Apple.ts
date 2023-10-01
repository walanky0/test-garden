import { APPLE_EXPIRED_SPREAD, DAYS_IN_CIRCLE } from "../constants";
import { AppleColorType } from "../types/Apple.types";
import getRandomInt from "../utils/getRandomInt";

const appleColors: AppleColorType[] = ["red", "green"];

class Apple {
    private _daysLive = 0;
    readonly color: AppleColorType;
    readonly size: number;
    private _isExpired = false;
    private _isFallen = false;

    constructor() {
        this.color = appleColors[getRandomInt(0, appleColors.length - 1)];
        this.size = getRandomInt(1, 3);
    }

    get age() {
        return this._daysLive;
    }

    get isExpired() {
        return this._isExpired;
    }
    get isFallen() {
        return this._isFallen;
    }

    private needFallenApple() {
        const min = DAYS_IN_CIRCLE - APPLE_EXPIRED_SPREAD;
        const maxDieChance = DAYS_IN_CIRCLE + APPLE_EXPIRED_SPREAD - min;
        const dieChance = this._daysLive - min;
        if (this._daysLive < min) {
            return false;
        }

        return getRandomInt(dieChance, maxDieChance + 1) >= maxDieChance;
    }

    passDay() {
        this._daysLive++;
        if (this._isFallen) {
            this._isExpired = true;
        }
        this._isFallen = this.needFallenApple();
    }
}

export default Apple;
