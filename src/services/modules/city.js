import {TripRequest} from '@/services/request/index.js'
//  获取所有城市的请求数据
export function getCityAll() {
  return TripRequest.get({
    url:'/city/all'
  })
}