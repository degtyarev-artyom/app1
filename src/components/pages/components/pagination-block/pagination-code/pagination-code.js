import classNames from 'classnames'
import './pagination-code.scss'
import { StaffCodeWrap } from 'components/staff/staff-code-wrap/staff-code-wrap'
import { getPaginationCode } from './pagination-code-string'
import { StaffColorText, staffColorTextProps } from 'components/staff/staff-styled-components/staff-color-text/staff-color-text'

export const PaginationCode = ({
  className,
  showHideCode,
  codeData,
  ...rest
}) => {
  const {
    paginationClassName,
    paginationTotal,
  } = codeData
 
  return (<>
    {showHideCode === 'show' && (
      <div
        className={classNames('ButtonCode', {
          [className]: className
        })}
        {...rest}
      >
        <StaffCodeWrap
          className="PaginationCode__code-wrap"
          codeData={codeData}
          getCode={getPaginationCode}
          delayCopied={1000}
        >
          {/* <Pagination */}
          <StaffColorText code={`<`} typeCode={staffColorTextProps.bracket} />
          <StaffColorText code={`Pagination`} typeCode={staffColorTextProps.component} br />
          
          {/* className */}
          <StaffColorText code={`  className`} typeCode={staffColorTextProps.prop} />
          <StaffColorText code={`=`} typeCode={staffColorTextProps.equal} />
          <StaffColorText code={`"${paginationClassName}"`} typeCode={staffColorTextProps.string} br />
          
          {/* className */}
          <StaffColorText code={`  total`} typeCode={staffColorTextProps.prop} />
          <StaffColorText code={`=`} typeCode={staffColorTextProps.equal} />

          {/* total */}
          <StaffColorText code={`{`} typeCode={staffColorTextProps.fbracket} />
          <StaffColorText code={`${paginationTotal}`} typeCode={staffColorTextProps.number} />
          <StaffColorText code={`}`} typeCode={staffColorTextProps.fbracket} br />

          {/* /> */}
          <StaffColorText code={`/>`} typeCode={staffColorTextProps.bracket} />

        </StaffCodeWrap>
      </div>
    )}
  </>)
}
