import { Box, Button, TextField } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { useTrackingMutation } from '@/services/api/trackingApi'
import { useTrackingLocalStorage } from '@/hooks/useTrackingLocalStorage'

import { emptyData } from './images'
import { EmptyData } from '../ui/EmptyData'
import { TrackingInput } from './TrackingInput'
import { TrackingWrapper } from './TrackingWrapper'
import { TrackingHistory } from './TrackingHistory'
import { TrackingStatusList } from './TrackingStatusList'

export const Tracking = () => {
  const [{ activeHistoryId, history }, setTracking] = useState({
    activeHistoryId: '',
    history: [],
  })

  useTrackingLocalStorage(history, setTracking)

  const handleHistory = (id, num) => {
    formik.setValues({ number: num })
    setTracking((prev) => ({
      ...prev,
      activeHistoryId: id,
    }))
    if (num !== formik.values.number) {
      // fetch data
    }
  }

  const removeHistory = () => {
    setTracking((prev) => ({ ...prev, history: [] }))
  }

  return (
    <Box height="100%">
      <TrackingInput
        value={formik.values}
        disabled={isLoading}
        onSubmit={formik.handleSubmit}
        onChange={formik.handleChange}
        formik={formik}
      />
      <TrackingWrapper>
        {!isLoading && !data ? (
          <EmptyData image={emptyData} description="Введіть номер посилки" />
        ) : (
          <TrackingStatusList status={data} />
        )}
        {history.length > 0 && (
          <TrackingHistory
            history={history}
            handle={handleHistory}
            activeId={activeHistoryId}
            removeHistory={removeHistory}
          />
        )}
      </TrackingWrapper>
    </Box>
  )
}
