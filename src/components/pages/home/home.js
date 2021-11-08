import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import './home.scss'

export const Home = ({
  externalClass,
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)

  return (
    <div className={classNames('Home', {
      [externalClass]: externalClass
    })}>
      <div className={classNames('Home__content', {
        'Home__content--default': currentTheme === 'default',
      })}>
        🏠
      </div>
    </div>
  )
}
