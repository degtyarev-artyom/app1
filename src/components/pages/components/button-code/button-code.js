import React from 'react'
import classNames from 'classnames'
import './button-code.scss'
import { staffColors, staffGetTheme, staffThemes } from 'styling/staff/staff-styling-themes'
import { StaffCodeWrap } from 'components/staff/staff-code-wrap/staff-code-wrap'
import { StaffColorText } from 'components/staff/staff-styled-components/staff-styled-components'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { useSelector } from 'react-redux'

export const ButtonCode = ({
  externalClass,
  showHideCode,
  buttonChildren,
  buttonExternalClass,
  buttonTheme,
  buttonSize,
  buttonType,
  buttonFocus,
  buttonActive,
  buttonDisabled,
  ...rest
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = staffGetTheme(currentTheme, staffThemes.purple)

  return (<>
    {showHideCode === 'show' && (
      <div
        className={classNames('ButtonCode', {
          [externalClass]: externalClass
        })}
        {...rest}
      >
        <StaffCodeWrap>
          <StaffColorText color={staffColors.codeYellow} theme={theme}>
            {`<Button`}
          </StaffColorText><br />

          {/* externalClass */}
          <StaffColorText color={staffColors.codeGrey} theme={theme}>
            {`  externalClass=`}
          </StaffColorText>
          <StaffColorText color={staffColors.codeGreen} theme={theme}>
            {`"${buttonExternalClass}"`}
          </StaffColorText><br />

          {/* theme */}
          <StaffColorText color={staffColors.codeGrey} theme={theme}>
            {`  theme=`}
          </StaffColorText>
          <StaffColorText color={staffColors.codeGreen} theme={theme}>
            {`"${buttonTheme}"`}
          </StaffColorText><br />

          {/* size */}
          <StaffColorText color={staffColors.codeGrey} theme={theme}>
            {`  size=`}
          </StaffColorText>
          <StaffColorText color={staffColors.codeGreen} theme={theme}>
            {`"${buttonSize}"`}
          </StaffColorText><br />

          {/* type */}
          <StaffColorText color={staffColors.codeGrey} theme={theme}>
            {`  type=`}
          </StaffColorText>
          <StaffColorText color={staffColors.codeGreen} theme={theme}>
            {`"${buttonType}"`}
          </StaffColorText><br />

          {/* focus */}
          {buttonFocus && (<>
            <StaffColorText color={staffColors.codeGrey} theme={theme}>
              {`  focus`}
            </StaffColorText><br />
          </>)}
          
          {/* active */}
          {buttonActive && (<>
            <StaffColorText color={staffColors.codeGrey} theme={theme}>
              {`  active`}
            </StaffColorText><br />
          </>)}

          {/* disabled */}
          {buttonDisabled && (<>
            <StaffColorText color={staffColors.codeGrey} theme={theme}>
              {`  disabled`}
            </StaffColorText><br />
          </>)}

          {/* > */}
          <StaffColorText color={staffColors.codeYellow} theme={theme}>
            {`>`}
          </StaffColorText><br />

          {/* children */}
          <StaffColorText color={staffColors.codeGrey} theme={theme}>
            {`  ${buttonChildren}`}
          </StaffColorText><br />

          {/* </Button> */}
          <StaffColorText color={staffColors.codeYellow} theme={theme}>
            {`</Button>`}
          </StaffColorText><br />
        </StaffCodeWrap>      
      </div>
    )}
  </>)
}
