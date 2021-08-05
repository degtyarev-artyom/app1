import classNames from 'classnames'
import { StaffContent } from 'components/staff/staff-content/staff-content'
import { StaffNavbar } from 'components/staff/staff-navbar/staff-navbar'
import { StaffTitle } from 'components/staff/staff-title/staff-title'
import { useDispatch, useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffGetTheme, staffThemes } from 'styling/js/staff/staff-styling-themes'
import { Button, ButtonProps } from 'components/pages/components/button/button'
import './components.scss'
import { componentsSelectors } from 'redux/pages/components/components-selectors'
import { componentsActions } from 'redux/pages/components/components-actions'
import { StaffValuePropBlock } from 'components/staff/staff-value-prop-block/staff-value-prop-block'

export const Components = ({
  externalClass,
}) => {
  const dispatch = useDispatch()
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = staffGetTheme(currentTheme, staffThemes.purple)
  const buttonChildren = useSelector(componentsSelectors.buttonChildren)
  const buttonSize = useSelector(componentsSelectors.buttonSize)
  const buttonTheme = useSelector(componentsSelectors.buttonTheme)

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
        <div className="Components__button-children">
          <span>children:</span>
          <input
            type="text"
            value={buttonChildren}
            onChange={e => dispatch(componentsActions.buttonChangeChildren(e.target.value))}
          />
        </div>

        <StaffValuePropBlock
          externalClass="Components__button-size"
          title="size:"
          properties={Object.values(ButtonProps.sizes)}
          propActive={buttonSize}
          dispatchFunc={prop => dispatch(componentsActions.buttonChangeSize(prop))}
        />

        <StaffValuePropBlock
          externalClass="Components__button-theme"
          title="theme:"
          properties={Object.values(ButtonProps.themes)}
          propActive={buttonTheme}
          dispatchFunc={prop => dispatch(componentsActions.buttonChangeTheme(prop))}
        />

        <div className="Components__item Components__item-button">
          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes[buttonTheme]}
            size={ButtonProps.sizes[buttonSize]}
          >
            { buttonChildren }
          </Button>
          {/* <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.green}
            size={ButtonProps.sizes[buttonSize]}
          >
            { buttonChildren }
          </Button>
          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.blue}
            size={ButtonProps.sizes[buttonSize]}
          >
            { buttonChildren }
          </Button>
          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.red}
            size={ButtonProps.sizes[buttonSize]}
          >
            { buttonChildren }
          </Button>
          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.orange}
            size={ButtonProps.sizes[buttonSize]}
          >
            { buttonChildren }
          </Button>
          <Button
            externalClass="Components__button"
            theme={ButtonProps.themes.purple}
            size={ButtonProps.sizes[buttonSize]}
          >
            { buttonChildren }
          </Button> */}
        </div>
      
      </StaffContent>
    </div>
  )
}
