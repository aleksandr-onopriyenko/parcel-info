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

const validationSchema = yup.object({
  number: yup
    .string('Введіть номер посилки')
    .min(14, 'Мінімальна довжина 14 символів')
    .required(`Поле обов'язкове для заповнення`)
    .matches(/^[0-9]+$/, 'Поле вводу має містити цифри'),
})

export const Tracking = () => {
  const [fetchTracking, { isLoading, data }] = useTrackingMutation()
  const [{ activeHistoryId, history }, setTracking] = useState({
    activeHistoryId: '',
    history: [],
  })

  const formik = useFormik({
    initialValues: {
      number: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ number }) => {
      const id = uuidv4()
      setTracking((prev) => {
        if (prev.history.find((historyNum) => historyNum.value === number)) return prev

        fetchTracking(number)
        return {
          ...prev,
          activeHistoryId: id,
          history: [...prev.history, { value: number, id }],
        }
      })
    },
  })

  useTrackingLocalStorage(history, setTracking)

  const handleHistory = (id, num) => {
    formik.setValues({ number: num })
    setTracking((prev) => ({
      ...prev,
      activeHistoryId: id,
    }))
    if (num !== formik.values.number) {
      fetchTracking(num)
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
