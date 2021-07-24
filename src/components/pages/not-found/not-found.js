import classNames from 'classnames'
import { Content } from 'components/common/content/content'
import { Navbar } from 'components/common/navbar/navbar'
import { Title } from 'components/common/title/title'
import { useSelector } from 'react-redux'
import { commonSelectors } from 'redux/common/common-selectors'
import { getTheme, themes } from 'styling/themes'
import './not-found.scss'

export const NotFound = ({
  externalClass,
}) => {
  const currentTheme = useSelector(commonSelectors.currentTheme)
  const theme = getTheme(currentTheme, themes.red)
  
  return (
    <div className={classNames('NotFound', {
      [externalClass]: externalClass,
    })}>
      <Title
        externalClass="NotFound__title"
        theme={theme}
      >
        Page not found
      </Title>
      <Navbar externalClass="NotFound__navbar" />
      <Content
        externalClass="NotFound__content"
        theme={theme}
      >
        ¯\_(ツ)_/¯
      </Content>
    </div>
  )
}
