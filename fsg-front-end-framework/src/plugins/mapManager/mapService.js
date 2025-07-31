import Tile from "CME2D/layer/Tile.js";
import XYZ from "CME2D/source/XYZ.js";

const Services = {
    TianDiTu: {
        Normal: {
            Map: "https://t{0-7}.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}",
            Annotion: "https://t{0-7}.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}"
        }
    },
    Windy: {
        Normal: {
            Map: "https://tiles.windy.com/tiles/v10.0/darkmap/{z}/{x}/{y}.png",
        }
    }
};

class MapService {
    TianDiTuKey;
    Services;

    constructor(options) {
        if (options && options.TianDiTuKey) {
            this.TianDiTuKey = options.TianDiTuKey;
        }

        this.Services = Services;
    }
    initLayer(layerName = 'TianDiTu.Normal.Map') {
        const parts = layerName.split(".");

        const providerName = parts[0];
        const mapName = parts[1];
        const mapType = parts[2];

        let url = Services[providerName][mapName][mapType];
        if (providerName === "TianDiTu" && this.TianDiTuKey) url = url + "&tk=" + this.TianDiTuKey;

        const _tile = new Tile({
            name: layerName,
            source: new XYZ({
                url
            }),
        })
        return _tile;
    }
    addLayer(mapName, layerName = 'TianDiTu.Normal.Map') {
        let _Map;
        if (typeof mapName === 'string' || mapName instanceof String) {
            _Map = this.MapObjList[mapName];
        } else if (mapName.targetElement_) {
            const _mapName = mapName.targetElement_.getAttribute('id');
            _Map = this.MapObjList[_mapName];
        }
        if (!_Map) {
            console.error("Can't find the map.");
            return;
        };
        const _layer = this.initLayer(layerName);
        _Map.addLayer(_layer);
    }
    addLayers() {
        if (Array.isArray(this.mapTargets) && this.mapTargets.length > 0) {
            const _len = this.mapTargets.length;
            for (let i = 0; i < _len; i++) {
                if (this.mapTargets[i].service && this.mapTargets[i].service.length > 0) {
                    this.mapTargets[i].service.map(item => {
                        this.addLayer(this.mapTargets[i].target, item);
                    })
                }
            }
        } else {
            if (this.mapTargets.service && this.mapTargets.service.length > 0) {
                this.mapTargets.service.map(item => {
                    this.addLayer(this.mapTargets.target, item);
                })
            }
        }
    }
    /**
     * @param {String | Object} mapName 接受地图名称 or 地图实例
     * @param {String} layerName 结构化的图层名称
     * */
    removeLayer(mapName, layerName) {
        let _Map;
        if (typeof mapName === 'string' || mapName instanceof String) {
            _Map = this.MapObjList[mapName];
        } else if (mapName.targetElement_) {
            const _mapName = mapName.targetElement_.getAttribute('id');
            _Map = this.MapObjList[_mapName];
        }

        if (!_Map) {
            console.error("Can't find the map.");
            return;
        };

        const _layers = _Map.getLayers();
        const __layers = _layers.array_ && _layers.array_.length > 0 ? _layers.array_ : [];
        for (let i = 0; i < __layers.length; i++) {
            if (__layers[i].values_.name === layerName) {
                _Map.removeLayer(__layers[i])
                break;
            }
        }
    }
    clearLayer() {
        for (let i = 0; i < this.mapTargets.length; i++) {
            const _layers = this.MapObjList[this.mapTargets[i].target].getLayers();
            const __layers = _layers.array_ && _layers.array_.length > 0 ? _layers.array_ : [];
            this.mapTargets[i].service.map(layerName => {
                const findLayerIndex = __layers.findIndex(layer => layer.values_.name === layerName);
                if (findLayerIndex > -1) this.MapObjList[this.mapTargets[i].target].removeLayer(__layers[findLayerIndex])
            })
        }
    }
}

export default MapService;