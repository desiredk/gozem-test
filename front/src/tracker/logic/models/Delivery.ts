import * as yup from 'yup'
import { PackageType, PositionType } from './Package'

export interface DeliveryType {
  id?: string
  pickup_time: Date
  start_time: Date
  end_time: Date
  location: PositionType
  status: string
  package: PackageType
}

export interface AddDeliveryType {
  package: string
}

export const deliverySchema = yup.object().shape({
  package: yup.string().required('Package field is required')
})

export const deliveryDefaultValues = {
  package: ""
}
