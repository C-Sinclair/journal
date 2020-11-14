import React, { FC } from 'react'

interface CaretIconProps {
  onClick?: () => void
}

export const CaretIcon: FC<CaretIconProps> = (props) => {

  return (
    <svg 
      strokeWidth="0" 
      viewBox="0 0 16 16" 
      height="1em" 
      width="1em"
      {...props}
    >
      <path 
        stroke="#fff"
        d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 00-1.659-.753l-5.48 4.796a1 1 0 000 1.506z"
      />
    </svg>
  )
}