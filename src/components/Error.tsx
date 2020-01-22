import React, { useMemo } from 'react'

type ErrorViewProps = {
  type: string
  message: string | null
}

export const ErrorView: React.FC<ErrorViewProps> = ({ type, message }) => {
  return useMemo(() => {
    if (message) {
      return (
        <>
          <div>Welcome to Error Page🤗</div>
          <pre>{type}</pre>
          <pre>{message}</pre>
        </>
      )
    } else {
      return (
        <>
          <div>Welcome to Error Page🤗</div>
          <pre>{type}</pre>
        </>
      )
    }
  }, [type, message])
}
