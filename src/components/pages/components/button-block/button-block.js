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
import { StaffShowHideCode } from 'components/staff/staff-show-hide-code/staff-show-hide-code'

export const ButtonBlock = ({
  externalClass,
  ...rest
}) => {
  const buttonChildren = useSelector(componentsSelectors.buttonChildren)
  const buttonExternalClass = useSelector(componentsSelectors.buttonExternalClass)
  const buttonSize = useSelector(componentsSelectors.buttonSize)
  const buttonTheme = useSelector(componentsSelectors.buttonTheme)
  const buttonBold = useSelector(componentsSelectors.buttonBold)
  const buttonFocus = useSelector(componentsSelectors.buttonFocus)
  const buttonActive = useSelector(componentsSelectors.buttonActive)
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
          bold={buttonBold === 'true'}
          size={buttonSize}
          focus={buttonFocus === 'true'}
          active={buttonActive === 'true'}
        >
          { buttonChildren }
        </Button>
      </div>
      <div className="ButtonBlock__right">
        <StaffTextPropBlock
          externalClass="ButtonBlock__right-children"
          title="children"
          type="JSX"
          action={componentsActions.buttonChangeChildren}
          text={buttonChildren}
        />
        <StaffTextPropBlock
          externalClass="ButtonBlock__right-prop-external-class"
          title="externalClass"
          type="String"
          action={componentsActions.buttonChangeExternalClass}
          text={buttonExternalClass}
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
          externalClass="ButtonBlock__right-prop-size"
          title="size"
          type="String"
          properties={Object.values(ButtonProps.sizes)}
          propActive={buttonSize}
          action={componentsActions.buttonChangeSize}
        />
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-bold"
          title="bold"
          type="Boolean"
          properties={['true', 'false']}
          propActive={buttonBold}
          action={componentsActions.buttonChangeBold}
        />
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-focus"
          title="focus"
          type="Boolean"
          properties={['true', 'false']}
          propActive={buttonFocus}
          action={componentsActions.buttonChangeFocus}
        />
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-active"
          title="active"
          type="Boolean"
          properties={['true', 'false']}
          propActive={buttonActive}
          action={componentsActions.buttonChangeActive}
        />
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-code-show-hide"
          title="code"
          type="Code"
          properties={['show', 'hide']}
          propActive={buttonShowHideCode}
          action={componentsActions.buttonShowHideCode}
        />

        <StaffShowHideCode
          externalClass="ButtonBlock__right-code"
          showHideCode={buttonShowHideCode}
          code={
            getButtonCode({
              buttonExternalClass,
              buttonChildren,
              buttonSize,
              buttonTheme,
              buttonBold: buttonBold === 'true',
              buttonFocus: buttonFocus === 'true',
              buttonActive: buttonActive === 'true'
            })
          }
        />

      </div>
    </div>
  )
}
