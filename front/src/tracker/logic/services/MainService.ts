// ** Axios
import axios from 'src/configs/axios-config'
import { getHeadersInformation } from '../utils/constant'

// ** Config

export default class MainService {
  url: string

  constructor(url: string) {
    this.url = url
  }

  create(object: any) {
    return new Promise(resolve => {
      axios
        .post(`${this.url}`, object, {
          headers: {
            ...getHeadersInformation()
          }
        })
        .then(response => {
          resolve(response.data.data)
        })
        .catch(error => {
          this.errorManagement(error)
          resolve(false)
        })
    })
  }

  update(object: any, id: number) {
    console.log('id :: ', id)

    return new Promise(resolve => {
      axios
        .put(`${this.url}`, object, {
          headers: {
            ...getHeadersInformation()
          }
        })
        .then(response => {
          resolve(response.data.data)
        })
        .catch(error => {
          this.errorManagement(error)
          resolve(false)
        })
    })
  }

  readAll() {
    return new Promise(resolve => {
      axios
        .get(`${this.url}/all`, {
          headers: {
            ...getHeadersInformation()
          }
        })
        .then(response => {
          resolve(response.data.data)
        })
        .catch(error => {
          this.errorManagement(error)
          resolve(false)
        })
    })
  }

  errorManagement(error: any) {
    console.log(' error  :: ', error)
  }
}
