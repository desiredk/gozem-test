
import * as yup from 'yup'

export interface PositionType {
  lat: number
  lng: number
}

export interface PackageType {
  id?: string
  _id?: string
  active_delivery_id?: string
  description: string
  weight: number
  width: number
  height: number
  depth: number

  from_name: string
  from_address: string
  from_location: PositionType

  to_name: string
  to_address: string
  to_location: PositionType
}

export const packageSchema = yup.object().shape({
  description: yup.string().required('Description field is required'),
  weight: yup.number().positive('Weight must be greater than 0').required('Weight field is required'),
  width: yup.number().positive('Width must be greater than 0').required('Width field is required'),
  height: yup.number().positive('Height must be greater than 0').required('Height field is required'),
  depth: yup.number().positive('Depth must be greater than 0').required('Depth field is required'),

  from_name: yup.string().required('(From) Name field is required'),
  from_address: yup.string().required('(From) Address field is required'),
  from_location: yup.object().shape({
    lat: yup.number().positive('(From) Location - Latitude must be greater than 0').required('(From) Location - Latitude field is required'),
    lng: yup.number().positive('(From) Location - Longitude must be greater than 0').required('(From) Location - Longitude field is required'),
  }),

  to_name: yup.string().required('(To) Name field is required'),
  to_address: yup.string().required('(To) Address field is required'),
  to_location: yup.object().shape({
    lat: yup.number().positive('(To) Location - Latitude must be greater than 0').required('(To) Location - Latitude field is required'),
    lng: yup.number().positive('(To) Location - Longitude must be greater than 0').required('(To) Location - Longitude field is required'),
  }),
})

export const packageDefaultValues = {
  // active_delivery_id: "",
  description: "",
  weight: 0,
  width: 0,
  height: 0,
  depth: 0,
  from_name: "",
  from_address: "",
  from_location: {
    lat: 0,
    lng: 0
  },

  to_name: "",
  to_address: "",
  to_location: {
    lat: 0,
    lng: 0
  }
}
