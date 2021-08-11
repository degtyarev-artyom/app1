import React from 'react'
import classNames from 'classnames'
import './button-block.scss'
import { componentsSelectors } from 'redux/pages/components/components-selectors'
import { useSelector } from 'react-redux'
import { StaffTextPropBlock, StaffTextPropBlockType } from 'components/staff/staff-text-prop-block/staff-text-prop-block'
import { Button, ButtonProps } from '../button/button'
import { componentsActions } from 'redux/pages/components/components-actions'
import { StaffValuePropBlock, StaffValuePropBlockTypes } from 'components/staff/staff-value-prop-block/staff-value-prop-block'
import { ButtonCode } from '../button-code/button-code'

export const ButtonBlock = ({
  externalClass,
  ...rest
}) => {
  const buttonChildren = useSelector(componentsSelectors.buttonChildren)
  const buttonExternalClass = useSelector(componentsSelectors.buttonExternalClass)
  const buttonTheme = useSelector(componentsSelectors.buttonTheme)
  const buttonSize = useSelector(componentsSelectors.buttonSize)
  const buttonType = useSelector(componentsSelectors.buttonType)
  const buttonFocus = useSelector(componentsSelectors.buttonFocus)
  const buttonActive = useSelector(componentsSelectors.buttonActive)
  const buttonDisabled = useSelector(componentsSelectors.buttonDisabled)
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
          type={buttonType}
          focus={buttonFocus === 'true'}
          active={buttonActive === 'true'}
          disabled={buttonDisabled === 'true'}
        >
          { buttonChildren }
        </Button>
      </div>
      <div className="ButtonBlock__right">
        
        {/* children */}
        <StaffTextPropBlock
          externalClass="ButtonBlock__right-children"
          title="children"
          type={StaffTextPropBlockType.jsx}
          action={componentsActions.buttonChangeChildren}
          text={buttonChildren}
        />
        
        {/* externalClass */}
        <StaffTextPropBlock
          externalClass="ButtonBlock__right-prop-external-class"
          title="externalClass"
          type={StaffTextPropBlockType.string}
          action={componentsActions.buttonChangeExternalClass}
          text={buttonExternalClass}
        />
        
        {/* theme */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-theme"
          title="theme"
          type={StaffValuePropBlockTypes.string}
          properties={Object.values(ButtonProps.themes)}
          propActive={buttonTheme}
          action={componentsActions.buttonChangeTheme}
        />
        
        {/* size */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-size"
          title="size"
          type={StaffValuePropBlockTypes.string}
          properties={Object.values(ButtonProps.sizes)}
          propActive={buttonSize}
          action={componentsActions.buttonChangeSize}
        />
        
        {/* bold */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-bold"
          title="type"
          type={StaffValuePropBlockTypes.string}
          properties={Object.values(ButtonProps.types)}
          propActive={buttonType}
          action={componentsActions.buttonChangeType}
        />
        
        {/* focus */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-focus"
          title="focus"
          type={StaffValuePropBlockTypes.boolean}
          properties={['true', 'false']}
          propActive={buttonFocus}
          action={componentsActions.buttonChangeFocus}
        />

        {/* active */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-active"
          title="active"
          type={StaffValuePropBlockTypes.boolean}
          properties={['true', 'false']}
          propActive={buttonActive}
          action={componentsActions.buttonChangeActive}
        />

        {/* disabled */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-disabled"
          title="disabled"
          type={StaffValuePropBlockTypes.boolean}
          properties={['true', 'false']}
          propActive={buttonDisabled}
          action={componentsActions.buttonChangeDisabled}
        />

        {/* code */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-code-show-hide"
          title="code"
          type={StaffValuePropBlockTypes.code}
          properties={['show', 'hide']}
          propActive={buttonShowHideCode}
          action={componentsActions.buttonShowHideCode}
        />
        <ButtonCode
          externalClass="ButtonBlock__right-code"
          showHideCode={buttonShowHideCode}
          buttonChildren={buttonChildren}
          buttonExternalClass={buttonExternalClass}
          buttonSize={buttonSize}
          buttonTheme={buttonTheme}
          buttonType={buttonType}
          buttonFocus={buttonFocus === 'true'}
          buttonActive={buttonActive === 'true'}
          buttonDisabled={buttonDisabled === 'true'}
        />
      </div>
    </div>
  )
}
