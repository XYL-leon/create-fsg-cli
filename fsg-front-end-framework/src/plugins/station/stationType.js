import { isNumber, isScientificNotation } from "./utils"

/**
 * stationType
 * @param {string} type 如国家站 national ,区域站 regional
 * */

class StationType {
    stationType;
    constructor() {

    }
    setStationType(type) {
        if (!isNumber(type)) {
            this.stationType = type;
        } else {
            console.error('type not valid.');
        }
    }
    getStationType() {
        return this.stationType;
    }
}

export default StationType;