import classNames from 'classnames'
import './button-code.scss'
import { StaffCodeWrap } from 'components/staff/staff-code-wrap/staff-code-wrap'
import { getButtonCode } from './button-code-string'
import { StaffColorText, staffColorTextProps } from 'components/staff/staff-styled-components/staff-color-text/staff-color-text'

export const ButtonCode = ({
  className,
  showHideCode,
  buttonCodeData,
  ...rest
}) => {
  const {
    buttonChildren,
    buttonClassName,
    buttonTheme,
    buttonSize,
    buttonType,
    buttonFocus,
    buttonActive,
    buttonDisabled,
    buttonBlock,
    buttonPending
  } = buttonCodeData
 
  return (<>
    {showHideCode === 'show' && (
      <div
        className={classNames('ButtonCode', {
          [className]: className
        })}
        {...rest}
      >
        <StaffCodeWrap
          className="ButtonCode__code-wrap"
          codeData={buttonCodeData}
          getCode={getButtonCode}
          delayCopied={1000}
        >
          {/* <Button */}
          <StaffColorText code={`<`} typeCode={staffColorTextProps.bracket} />
          <StaffColorText code={`Button`} typeCode={staffColorTextProps.component} br />
          
          {/* className */}
          <StaffColorText code={`  className`} typeCode={staffColorTextProps.prop} />
          <StaffColorText code={`=`} typeCode={staffColorTextProps.equal} />
          <StaffColorText code={`"${buttonClassName}"`} typeCode={staffColorTextProps.string} br />
          
          {/* theme */}
          <StaffColorText code={`  theme`} typeCode={staffColorTextProps.prop} />
          <StaffColorText code={`=`} typeCode={staffColorTextProps.equal} />
          <StaffColorText code={`"${buttonTheme}"`} typeCode={staffColorTextProps.string} br />
          
          {/* size */}
          <StaffColorText code={`  size`} typeCode={staffColorTextProps.prop} />
          <StaffColorText code={`=`} typeCode={staffColorTextProps.equal} />
          <StaffColorText code={`"${buttonSize}"`} typeCode={staffColorTextProps.string} br />
          
          {/* type */}
          <StaffColorText code={`  type`} typeCode={staffColorTextProps.prop} />
          <StaffColorText code={`=`} typeCode={staffColorTextProps.equal} />
          <StaffColorText code={`"${buttonType}"`} typeCode={staffColorTextProps.string} br />

          {/* focus */}
          <StaffColorText code={`  focus`} typeCode={staffColorTextProps.prop} visible={buttonFocus} br />

          {/* active */}
          <StaffColorText code={`  active`} typeCode={staffColorTextProps.prop} visible={buttonActive} br />

          {/* disabled */}
          <StaffColorText code={`  disabled`} typeCode={staffColorTextProps.prop} visible={buttonDisabled} br />

          {/* block */}
          <StaffColorText code={`  block`} typeCode={staffColorTextProps.prop} visible={buttonBlock} br />

          {/* pending */}
          <StaffColorText code={`  pending`} typeCode={staffColorTextProps.prop} visible={buttonPending} br />

          {/* > */}
          <StaffColorText code={`>`} typeCode={staffColorTextProps.bracket} br />

          {/* children */}
          <StaffColorText code={`  ${buttonChildren}`} typeCode={staffColorTextProps.text} br />

          {/* </Button> */}
          <StaffColorText code={`</`} typeCode={staffColorTextProps.bracket} />
          <StaffColorText code={`Button`} typeCode={staffColorTextProps.component} />
          <StaffColorText code={`>`} typeCode={staffColorTextProps.bracket} br />
        </StaffCodeWrap>
      </div>
    )}
  </>)
}
