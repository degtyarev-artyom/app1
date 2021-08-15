import classNames from 'classnames'
import React, { useState } from 'react'
import { delay as d } from 'redux/root-saga'
import { StaffButton } from '../staff-button/staff-button'
import './staff-button-copy.scss'

export const StaffButtonCopy = ({
  externalClass,
  theme,
  delay = 500,
  code,
}) => {
  const [copied, setCopied] = useState(false)

  return (
    <StaffButton
      externalClass={classNames('StaffButtonCopy', {
        [externalClass]: externalClass
      })}
      theme={theme}
      onClick={() => {
        if (!code) return
        navigator.clipboard.writeText(code)
        .then(() => {
          setCopied(true)
          return d(delay)
        })
        .then(() => setCopied(false))
        .catch(e => console.log(e))
      }}
    >
      { copied ? 'Copied' : 'Copy'}
    </StaffButton>
  )
}
