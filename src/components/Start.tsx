import React, { useEffect, useMemo } from 'react'

type StartViewProps = {
  loadDispatcher: () => void
  loaded: boolean
}

export const StartView: React.FC<StartViewProps> = ({
  loadDispatcher,
  loaded,
}) => {
  useEffect(() => {
    loadDispatcher()
  }, [loaded])
  return useMemo(() => {
    return <div>starting...</div>
  }, [])
}
