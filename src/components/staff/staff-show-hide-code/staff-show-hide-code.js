import classNames from 'classnames'
import './staff-show-hide-code.scss'
import { staticStyles } from './staff-show-hide-code-styles'

export const StaffShowHideCode = ({
  className,
  showHideCode,
  code,
  ...rest
}) => {
  return (<>
    {showHideCode === 'show' && (
      <div  
        className={classNames('StaffShowHideCode', {
          [className]: className
        })}
        {...rest}
      >
        <pre className="StaffShowHideCode__pre">
          { code }
        </pre>
      </div>
    )}
    <style jsx>{ staticStyles }</style>
  </>)
}
