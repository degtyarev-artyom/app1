import classNames from 'classnames'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import './staff-value-prop.scss'
import { staticStyles } from './staff-value-prop-styles'

export const StaffValueProp = ({
  externalClass,
  theme,
  propName,
  propActive,
  type,
  ...rest
}) => {
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

      <style jsx>{ staticStyles }</style>
    </button>
  )
}

export const StaffValuePropProps = {
  theme: staffThemes
}
