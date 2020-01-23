import React, { useEffect, useMemo } from 'react'

type StartViewProps = {
  loadDispatcher: () => void
}

export const StartView: React.FC<StartViewProps> = ({ loadDispatcher }) => {
  useEffect(() => {
    loadDispatcher()
  }, [loadDispatcher])
  return useMemo(() => {
    return <div>starting...</div>
  }, [])
}
