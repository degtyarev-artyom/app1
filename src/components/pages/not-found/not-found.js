import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import './not-found.scss'
import { getTheme } from 'functions/staff-styling-func'
import { staticStyles } from './not-found-styles'

export const NotFound = ({
  externalClass,
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = getTheme(currentTheme, staffThemes.red)
  
  return (
    <div className={classNames('NotFound', {
      [externalClass]: externalClass
    })}>
      <div className={`NotFound__content-404 NotFound__content-404--theme-${theme}`}>
        404
      </div>
      <style jsx>{ staticStyles }</style>
    </div>
  )
}
