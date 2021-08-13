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
  const buttonBlock = useSelector(componentsSelectors.buttonBlock)
  const buttonPending = useSelector(componentsSelectors.buttonPending)
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
          block={buttonBlock === 'true'}
          pending={buttonPending === 'true'}
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
          action={componentsActions.buttonChildren}
          text={buttonChildren}
        />
        
        {/* externalClass */}
        <StaffTextPropBlock
          externalClass="ButtonBlock__right-prop-external-class"
          title="externalClass"
          type={StaffTextPropBlockType.string}
          action={componentsActions.buttonExternalClass}
          text={buttonExternalClass}
        />
        
        {/* theme */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-theme"
          title="theme"
          type={StaffValuePropBlockTypes.string}
          properties={Object.values(ButtonProps.themes)}
          propActive={buttonTheme}
          action={componentsActions.buttonTheme}
        />
        
        {/* size */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-size"
          title="size"
          type={StaffValuePropBlockTypes.string}
          properties={Object.values(ButtonProps.sizes)}
          propActive={buttonSize}
          action={componentsActions.buttonSize}
        />
        
        {/* bold */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-bold"
          title="type"
          type={StaffValuePropBlockTypes.string}
          properties={Object.values(ButtonProps.types)}
          propActive={buttonType}
          action={componentsActions.buttonType}
        />
        
        {/* focus */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-focus"
          title="focus"
          type={StaffValuePropBlockTypes.boolean}
          properties={['true', 'false']}
          propActive={buttonFocus}
          action={componentsActions.buttonFocus}
        />

        {/* active */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-active"
          title="active"
          type={StaffValuePropBlockTypes.boolean}
          properties={['true', 'false']}
          propActive={buttonActive}
          action={componentsActions.buttonActive}
        />

        {/* disabled */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-disabled"
          title="disabled"
          type={StaffValuePropBlockTypes.boolean}
          properties={['true', 'false']}
          propActive={buttonDisabled}
          action={componentsActions.buttonDisabled}
        />

        {/* block */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-block"
          title="block"
          type={StaffValuePropBlockTypes.boolean}
          properties={['true', 'false']}
          propActive={buttonBlock}
          action={componentsActions.buttonBlock}
        />

        {/* pending */}
        <StaffValuePropBlock
          externalClass="ButtonBlock__right-prop-pending"
          title="pending"
          type={StaffValuePropBlockTypes.boolean}
          properties={['true', 'false']}
          propActive={buttonPending}
          action={componentsActions.buttonPending}
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
          buttonBlock={buttonBlock === 'true'}
          buttonPending={buttonPending === 'true'}
        />
      </div>
    </div>
  )
}
