// import { getDateAsString, getHeadersInformation } from '../utils/constant'
// import MainService from './MainService'

// ** Axios
import axios from 'src/configs/axios-config'
import { AddDeliveryType, DeliveryType } from '../models/Delivery'

export default class DeliveryService {
  url = "/deliveries"

  async list() {
    try {
      const rep = await axios.get(`${this.url}`)

      return rep.data.body.map((item: any) => {
        return { ...item, id: item._id };
      });
    } catch (err) {
      return [];
    }
  }

  async post(object: AddDeliveryType) {
    try {
      const rep = await axios.post(`${this.url}`, object)
      console.log("Rep :::::: ", rep)

      return true;
    } catch (err) {
      return false;
    }
  }

  async put(object: DeliveryType, id: string) {
    const rep = await axios.put(`${this.url}/${id}`, object)
    console.log("Rep :::::: ", rep)
  }

  async get(id: string) {
    const rep = await axios.get(`${this.url}/${id}`)

    return rep.data.body
  }

  async delete(id: string) {
    const rep = await axios.delete(`${this.url}/${id}`)
    console.log("Rep :::::: ", rep)
  }
}
