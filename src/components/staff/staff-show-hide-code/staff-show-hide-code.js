import classNames from 'classnames'
import './staff-show-hide-code.scss'
import { getDynamicStyles } from './staff-show-hide-code-styles'
import { staffColorsMain } from 'styling/staff/staff-styling-themes'

export const StaffShowHideCode = ({
  externalClass,
  showHideCode,
  code,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(staffColorsMain)

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
