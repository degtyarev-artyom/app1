import classNames from 'classnames'
import './tabs.scss'
import { themes } from 'styling/js/styling-themes'
import { staticStyles } from './tabs-styles'
import { Children, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { searchToObj, objToSearch } from 'functions/staff-get-func'

const Tabs = ({
  externalClass,
  tabsId,
  children,
  ...rest
}) => {
  const tabGET = tabsId ? `tab-${tabsId}` : 'tab'
  const history = useHistory()
  const [tabSlugActive, setTabSlugActive] = useState(searchToObj(history.location.search)[tabGET])
  
  const replace = tabSlug => {
    if (tabSlug === tabSlugActive) return
    const currentSearch = searchToObj(history.location.search)
    const search = objToSearch({...currentSearch, [tabGET]: tabSlug })
    history.replace({ ...history.location, search })
    setTabSlugActive(tabSlug)
  }

  /* available tabs */
  const availableTabs = Children.toArray(children)
    .filter(({ props: { tabSlug } }) => !!tabSlug)

  /* tab slug default */
  const tabSlugDefault = availableTabs
    .filter(({ props: { tabDefault } }) => !!tabDefault)[0]?.props.tabSlug

  /* content */
  const content = availableTabs
    .filter(({ props: { tabSlug } }) => tabSlug === tabSlugActive)[0]

  /* set tab slug active */
  if (!tabSlugActive || !content) {
    if (tabSlugDefault) {
      setTabSlugActive(tabSlugDefault)
    } else if (availableTabs.length) {
      setTabSlugActive(availableTabs[0].props.tabSlug)
    }
  }

  return (
    <div
      className={classNames('Tabs', {
        [externalClass]: externalClass,
      })}
      {...rest}
    >
      <div className="Tabs__list">
        {availableTabs.map(({ key, props: { tabSlug, tabName } }) =>
          <div
            className={classNames('Tabs__item', {
              'Tabs__item--active': tabSlug === tabSlugActive
            })}
            key={key}
            onClick={() => replace(tabSlug)}
          >
            { tabName || tabSlug }
          </div>
        )}
      </div>
      <div className="Tabs__content">
        { content }
      </div>
      <style jsx>{ staticStyles }</style>
    </div>
  )
}

const Tab = ({ children }) => children

const TabsProps = {
  theme: themes,
  size: {
    xs: 'xs',
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
  }
}

export { Tabs, Tab, TabsProps }
