import React from 'react'
import classNames from 'classnames'
import './button-code.scss'
import { staffColors } from 'styling/staff/staff-styling-themes'
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

  return (<>
    {showHideCode === 'show' && (
      <div
        className={classNames('ButtonCode', {
          [externalClass]: externalClass
        })}
        {...rest}
      >
        <StaffCodeWrap>
          <StaffColorText color={staffColors.codeYellow} currentTheme={currentTheme}>
            {`<Button`}
          </StaffColorText><br />

          {/* externalClass */}
          <StaffColorText color={staffColors.codeGrey} currentTheme={currentTheme}>
            {`  externalClass=`}
          </StaffColorText>
          <StaffColorText color={staffColors.codeGreen} currentTheme={currentTheme}>
            {`"${buttonExternalClass}"`}
          </StaffColorText><br />

          {/* theme */}
          <StaffColorText color={staffColors.codeGrey} currentTheme={currentTheme}>
            {`  theme=`}
          </StaffColorText>
          <StaffColorText color={staffColors.codeGreen} currentTheme={currentTheme}>
            {`"${buttonTheme}"`}
          </StaffColorText><br />

          {/* size */}
          <StaffColorText color={staffColors.codeGrey} currentTheme={currentTheme}>
            {`  size=`}
          </StaffColorText>
          <StaffColorText color={staffColors.codeGreen} currentTheme={currentTheme}>
            {`"${buttonSize}"`}
          </StaffColorText><br />

          {/* type */}
          <StaffColorText color={staffColors.codeGrey} currentTheme={currentTheme}>
            {`  type=`}
          </StaffColorText>
          <StaffColorText color={staffColors.codeGreen} currentTheme={currentTheme}>
            {`"${buttonType}"`}
          </StaffColorText><br />

          {/* focus */}
          {buttonFocus && (<>
            <StaffColorText color={staffColors.codeGrey} currentTheme={currentTheme}>
              {`  focus`}
            </StaffColorText><br />
          </>)}
          
          {/* active */}
          {buttonActive && (<>
            <StaffColorText color={staffColors.codeGrey} currentTheme={currentTheme}>
              {`  active`}
            </StaffColorText><br />
          </>)}

          {/* disabled */}
          {buttonDisabled && (<>
            <StaffColorText color={staffColors.codeGrey} currentTheme={currentTheme}>
              {`  disabled`}
            </StaffColorText><br />
          </>)}

          {/* > */}
          <StaffColorText color={staffColors.codeYellow} currentTheme={currentTheme}>
            {`>`}
          </StaffColorText><br />

          {/* children */}
          <StaffColorText color={staffColors.codeGrey} currentTheme={currentTheme}>
            {`  ${buttonChildren}`}
          </StaffColorText><br />

          {/* </Button> */}
          <StaffColorText color={staffColors.codeYellow} currentTheme={currentTheme}>
            {`</Button>`}
          </StaffColorText><br />
        </StaffCodeWrap>      
      </div>
    )}
  </>)
}
