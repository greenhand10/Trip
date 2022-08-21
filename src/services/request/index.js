import { BASE_URL , TIMEOUT } from "./config"

import axios from 'axios'

class TripAxios {
  constructor(baseURL,timeout=10000){
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }

  request(config) {
    return new Promise((resolve,reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config){
    return this.request({...config,method:'get'})
  }

  post(config){
    return this.request({...config,method:'post'})
  }
}

export const TripRequest = new TripAxios(BASE_URL,TIMEOUT)