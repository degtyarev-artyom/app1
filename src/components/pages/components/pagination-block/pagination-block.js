import classNames from 'classnames'
import './pagination-block.scss'

export const PaginationBlock = ({
  externalClass,
  ...rest
}) => {
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
          pagination-left
        </div>
        <div className="PaginationBlock__right">
          pagination-right
        </div>
      </div>
    </div>
  )
}
