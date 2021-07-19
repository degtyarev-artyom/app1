import classNames from 'classnames'
import { Navbar } from 'components/common/navbar/navbar'
import { Title } from 'components/common/title/title'
import './components.scss'
import { Counter } from './counter/counter'

export const Components = ({
  externalClass,
}) => {
  return (
    <div className={classNames('Components', {
      [externalClass]: externalClass,
    })}>
      <Title externalClass="Components__title">Components</Title>
      <Navbar externalClass="Components__navbar" />
      <div className="Components__content">
        <Counter externalClass="Components__counter" />
      </div>
    </div>
  )
}
