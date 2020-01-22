import React, { useMemo } from 'react'

export const LoadingView: React.FC = () => {
  return useMemo(() => <div>loading...</div>, [])
}
