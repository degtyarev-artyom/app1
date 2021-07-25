import classNames from 'classnames'
import { Content, ContentProps } from 'components/common/content/content'
import { Navbar } from 'components/common/navbar/navbar'
import { Title, TitleProps } from 'components/common/title/title'
import { useSelector } from 'react-redux'
import { commonSelectors } from 'redux/common/common-selectors'
import { getTheme } from 'styling/themes'
import './home.scss'

export const Home = ({
  externalClass,
}) => {
  const currentTheme = useSelector(commonSelectors.currentTheme)

  return (
    <div className={classNames('Home', {
      [externalClass]: externalClass,
    })}>
      <Title
        externalClass="Home__title"
        theme={getTheme(currentTheme, TitleProps.theme.green)}
      >
        Home
      </Title>
      <Navbar externalClass="Home__navbar" />
      <Content
        externalClass="Home__content"
        theme={getTheme(currentTheme, ContentProps.theme.green)}
      >
        <div className="Home__content-home">🏠</div>
      </Content>
    </div>
  )
}
