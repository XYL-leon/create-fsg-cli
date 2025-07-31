import RegionalSelection from "./regionalSelection.js";
import StationType from "./stationType.js";
import Threshold from "./threshold.js";

class MeteoStation {

    regionalSelection; // 区域选择实例
    stationType; // 站点类型实例
    threshold; // 阈值设置实例
    constructor(options) {
        if (!options || !options.map) {
            console.error("options.map is not defined.")
            return;
        }
        this._map = options.map;

        this.regionalSelection = new RegionalSelection();
        this.stationType = new StationType();
        this.threshold = new Threshold();
    }
    /**
     * 区域组合方法委托
     * */
    setRegional(adcode) {
        this.regionalSelection.setRegional(adcode);
    }
    getRegional() {
        return this.regionalSelection.getRegional();
    }
    /**
     * 站点类型方法委托
     * */
    setStationType(type) {
        this.stationType.setStationType(type);
    }
    getStationType() {
        return this.stationType.getStationType();
    }
    // 阈值设置方法委托
    setThresold(threshold) {
        this.threshold.setThresold(threshold);
    }
    getThresold() {
        return this.threshold.getThresold();
    }
    resetThresold() {
        this.threshold.resetThresold();
    }
    calculateWithOperator(threshold, val) {
        this.threshold.calculateWithOperator(threshold, val);
    }
}