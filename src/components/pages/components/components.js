import classNames from 'classnames'
import './components.scss'
import { ButtonBlock } from './button-block/button-block'
import { PaginationBlock } from './pagination-block/pagination-block'

export const Components = ({
  className,
}) => {
  return (
    <div className={classNames('Components', {
      [className]: className
    })}>
      <ButtonBlock className="Components__page-button-block" />
      <PaginationBlock className="Components__page-pagination-block" />
    </div>
  )
}
