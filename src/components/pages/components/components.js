import classNames from 'classnames'
import { StaffContent } from 'components/staff/staff-content/staff-content'
import { StaffNavbar } from 'components/staff/staff-navbar/staff-navbar'
import { StaffTitle } from 'components/staff/staff-title/staff-title'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffGetTheme, staffThemes } from 'styling/js/staff/staff-styling-themes'
import { Button, ButtonProps } from 'components/pages/components/button/button'
import './components.scss'
import { StaffButton, StaffButtonProps } from 'components/staff/staff-button/staff-button'
import { useState } from 'react'

export const Components = ({
  externalClass,
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = staffGetTheme(currentTheme, staffThemes.purple)

  const [size, setSize] = useState('m');

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

        <div className="Components__button-size">
          <div className="Components__button-size-title">
            ButtonProps.size:
          </div>
          <StaffButton
            externalClass="Components__button-size-button"
            theme={theme}
            onClick={() => setSize('xs')}
          >
            'xs'
          </StaffButton>
          <StaffButton
            externalClass="Components__button-size-button"
            theme={theme}
            onClick={() => setSize('s')}
          >
            's'
          </StaffButton>
          <StaffButton
            externalClass="Components__button-size-button"
            theme={theme}
            onClick={() => setSize('m')}
          >
            'm'
          </StaffButton>
        </div>

        <div className="Components__item Components__item-button">

          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.greenBlue}
            size={ButtonProps.size[size]}
          >
            Green / Blue
          </Button>

          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.blueGreen}
            size={ButtonProps.size[size]}
          >
            Blue / Green
          </Button>

          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.green}
            size={ButtonProps.size[size]}
          >
            Green
          </Button>

          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.blue}
            size={ButtonProps.size[size]}
          >
            Blue
          </Button>

          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.red}
            size={ButtonProps.size[size]}
          >
            Red
          </Button>

          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.orange}
            size={ButtonProps.size[size]}
          >
            Orange
          </Button>

          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.purple}
            size={ButtonProps.size[size]}
          >
            Purple
          </Button>

        </div>
      </StaffContent>
    </div>
  )
}
