import classNames from 'classnames'
import './staff-show-hide-code.scss'
import { staticStyles } from './staff-show-hide-code-styles'

export const StaffShowHideCode = ({
  externalClass,
  showHideCode,
  code,
  ...rest
}) => {
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
    <style jsx>{ staticStyles }</style>
  </>)
}
