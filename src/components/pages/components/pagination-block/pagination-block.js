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
  externalClass,
  ...rest
}) => {
  const handlePage = (page, count) => {
    console.log('page =>', page, 'count =>', count)
  }

  const paginationExternalClass = useSelector(componentsSelectors.paginationExternalClass)
  const paginationShowHideCode = useSelector(componentsSelectors.paginationShowHideCode)

  return (
    <div
      className={classNames('PaginationBlock', { 
        [externalClass]: externalClass
      })}
      {...rest}
    >
      <div className="PaginationBlock__title">Pagination</div>
      <div className="PaginationBlock__content">
        <div className="PaginationBlock__left">
          <Pagination
            externalClass="Sandbox__pagination"
            total={1375}
            count={[5, 10, 25, 50, 100]}
            handlePage={handlePage}
          />
        </div>
        <div className="PaginationBlock__right">
          
          {/* externalClass */}
          <StaffTextPropBlock
            externalClass="PaginationBlock__right-prop-external-class"
            title="externalClass"
            type={StaffTextPropBlockType.string}
            action={componentsActions.paginationExternalClass}
            text={paginationExternalClass}
          />

          {/* code */}
          <StaffValuePropBlock
            externalClass={classNames('PaginationBlock__right-code-show-hide', {
              'PaginationBlock__right-code-show-hide--hide': paginationShowHideCode === 'hide'
            })}
            title="code"
            type={StaffValuePropBlockTypes.code}
            properties={['show', 'hide']}
            propActive={paginationShowHideCode}
            action={componentsActions.paginationShowHideCode}
          />
          <PaginationCode
            externalClass="PaginationBlock__right-code"
            showHideCode={paginationShowHideCode}
            codeData={{
              paginationExternalClass,
              paginationTotal: 1375,
            }}
          />
        </div>
      </div>
    </div>
  )
}
