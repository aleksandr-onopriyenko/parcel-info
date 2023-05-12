import { api } from './api'
import { v4 as uuidv4 } from 'uuid'

export const addressApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAddress: builder.mutation({
      query: (city) => ({
        url: '',
        method: 'POST',
        body: {
          apiKey: import.meta.env.VITE_NOVAPOSHTA_API_KEY,
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityName: city,
          },
        },
      }),
      transformResponse: (response) =>
        response.data.map((res) => ({
          lat: +res.Latitude,
          lng: +res.Longitude,
          title: res.Description,
          type: res.TypeOfWarehouse,
          id: uuidv4(),
        })),
    }),
  }),
})

export const { useGetAddressMutation } = addressApi
