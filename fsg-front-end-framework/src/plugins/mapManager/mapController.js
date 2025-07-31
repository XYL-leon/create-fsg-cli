import View from 'CME2D/View.js'
import "CME2D/ol.css";
import { fromLonLat, transform } from 'CME2D/proj';
import { Map } from 'cme-core';
import MapService from './mapService';

/**
 * Attribute
 * @param {Object} MapObjList {[targetName]:Map,...}
 * */
class MapController extends MapService {
    MapObjList; // 地图对象组
    mapTargets; // 地图参数组

    syncTimeout;

    _MapSerVice; // 地图服务
    constructor(options) {
        super(options);

        this.MapObjList = {};
    }
    /**
     * 添加多个地图
     * Options
     * @param {Object | Array} options Maximum length 4. 其中 viewOption 是 CME2D/View.js 传递的参数,如center、zoom等。 
     * */
    initMap(options) {
        if (!options) {
            console.log('options is not defined.');
            return;
        };
        this.mapTargets = options;
        if (Array.isArray(options) && options.length > 0) {
            if (options.length > 4) {
                console.error('Does not support more than 4 map instances.');
                return;
            }
            options.map(item => {
                this.MapObjList[item.target] = this.addMap(item);
            })
            this.addMapEventListener();
            return this.MapObjList;
        } else {
            this.MapObjList[options.target] = this.addMap(options);
            return this.MapObjList[options.target];
        }
    }
    /**
     * 添加单个地图
     * @param {Object} options 参考 initMap 函数
     * */
    addMap(options) {
        if (options.viewOption.projection && options.viewOption.projection === 'EPSG:3857') {
            if (options && options.viewOption.center) {
                options.viewOption.center = fromLonLat(options.viewOption.center);
            }
        }
        this.destroyMapById(options.target);

        const map = new Map({
            target: options.target,//挂载实例
            view: new View(options.viewOption),
        });
        this.MapObjList[options.target] = map;
        return map;
    }
    /**
     * 销毁地图
     * */
    destroyMapById(mapName) {
        if (this.MapObjList[mapName]) {
            this.MapObjList[mapName].setTarget(null);
            this.MapObjList[mapName].dispose();
            delete this.MapObjList[mapName];
        }
    }
    /**
     * 事件监听
     * */
    addMapEventListener() {
        for (let key in this.MapObjList) {
            const _map = this.MapObjList[key];
            _map.getView().on('change:center', () => this.synchronizeViews(_map));
            _map.getView().on('change:resolution', () => this.synchronizeViews(_map));
            _map.getView().on('change:rotation', () => this.synchronizeViews(_map));
        }
    }
    synchronizeViews(masterMap) {
        clearTimeout(this.syncTimeout);
        this.syncTimeout = setTimeout(() => {
            const view = masterMap.getView();
            const projectionCode = view.getProjection().getCode();
            const center = view.getCenter();
            const zoom = view.getZoom();
            const rotation = view.getRotation();
            for (let key in this.MapObjList) {
                const _map = this.MapObjList[key];
                if (_map !== masterMap) {
                    const _projectionCode = _map.getView().getProjection().getCode();
                    let _center = center;
                    if (_projectionCode !== projectionCode) {
                        _center = transform(_center, projectionCode, _projectionCode)
                    }
                    _map.getView().setCenter(_center);
                    _map.getView().setZoom(zoom);
                    _map.getView().setRotation(rotation);
                }
            }
        }, 50);
    }
}

export default MapController;