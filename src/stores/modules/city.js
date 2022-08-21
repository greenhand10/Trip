import { defineStore } from "pinia";
import {getCityAll} from "@/services/modules/city.js"

const useCityStore = defineStore('city',{
  state:() => ({
    allCities:{}
  }),
  actions:{
    async fetchGetCityAll(){
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore