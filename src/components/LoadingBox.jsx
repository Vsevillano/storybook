import React from 'react'

export const LoadingBox = ({variant}) => {
  return (
    <div className={'spinner-border text-' + variant} role="status">
      <span className="sr-only">Cargando...</span>
    </div>
  )
}

LoadingBox.defaultProps = {
  variant: 'primary',
};
