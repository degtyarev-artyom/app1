import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffColorsCode } from 'styling/staff/staff-styling-themes'
import { StaffColorTextSub } from './staff-color-text-sub'

export const StaffColorText = ({
  externalClass,
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
          [externalClass]: externalClass
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
  component: 'component',
  prop: 'prop',
  equal: 'equal',
  string: 'string',
  text: 'text',
  background: 'background'
}
