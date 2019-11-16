import React from 'react'

type LinkViewProps = {
  active: boolean
  children: JSX.Element
  onClick: () => void
}

export const LinkView: React.FC<LinkViewProps> = ({
  active,
  children,
  onClick,
}: LinkViewProps) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>
)
