import classNames from 'classnames'
import { Content } from 'components/common/content/content'
import { Navbar } from 'components/common/navbar/navbar'
import { Title } from 'components/common/title/title'
import { useSelector } from 'react-redux'
import { commonSelectors } from 'redux/common/common-selectors'
import { getTheme, themes, colors } from 'styling/js/styling-themes'
import './not-found.scss'
import { getDynamicStyles } from './not-found-styles'

export const NotFound = ({
  externalClass,
}) => {
  const dynamicStyles = getDynamicStyles(colors)
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
        <div className={`NotFound__content-404 NotFound__content-404--theme-${theme}`}>
          404
        </div>
      </Content>
      <style jsx>{ dynamicStyles }</style>
    </div>
  )
}
