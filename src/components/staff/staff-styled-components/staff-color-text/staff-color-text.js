import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffColorsCode } from 'styling/staff/staff-styling-themes'
import { StaffColorTextSub } from './staff-color-text-sub'

export const StaffColorText = ({
  className,
  code,
  typeCode,
  visible = true,
  br,
  ...rest
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const themeCode = useSelector(staffSelectors.currentThemeCode)

  return (<>
    {!!visible && (<>
      <StaffColorTextSub
        className={classNames('StaffColorText', {
          [className]: className
        })}
        themeCode={themeCode}
        color={staffColorsCode[themeCode][typeCode]}
        currentTheme={currentTheme}
        {...rest}
      >
        { code }
      </StaffColorTextSub>
      {br && <br />}
    </>)}
    
  </>)
}

export const staffColorTextProps = {
  bracket: 'bracket',
  fbracket: 'fbracket',
  component: 'component',
  prop: 'prop',
  equal: 'equal',
  string: 'string',
  number: 'number',
  text: 'text',
  background: 'background'
}
