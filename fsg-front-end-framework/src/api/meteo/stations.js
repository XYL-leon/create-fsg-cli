import request from '@/axios';

/**
 * 获取时间范围内站点统计信息
 * @param {Object} params - 请求参数
 * @param {string} params.id - 站点ID required
 * @param {string} params.stationType - 站点类型，多个用逗号分隔 required
 * @param {string} params.endTime - 结束时间
 * @param {string} params.startTime - 开始时间
 * */
import testGetStatonsByCode from "../test/getStationsByCode.json"
export const getStationsByCode = (params) => {
    return new Promise((resolve, reject) => {
        resolve(testGetStatonsByCode)
    });
    return request({
        url: "/stations/byCode",
        method: 'get',
        headers: {
            'authorization': ""
        },
        params: params
    })
}

import stationType from "../test/stationType.json";
export const getStationTyps = (params) => {
    return new Promise((resolve, reject) => {
        resolve(stationType)
    });
    return request({
        url: "/stations/byCode",
        method: 'get',
        headers: {
            'authorization': ""
        },
        params: params
    })
}