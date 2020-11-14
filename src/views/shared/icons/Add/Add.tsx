import React, { FC } from 'react'

interface AddIconProps {
  onClick?: () => void
}

export const AddIcon: FC<AddIconProps> = (props) => {
  return (
    <svg 
      strokeWidth="0" 
      viewBox="0 0 24 24" 
      height="1em" 
      width="1em"
      {...props}
    >
      <path 
        stroke="#fff" 
        strokeWidth="2" 
        d="M12,22 L12,2 M2,12 L22,12" 
      />
    </svg>
  )
}