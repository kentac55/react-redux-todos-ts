import React, { useMemo } from 'react'

type ErrorViewProps = {
  type: string
  message: string | null
}

export const ErrorView: React.FC<ErrorViewProps> = ({ type, message }) => {
  return useMemo(() => {
    return (
      <>
        <h1 aria-label={'error page title'}>
          Welcome to Error Page
          <span role="img" aria-label="hugging-face">
            🤗
          </span>
        </h1>
        <pre aria-label={'error type'}>{type}</pre>
        {message && <pre aria-label={'error message'}>{message}</pre>}
      </>
    )
  }, [type, message])
}
