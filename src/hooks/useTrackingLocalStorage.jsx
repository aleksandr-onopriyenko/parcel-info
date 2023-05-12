import { useEffect } from 'react'

export const useTrackingLocalStorage = (history, func) => {
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem('history')) &&
      JSON.parse(localStorage.getItem('history')).length
    ) {
      func((prev) => ({
        ...prev,
        history: [...JSON.parse(localStorage.getItem('history'))],
      }))
    }
  }, [])

  useEffect(() => {
    if (history.length) {
      localStorage.setItem('history', JSON.stringify(history))
    }
  }, [history])
}
