import classNames from 'classnames'
import './components.scss'
import { ButtonBlock } from './button-block/button-block'
import { PaginationBlock } from './pagination-block/pagination-block'

export const Components = ({
  externalClass,
}) => {
  return (
    <div className={classNames('Components', {
      [externalClass]: externalClass
    })}>
      <ButtonBlock externalClass="Components__page-button-block" />
      <PaginationBlock externalClass="Components__page-pagination-block" />
    </div>
  )
}
