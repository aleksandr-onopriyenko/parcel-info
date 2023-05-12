import { api } from './api'

export const trackingApi = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    tracking: build.mutation({
      query: (arg) => ({
        url: import.meta.env.VITE_NOVAPOSHTA_API,
        method: 'POST',
        body: {
          apiKey: import.meta.env.VITE_NOVAPOSHTA_API_KEY,
          modelName: 'TrackingDocument',
          calledMethod: 'getStatusDocuments',
          methodProperties: {
            Documents: [
              {
                DocumentNumber: arg,
              },
            ],
          },
        },
      }),
      transformResponse: (response) => {
        const data = response.data[0]
        return {
          status: data.Status,
          warehouseRecipient: data.WarehouseRecipient,
          warehouseSender: data.WarehouseSender,
          number: data.Number,
        }
      },
    }),
  }),
})

export const { useTrackingMutation } = trackingApi
