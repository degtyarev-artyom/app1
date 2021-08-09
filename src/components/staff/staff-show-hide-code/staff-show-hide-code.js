import classNames from 'classnames'
import React from 'react'
import './staff-show-hide-code.scss'
import { getDynamicStyles } from './staff-show-hide-code-styles'
import { staffColors } from 'styling/staff/staff-styling-themes'

export const StaffShowHideCode = ({
  externalClass,
  showHideCode,
  code,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(staffColors)

  return (<>
    {showHideCode === 'show' && (
      <div  
        className={classNames('StaffShowHideCode', {
          [externalClass]: externalClass
        })}
        {...rest}
      >
        <pre className="StaffShowHideCode__pre">
          { code }
        </pre>
      </div>
    )}
    <style jsx>{ dynamicStyles }</style>
  </>)
}
