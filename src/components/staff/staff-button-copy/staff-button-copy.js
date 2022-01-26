import classNames from 'classnames'
import React, { useState } from 'react'
import { delay } from 'redux/root-saga'
import { StaffButton } from '../staff-button/staff-button'
import './staff-button-copy.scss'

export const StaffButtonCopy = ({
  className,
  theme,
  delayCopied,
  code,
}) => {
  const [copied, setCopied] = useState(false)

  return (
    <StaffButton
      className={classNames('StaffButtonCopy', {
        [className]: className
      })}
      theme={theme}
      onClick={() => {
        if (!code) return
        navigator.clipboard.writeText(code)
        .then(() => {
          setCopied(true)
          return delay(delayCopied)
        })
        .then(() => setCopied(false))
        .catch(e => console.log(e))
      }}
    >
      { copied ? 'Copied' : 'Copy'}
    </StaffButton>
  )
}
