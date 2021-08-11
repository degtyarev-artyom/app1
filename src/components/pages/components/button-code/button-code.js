import React from 'react'
import classNames from 'classnames'
import './button-code.scss'
import { staffColors } from 'styling/staff/staff-styling-themes'
import { StaffCodeWrap } from 'components/staff/staff-code-wrap/staff-code-wrap'
import { StaffColorText } from 'components/staff/staff-styled-components/staff-styled-components'

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
  return (<>
    {showHideCode === 'show' && (
      <div
        className={classNames('ButtonCode', {
          [externalClass]: externalClass
        })}
        {...rest}
      >
        <StaffCodeWrap>
          <StaffColorText color={staffColors.codeYellow}>
            {`<Button`}
          </StaffColorText><br />

          {/* externalClass */}
          <StaffColorText color={staffColors.codeGrey}>
            {`  externalClass=`}
          </StaffColorText>
          <StaffColorText color={staffColors.codeGreen}>
            {`"${buttonExternalClass}"`}
          </StaffColorText><br />

          {/* theme */}
          <StaffColorText color={staffColors.codeGrey}>
            {`  theme=`}
          </StaffColorText>
          <StaffColorText color={staffColors.codeGreen}>
            {`"${buttonTheme}"`}
          </StaffColorText><br />

          {/* size */}
          <StaffColorText color={staffColors.codeGrey}>
            {`  size=`}
          </StaffColorText>
          <StaffColorText color={staffColors.codeGreen}>
            {`"${buttonSize}"`}
          </StaffColorText><br />

          {/* type */}
          <StaffColorText color={staffColors.codeGrey}>
            {`  type=`}
          </StaffColorText>
          <StaffColorText color={staffColors.codeGreen}>
            {`"${buttonType}"`}
          </StaffColorText><br />

          {/* focus */}
          {buttonFocus && (<>
            <StaffColorText color={staffColors.codeGrey}>
              {`  focus`}
            </StaffColorText><br />
          </>)}
          
          {/* active */}
          {buttonActive && (<>
            <StaffColorText color={staffColors.codeGrey}>
              {`  active`}
            </StaffColorText><br />
          </>)}

          {/* disabled */}
          {buttonDisabled && (<>
            <StaffColorText color={staffColors.codeGrey}>
              {`  disabled`}
            </StaffColorText><br />
          </>)}

          {/* > */}
          <StaffColorText color={staffColors.codeYellow}>
            {`>`}
          </StaffColorText><br />

          {/* children */}
          <StaffColorText color={staffColors.codeGrey}>
            {`  ${buttonChildren}`}
          </StaffColorText><br />

          {/* </Button> */}
          <StaffColorText color={staffColors.codeYellow}>
            {`</Button>`}
          </StaffColorText><br />
        </StaffCodeWrap>      
      </div>
    )}
  </>)
}
