import { isNumber } from "./utils.js"

class Threshold {
    thresholdArr;
    constructor() {
        this.thresholdArr = [];
    }
    /**
     * 设置阈值
     * 接受：operator,value,Logical operator,operator,value
     * eg: ['<=', 10] or ['<=', 10, "||", '>=', 100]
     * */
    setThresold(threshold) {
        const _threshold = JSON.parse(JSON.stringify(threshold));
        var logicalIndex = [];
        var _log = [];
        _threshold.map((item, i) => {
            if (item === "&&" || item === "||") {
                logicalIndex.push(i);
                _log.push(item);
                _threshold.splice(i, 1);
            }
        });

        const _len = _threshold.length;
        const _arr = [];

        for (let i = 0; i < _len; i += 2) {
            var findLogicalIndex = logicalIndex.findIndex((item) => item === i);

            if (isNumber(_threshold[i]) && typeof _threshold[i + 1] === "string") {
                if (findLogicalIndex > -1) {
                    _arr.push(_log[findLogicalIndex]);
                }
                _arr.push(...[_threshold[i], _threshold[i + 1], "val"]);
            } else if (
                isNumber(_threshold[i + 1]) &&
                typeof _threshold[i] === "string"
            ) {
                if (findLogicalIndex > -1) {
                    _arr.push(_log[findLogicalIndex]);
                }
                _arr.push(...["val", _threshold[i], _threshold[i + 1]]);
            }
        }
        this.thresholdArr;
    }
    getThresold() {
        return this.thresholdArr;
    }
    resetThresold() {
        this.thresholdArr = [];
    }
    calculateWithOperator(threshold, val) {
        var str = "";
        for (let i = 0; i < threshold.length; i++) {
            if (threshold[i] === "val") {
                str += val;
            } else {
                str += threshold[i];
            }
        }
        return new Function(`return ${str}`)();
    }
}

export default Threshold;