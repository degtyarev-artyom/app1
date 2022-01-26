import classNames from 'classnames'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import './staff-value-prop.scss'
import { staticStyles } from './staff-value-prop-styles'

export const StaffValueProp = ({
  className,
  theme,
  propName,
  propActive,
  type,
  ...rest
}) => {
  return (
    <button
      className={classNames('StaffValueProp', {
        [className]: className,
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
