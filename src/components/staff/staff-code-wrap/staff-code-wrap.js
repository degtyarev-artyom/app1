import React from 'react'
import classNames from 'classnames'
import { getDynamicStyles } from './staff-code-wrap-styles'
import './staff-code-wrap.scss'
import { staffColors } from 'styling/staff/staff-styling-themes'

export const StaffCodeWrap = ({
  externalClass,
  children,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(staffColors)

  return (
    <pre
      className={classNames('StaffCodeWrap', {
        [externalClass]: externalClass
      })}
      {...rest}
    >
      { children }
      <style jsx>{ dynamicStyles }</style>
    </pre>
  )
}
