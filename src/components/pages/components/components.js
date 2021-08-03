import classNames from 'classnames'
import { StaffContent } from 'components/staff/staff-content/staff-content'
import { StaffNavbar } from 'components/staff/staff-navbar/staff-navbar'
import { StaffTitle } from 'components/staff/staff-title/staff-title'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffGetTheme, staffThemes } from 'styling/js/staff/staff-styling-themes'
import { Button, ButtonProps } from 'components/pages/components/button/button'
import './components.scss'

export const Components = ({
  externalClass,
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = staffGetTheme(currentTheme, staffThemes.purple)

  return (
    <div className={classNames('Components', {
      [externalClass]: externalClass,
    })}>
      <StaffTitle
        externalClass="Components__title"
        theme={theme}
      >
        Components
      </StaffTitle>
      <StaffNavbar externalClass="Components__navbar" />
      <StaffContent
        externalClass="Components__content"
        theme={theme}
      >
        <div className="Components__item Components__item-button">

          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.greenBlue}
            size={ButtonProps.size.m}
          >
            Green / Blue
          </Button>

          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.blueGreen}
            size={ButtonProps.size.m}
          >
            Blue / Green
          </Button>

          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.green}
            size={ButtonProps.size.m}
          >
            Green
          </Button>

          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.blue}
            size={ButtonProps.size.m}
          >
            Blue
          </Button>

          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.red}
            size={ButtonProps.size.m}
          >
            Red
          </Button>

          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.orange}
            size={ButtonProps.size.m}
          >
            Orange
          </Button>

          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.purple}
            size={ButtonProps.size.m}
          >
            Purple
          </Button>

        </div>
      </StaffContent>
    </div>
  )
}
