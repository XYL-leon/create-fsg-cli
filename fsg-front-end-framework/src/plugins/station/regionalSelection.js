import { isNumber, isScientificNotation } from "./utils"

/**
 * regional
 * 类型：
 * @param {number} adcode 如 100000 中华人民共和国 ,110000 北京
 * @param {number} 自定义code 如 东北区域 999999
 * @description 仅接受6位整型数值，不接受科学计数法表示的数值
 * */

class RegionalSelection {
    regional;
    constructor(options) {
    }
    setRegional(adcode) {
        if (this.verifyCode(adcode)) {
            this.regional = adcode;
        } else {
            console.error("adcode not valid.")
        }
    }
    getRegional() {
        return this.regional;
    }
    verifyCode(adcode) {
        if (adcode && isNumber(adcode) && adcode % 1 === 0 && adcode.toString().length === 6 && !isScientificNotation(adcode)) {
            return true;
        } else {
            return false;
        }
    }
}

export default RegionalSelection;