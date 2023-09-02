import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Airport, Flight } from './models'


const API_URL = "https://testapi.io/api/lgnkrt"

const getFlightList= async (): Promise<Array<Flight>> => {
  return await axios
    .get(`${API_URL}/list-flight`)
    .then((response: AxiosResponse<Array<Flight>>) => response.data)

}
const getAirportList= async (): Promise<Array<Airport>> => {
    return await axios
      .get(`${API_URL}/list-airport`)
      .then((response: AxiosResponse<Array<Airport>>) => response.data)
  
  }

export {  getAirportList,getFlightList}