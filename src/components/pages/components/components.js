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
import { getButtonCode } from './components-code'

export const Components = ({
  externalClass,
}) => {
  const dispatch = useDispatch()
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = staffGetTheme(currentTheme, staffThemes.purple)
  const buttonChildren = useSelector(componentsSelectors.buttonChildren)
  const buttonExternalClass = useSelector(componentsSelectors.buttonExternalClass)
  const buttonSize = useSelector(componentsSelectors.buttonSize)
  const buttonTheme = useSelector(componentsSelectors.buttonTheme)
  const buttonNoFocus = useSelector(componentsSelectors.buttonNoFocus)
  const buttonShowHideCode = useSelector(componentsSelectors.buttonShowHideCode)

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
        <div className="Components__button-wrap">

          {/* button-left */}
          <div className="Components__button-left">
            
            {/* button-component */}
            <div className="Components__item-button">
              <Button
                externalClass="Components__button"
                theme={ButtonProps.themes[buttonTheme]}
                size={ButtonProps.sizes[buttonSize]}
                noFocus={buttonNoFocus === 'true'}
              >
                { buttonChildren }
              </Button>
            </div>
          </div>

          {/* button-right */}
          <div className="Components__button-right">

            {/* button-children-field */}
            <div className="Components__button-children">
              <span>children:</span>
              <input
                type="text"
                value={buttonChildren}
                onChange={e => dispatch(componentsActions.buttonChangeChildren(e.target.value))}
              />
            </div>

            {/* button-external-class-field */}
            <div className="Components__button-external-class">
              <span>externalClass:</span>
              <input
                type="text"
                value={buttonExternalClass}
                onChange={e => dispatch(componentsActions.buttonChangeExternalClass(e.target.value))}
              />
            </div>

            {/* button-size-props */}
            <StaffValuePropBlock
              externalClass="Components__button-size"
              title="size"
              type="String"
              properties={Object.values(ButtonProps.sizes)}
              propActive={buttonSize}
              dispatchFunc={prop => dispatch(componentsActions.buttonChangeSize(prop))}
            />

            {/* button-theme-props */}
            <StaffValuePropBlock
              externalClass="Components__button-theme"
              title="theme"
              type="String"
              properties={Object.values(ButtonProps.themes)}
              propActive={buttonTheme}
              dispatchFunc={prop => dispatch(componentsActions.buttonChangeTheme(prop))}
            />

            {/* button-no-focus-props */}
            <StaffValuePropBlock
              externalClass="Components__button-no-focus"
              title="noFocus"
              type="Boolean"
              properties={['true', 'false']}
              propActive={buttonNoFocus}
              dispatchFunc={prop => dispatch(componentsActions.buttonChangeNoFocus(prop))}
            />

            {/* button-code-props */}
            <StaffValuePropBlock
              externalClass="Components__button-code-props"
              title="code"
              type="Code"
              properties={['show', 'hide']}
              propActive={buttonShowHideCode}
              dispatchFunc={prop => dispatch(componentsActions.buttonShowHideCode(prop))}
            />

            {/* button-code */}
            {buttonShowHideCode === 'show' && (
              <div className="Components__button-code">
                <pre className="Components__button-code-pre">
                  {getButtonCode({
                    buttonChildren,
                    buttonSize,
                    buttonTheme,
                    buttonNoFocus: buttonNoFocus === 'true',
                    buttonExternalClass
                  })}
                </pre>
              </div>
            )}
          </div>
        </div>
          
      </StaffContent>
    </div>
  )
}
