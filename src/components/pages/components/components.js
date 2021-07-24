import classNames from 'classnames'
import { Content } from 'components/common/content/content'
import { Navbar } from 'components/common/navbar/navbar'
import { Title } from 'components/common/title/title'
import { useSelector } from 'react-redux'
import { commonSelectors } from 'redux/common/common-selectors'
import { getTheme, themes } from 'styling/themes'
import './components.scss'
import { Counter } from './counter/counter'

export const Components = ({
  externalClass,
}) => {
  const currentTheme = useSelector(commonSelectors.currentTheme)
  const theme = getTheme(currentTheme, themes.purple)

  return (
    <div className={classNames('Components', {
      [externalClass]: externalClass,
    })}>
      <Title
        externalClass="Components__title"
        theme={theme}
      >
        Components
      </Title>
      <Navbar externalClass="Components__navbar" />
      <Content
        externalClass="Components__content"
        theme={theme}
      >
        <Counter externalClass="Components__counter" />
      </Content>
    </div>
  )
}
