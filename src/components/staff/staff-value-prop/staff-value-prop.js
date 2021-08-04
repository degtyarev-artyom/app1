import classNames from 'classnames'
import React from 'react'
import { staffColors, staffThemes } from 'styling/js/staff/staff-styling-themes'
import './staff-value-prop.scss'
import { getDynamicStyles } from './staff-value-prop-styles'

export const StaffValueProp = ({
  externalClass,
  theme,
  propName,
  propActive,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(staffColors)

  return (
    <button
      className={classNames('StaffValueProp', {
        [externalClass]: externalClass,
        [`StaffValueProp--${theme}`]: theme,
        'StaffValueProp--active': propActive === propName
      })}
      {...rest}
    >
      '{ propName }'
      <style jsx>{ dynamicStyles }</style>
    </button>
  )
}

export const StaffValuePropProps = {
  theme: staffThemes
}
