import request from '@/axios';

import testRegion from "../test/region.json";
export const getRegion = (params) => {
    return new Promise((resolve,reject)=>{
        resolve(testRegion)
    });
}