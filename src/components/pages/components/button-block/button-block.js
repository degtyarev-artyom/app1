import React from 'react'
import classNames from 'classnames'
import './button-block.scss'
import { componentsSelectors } from 'redux/pages/components/components-selectors'
import { useSelector } from 'react-redux'
import { StaffTextPropBlock } from 'components/staff/staff-text-prop-block/staff-text-prop-block'
import { Button, ButtonProps } from '../button/button'
import { componentsActions } from 'redux/pages/components/components-actions'
import { StaffValuePropBlock } from 'components/staff/staff-value-prop-block/staff-value-prop-block'
import { getButtonCode } from '../components-code'
import { getDynamicStyles } from './button-block-styles'
import { staffColors } from 'styling/staff/staff-styling-themes'

export const ButtonBlock = ({
  externalClass,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(staffColors)
  const buttonChildren = useSelector(componentsSelectors.buttonChildren)
  const buttonExternalClass = useSelector(componentsSelectors.buttonExternalClass)
  const buttonSize = useSelector(componentsSelectors.buttonSize)
  const buttonTheme = useSelector(componentsSelectors.buttonTheme)
  const buttonNoFocus = useSelector(componentsSelectors.buttonNoFocus)
  const buttonShowHideCode = useSelector(componentsSelectors.buttonShowHideCode)

  return (
    <div
      className={classNames('ButtonBlock', { 
        [externalClass]: externalClass
      })}
      {...rest}
    >
      <div className="ButtonBlock__left">
        <Button
          externalClass="ButtonBlock__left-button"
          theme={buttonTheme}
          size={buttonSize}
          noFocus={buttonNoFocus === 'true'}
        >
          { buttonChildren }
        </Button>
      </div>
      <div className="ButtonBlock__right">
        <StaffTextPropBlock
          externalClass="ButtonBlock__right-children"
          title="children:"
          action={componentsActions.buttonChangeChildren}
          text={buttonChildren}
        />
        <StaffTextPropBlock
          externalClass="ButtonBlock__right-prop-external-class"
          title="externalClass (String):"
          action={componentsActions.buttonChangeExternalClass}
          text={buttonExternalClass}
        />
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-size"
          title="size"
          type="String"
          properties={Object.values(ButtonProps.sizes)}
          propActive={buttonSize}
          action={componentsActions.buttonChangeSize}
        />
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-theme"
          title="theme"
          type="String"
          properties={Object.values(ButtonProps.themes)}
          propActive={buttonTheme}
          action={componentsActions.buttonChangeTheme}
        />
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-no-focus"
          title="noFocus"
          type="Boolean"
          properties={['true', 'false']}
          propActive={buttonNoFocus}
          action={componentsActions.buttonChangeNoFocus}
        />
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-code-show-hide"
          title="code"
          type="Code"
          properties={['show', 'hide']}
          propActive={buttonShowHideCode}
          action={componentsActions.buttonShowHideCode}
        />
        {buttonShowHideCode === 'show' && (
          <div className="ButtonBlock__right-code">
            <pre className="ButtonBlock__right-code-pre">
              {
                getButtonCode({
                  buttonChildren,
                  buttonSize,
                  buttonTheme,
                  buttonNoFocus: buttonNoFocus === 'true',
                  buttonExternalClass
                })
              }
            </pre>
          </div>
        )}
      </div>
      <style jsx>{ dynamicStyles }</style>
    </div>
  )
}