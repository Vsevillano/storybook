import React from 'react'
import PropTypes from 'prop-types'
import './AlertMessage.css'

export const AlertMessage = ({ variant, message }) => {
  return (
    <div className={`alert alert-${variant}`} role="alert">
      {message}
    </div>
  )
}

AlertMessage.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info"]),
  message: PropTypes.string
}

AlertMessage.defaultProps = {
  variant: 'primary',
  message: 'Test alert!'
};