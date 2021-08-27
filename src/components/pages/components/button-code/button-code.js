import React from 'react'
import classNames from 'classnames'
import './button-code.scss'
import { staffColorsMain, staffColorsCode, staffThemesCode } from 'styling/staff/staff-styling-themes'
import { StaffCodeWrap } from 'components/staff/staff-code-wrap/staff-code-wrap'
import { StaffColorText } from 'components/staff/staff-styled-components/staff-styled-components'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { useSelector } from 'react-redux'
import { getButtonCode } from './button-code-string'

export const ButtonCode = ({
  externalClass,
  showHideCode,
  buttonCodeData,
  ...rest
}) => {
  const currentTheme = useSelector(staffSelectors.currentThemeMain)
  const {
    buttonChildren,
    buttonExternalClass,
    buttonTheme,
    buttonSize,
    buttonType,
    buttonFocus,
    buttonActive,
    buttonDisabled,
    buttonBlock,
    buttonPending
  } = buttonCodeData

  const themeCode = useSelector(staffSelectors.currentThemeCode)
 
  return (<>
    {showHideCode === 'show' && (
      <div
        className={classNames('ButtonCode', {
          [externalClass]: externalClass
        })}
        {...rest}
      >
        <StaffCodeWrap
          externalClass="ButtonCode__code-wrap"
          codeData={buttonCodeData}
          getCode={getButtonCode}
          delayCopied={1000}
        >
          {/* <Button */}
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].bracket} currentTheme={currentTheme}>
            {`<`}
          </StaffColorText>
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].component} currentTheme={currentTheme}>
            {`Button`}
          </StaffColorText><br />

          {/* externalClass */}
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].prop} currentTheme={currentTheme}>
            {`  externalClass=`}
          </StaffColorText>
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].string} currentTheme={currentTheme}>
            {`"${buttonExternalClass}"`}
          </StaffColorText><br />

          {/* theme */}
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].prop} currentTheme={currentTheme}>
            {`  theme=`}
          </StaffColorText>
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].string} currentTheme={currentTheme}>
            {`"${buttonTheme}"`}
          </StaffColorText><br />

          {/* size */}
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].prop} currentTheme={currentTheme}>
            {`  size=`}
          </StaffColorText>
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].string} currentTheme={currentTheme}>
            {`"${buttonSize}"`}
          </StaffColorText><br />

          {/* type */}
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].prop} currentTheme={currentTheme}>
            {`  type=`}
          </StaffColorText>
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].string} currentTheme={currentTheme}>
            {`"${buttonType}"`}
          </StaffColorText><br />

          {/* focus */}
          {buttonFocus && (<>
            <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].prop} currentTheme={currentTheme}>
              {`  focus`}
            </StaffColorText><br />
          </>)}
          
          {/* active */}
          {buttonActive && (<>
            <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].prop} currentTheme={currentTheme}>
              {`  active`}
            </StaffColorText><br />
          </>)}

          {/* disabled */}
          {buttonDisabled && (<>
            <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].prop} currentTheme={currentTheme}>
              {`  disabled`}
            </StaffColorText><br />
          </>)}

          {/* block */}
          {buttonBlock && (<>
            <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].prop} currentTheme={currentTheme}>
              {`  block`}
            </StaffColorText><br />
          </>)}

          {/* pending */}
          {buttonPending && (<>
            <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].prop} currentTheme={currentTheme}>
              {`  pending`}
            </StaffColorText><br />
          </>)}

          {/* > */}
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].bracket} currentTheme={currentTheme}>
            {`>`}
          </StaffColorText><br />

          {/* children */}
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].text} currentTheme={currentTheme}>
            {`  ${buttonChildren}`}
          </StaffColorText><br />

          {/* </Button> */}
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].bracket} currentTheme={currentTheme}>
            {`</`}
          </StaffColorText>
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].component} currentTheme={currentTheme}>
            {`Button`}
          </StaffColorText>
          <StaffColorText themeCode={themeCode} color={staffColorsCode[themeCode].bracket} currentTheme={currentTheme}>
            {`>`}
          </StaffColorText><br />
        </StaffCodeWrap>
      </div>
    )}
  </>)
}
