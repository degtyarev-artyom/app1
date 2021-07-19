import classNames from 'classnames'
import { Navbar } from 'components/common/navbar/navbar'
import { Title } from 'components/common/title/title'
import './home.scss'

export const Home = ({
  externalClass,
}) => {
  return (
    <div className={classNames('Home', {
      [externalClass]: externalClass,
    })}>
      <Title externalClass="Home__title">Home</Title>
      <Navbar externalClass="Home__navbar" />
      <div className="Home__content">
        {'Content => Home'}
      </div>
    </div>
  )
}
