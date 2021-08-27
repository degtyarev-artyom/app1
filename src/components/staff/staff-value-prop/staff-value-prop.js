import classNames from 'classnames'
import { staffColorsMain, staffThemesMain } from 'styling/staff/staff-styling-themes'
import './staff-value-prop.scss'
import { getDynamicStyles } from './staff-value-prop-styles'

export const StaffValueProp = ({
  externalClass,
  theme,
  propName,
  propActive,
  type,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(staffColorsMain)

  return (
    <button
      className={classNames('StaffValueProp', {
        [externalClass]: externalClass,
        [`StaffValueProp--${theme}`]: theme,
        'StaffValueProp--active': propActive === propName
      })}
      {...rest}
    >
      {type === 'String' && `'${propName}'`}
      {type === 'Boolean' && propName}  
      {type === 'Code' && propName}  

      <style jsx>{ dynamicStyles }</style>
    </button>
  )
}

export const StaffValuePropProps = {
  theme: staffThemesMain
}
