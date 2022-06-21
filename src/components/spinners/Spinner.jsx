import React from 'react'
import PropTypes from 'prop-types'

import './Spinner.css';
export const Spinner = ({ type, variant, size }) => {
  return (
    <div className={`spinner-${type} spinner-grow-${size} text-${variant}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

Spinner.propTypes = {
   type: PropTypes.oneOf(["border", "grow"]),
   size: PropTypes.oneOf(["small", "medium", "large"]),
   variant: PropTypes.oneOf(["primary", "secondary"]),
}

Spinner.defaultProps = {
  variant: 'primary',
  type: 'border',
  size: 'medium'
};
