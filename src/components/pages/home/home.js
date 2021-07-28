import classNames from 'classnames'
import { Content } from 'components/common/content/content'
import { Navbar } from 'components/common/navbar/navbar'
import { Title } from 'components/common/title/title'
import { useSelector } from 'react-redux'
import { commonSelectors } from 'redux/common/common-selectors'
import { getTheme, themes } from 'styling/themes'
import './home.scss'

export const Home = ({
  externalClass,
}) => {
  const currentTheme = useSelector(commonSelectors.currentTheme)
  const theme = getTheme(currentTheme, themes.green)

  return (
    <div className={classNames('Home', {
      [externalClass]: externalClass,
    })}>
      <Title
        externalClass="Home__title"
        theme={theme}
      >
        Home
      </Title>
      <Navbar externalClass="Home__navbar" />
      <Content
        externalClass="Home__content"
        theme={theme}
      >
        <div className={classNames('Home__content-home', {
          'Home__content-home--default': currentTheme === 'default',
        })}>
          🏠
        </div>
      </Content>
    </div>
  )
}
