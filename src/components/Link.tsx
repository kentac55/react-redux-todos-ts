import React, { useMemo } from 'react'

type LinkViewProps = {
  active: boolean
  label: string
  onClick: () => void
}

export const LinkView: React.FC<LinkViewProps> = ({
  active,
  label,
  onClick,
}) => {
  return useMemo(() => {
    return (
      <button
        aria-label={'show-' + label}
        onClick={onClick}
        disabled={active}
        style={{
          marginLeft: '4px',
        }}
      >
        {label}
      </button>
    )
  }, [active, label, onClick])
}
