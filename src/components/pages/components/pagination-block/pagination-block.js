import classNames from 'classnames'
import { StaffTextPropBlock, StaffTextPropBlockType } from 'components/staff/staff-text-prop-block/staff-text-prop-block'
import { StaffValuePropBlock, StaffValuePropBlockTypes } from 'components/staff/staff-value-prop-block/staff-value-prop-block'
import { useSelector } from 'react-redux'
import { componentsActions } from 'redux/pages/components/components-actions'
import { componentsSelectors } from 'redux/pages/components/components-selectors'
import './pagination-block.scss'
import { PaginationCode } from './pagination-code/pagination-code'
import { Pagination } from './pagination/pagination'

export const PaginationBlock = ({
  className,
  ...rest
}) => {
  const handlePage = (page, count) => {
    console.log('page =>', page, 'count =>', count)
  }

  const paginationClassName = useSelector(componentsSelectors.paginationClassName)
  const paginationShowHideCode = useSelector(componentsSelectors.paginationShowHideCode)

  return (
    <div
      className={classNames('PaginationBlock', { 
        [className]: className
      })}
      {...rest}
    >
      <div className="PaginationBlock__title">Pagination</div>
      <div className="PaginationBlock__content">
        <div className="PaginationBlock__left">
          <Pagination
            className="Sandbox__pagination"
            total={1375}
            count={[5, 10, 25, 50, 100]}
            handlePage={handlePage}
          />
        </div>
        <div className="PaginationBlock__right">
          
          {/* className */}
          <StaffTextPropBlock
            className="PaginationBlock__right-prop-class-name"
            title="className"
            type={StaffTextPropBlockType.string}
            action={componentsActions.paginationClassName}
            text={paginationClassName}
          />

          {/* code */}
          <StaffValuePropBlock
            className={classNames('PaginationBlock__right-code-show-hide', {
              'PaginationBlock__right-code-show-hide--hide': paginationShowHideCode === 'hide'
            })}
            title="code"
            type={StaffValuePropBlockTypes.code}
            properties={['show', 'hide']}
            propActive={paginationShowHideCode}
            action={componentsActions.paginationShowHideCode}
          />
          <PaginationCode
            className="PaginationBlock__right-code"
            showHideCode={paginationShowHideCode}
            codeData={{
              paginationClassName: paginationClassName,
              paginationTotal: 1375,
            }}
          />
        </div>
      </div>
    </div>
  )
}
