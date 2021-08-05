import classNames from 'classnames'
import React from 'react'
import './staff-value-prop-block.scss'
import { StaffValueProp } from 'components/staff/staff-value-prop/staff-value-prop'
import { useSelector } from 'react-redux'
import { staffGetTheme, staffThemes } from 'styling/js/staff/staff-styling-themes'
import { staffSelectors } from 'redux/staff/staff-selectors'

export const StaffValuePropBlock = ({
  externalClass,
  title,
  properties,
  propActive,
  dispatchFunc,
  ...rest
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = staffGetTheme(currentTheme, staffThemes.purple)

  return (
    <div
      className={classNames('StaffValuePropBlock', {
        [externalClass]: externalClass,
      })}
      {...rest}
    >
      <div className="StaffValuePropBlock__list">
        <div className="StaffValuePropBlock__title">
          size:
        </div>
        {properties.map(prop => (
          <StaffValueProp
            externalClass="StaffValuePropBlock__item"
            theme={theme}
            propName={prop}
            propActive={propActive}
            onClick={() => dispatchFunc(prop)}
          />
        ))}
      </div>
    </div>
  )
}
