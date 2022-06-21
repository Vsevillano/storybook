import React from 'react'
import './Spinner.css';
export const Spinner = ({type, variant, size}) => {
  return (
    <div className={`spinner-${type} spinner-grow-${size} text-${variant}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

Spinner.defaultProps = {
  variant: 'primary',
  type: 'border',
  size: 'medium'
};
