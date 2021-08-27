import classNames from 'classnames'
import { StaffContent } from 'components/staff/staff-content/staff-content'
import { StaffNavbar } from 'components/staff/staff-navbar/staff-navbar'
import { StaffTitle } from 'components/staff/staff-title/staff-title'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffThemesMain, staffColorsMain } from 'styling/staff/staff-styling-themes'
import './not-found.scss'
import { getDynamicStyles } from './not-found-styles'
import { getTheme } from 'styling/staff/staff-styling-functions'

export const NotFound = ({
  externalClass,
}) => {
  const dynamicStyles = getDynamicStyles(staffColorsMain)
  const currentTheme = useSelector(staffSelectors.currentThemeMain)
  const theme = getTheme(currentTheme, staffThemesMain.red)
  
  return (
    <div className={classNames('NotFound', {
      [externalClass]: externalClass
    })}>
      <StaffTitle
        externalClass="NotFound__title"
        theme={theme}
      >
        Page not found
      </StaffTitle>
      <StaffNavbar externalClass="NotFound__navbar" />
      <StaffContent
        externalClass="NotFound__content"
        theme={theme}
      >
        <div className={`NotFound__content-404 NotFound__content-404--theme-${theme}`}>
          404
        </div>
      </StaffContent>
      <style jsx>{ dynamicStyles }</style>
    </div>
  )
}
