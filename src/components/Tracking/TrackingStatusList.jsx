import React from 'react'
import { Box, Paper, Skeleton } from '@mui/material'

import { TrackingStatusListItem } from './TrackingStatusListItem'
import { parcel, status as statusImg, warehouse, notFound } from './images'

export const TrackingStatusList = ({ status }) => {
  return (
    <Paper
      overflow="hidden"
      sx={{
        overflow: 'hidden',
        alignSelf: { xs: 'flex-start', md: 'center' },
        width: '100%',
        borderRadius: { xs: '0', md: '12px' },
        flex: 1,
        boxShadow: { xs: 'none', md: '0 2px 10px #333333aa' },
      }}
    >
      {status && status.status === 'Номер не найден' ? (
        <Box alignSelf="flex-start" height="100%">
          <img src={notFound} />
        </Box>
      ) : status ? (
        <>
          <TrackingStatusListItem
            index={1}
            bg="#2A9D8F"
            name="Статус"
            description={status.status}
            icon={statusImg}
          />
          <TrackingStatusListItem
            index={2}
            bg="#457B9D"
            name="Адреса відділення відправника"
            description={status.warehouseSender || 'Вибачте але адреса загубилась'}
            icon={parcel}
          />
          <TrackingStatusListItem
            index={3}
            bg="#77babd"
            name="Адреса відділення одержувача"
            description={status.warehouseRecipient || 'Вибачте але адреса загубилась'}
            icon={warehouse}
            isLast
          />
        </>
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </Paper>
  )
}
