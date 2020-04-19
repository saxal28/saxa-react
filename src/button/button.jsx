import React from 'react'
import '../scss/components/_button.scss'

export const Button = ({
  children,
  primary,
  secondary,
  success,
  danger,
  outline,
  disabled,
  rounded
}) => {
  const buttonTypeClass = (() => {
    switch (true) {
      case primary:
        return 'primary'
      case secondary:
        return 'secondary'
      case success:
        return 'success'
      case danger:
        return 'danger'
      default:
        return ''
    }
  })()

  const outlineClass = outline ? 'outline' : ''
  const disabledClass = disabled ? 'disabled' : ''
  const roundedClass = rounded ? "rounded" : ''

  return (
    <button
      className={`saxa-button ${buttonTypeClass} ${outlineClass} ${disabledClass} ${roundedClass}`}
    >
      {children}
    </button>
  )
}
