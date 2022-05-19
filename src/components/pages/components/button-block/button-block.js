import classNames from 'classnames'
import './button-block.scss'
import { componentsSelectors } from 'redux/pages/components/components-selectors'
import { useSelector } from 'react-redux'
import { StaffTextPropBlock, StaffTextPropBlockType } from 'components/staff/staff-text-prop-block/staff-text-prop-block'
import { Button, ButtonProps } from './button/button'
import { componentsActions } from 'redux/pages/components/components-actions'
import { StaffValuePropBlock, StaffValuePropBlockTypes } from 'components/staff/staff-value-prop-block/staff-value-prop-block'
import { ButtonCode } from './button-code/button-code'

export const ButtonBlock = ({
  className,
  ...rest
}) => {
  const buttonChildren = useSelector(componentsSelectors.buttonChildren)
  const buttonClassName = useSelector(componentsSelectors.buttonClassName)
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
        [className]: className
      })}
      {...rest}
    >
      <div className="ButtonBlock__title">Button</div>
      <div className="ButtonBlock__content">
        <div className="ButtonBlock__left">
          <Button
            className="ButtonBlock__left-button"
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
            className="ButtonBlock__right-children"
            title="children"
            type={StaffTextPropBlockType.jsx}
            action={componentsActions.buttonChildren}
            text={buttonChildren}
          />
          
          {/* className */}
          <StaffTextPropBlock
            className="ButtonBlock__right-prop-class-name"
            title="className"
            type={StaffTextPropBlockType.string}
            action={componentsActions.buttonClassName}
            text={buttonClassName}
          />
          
          {/* theme */}
          <StaffValuePropBlock
            className="ButtonBlock__right-prop-theme"
            title="theme"
            type={StaffValuePropBlockTypes.string}
            properties={Object.values(ButtonProps.theme)}
            propActive={buttonTheme}
            action={componentsActions.buttonTheme}
          />
          
          {/* size */}
          <StaffValuePropBlock
            className="ButtonBlock__right-prop-size"
            title="size"
            type={StaffValuePropBlockTypes.string}
            properties={Object.values(ButtonProps.size)}
            propActive={buttonSize}
            action={componentsActions.buttonSize}
          />
          
          {/* bold */}
          <StaffValuePropBlock
            className="ButtonBlock__right-prop-bold"
            title="type"
            type={StaffValuePropBlockTypes.string}
            properties={Object.values(ButtonProps.type)}
            propActive={buttonType}
            action={componentsActions.buttonType}
          />
          
          {/* focus */}
          <StaffValuePropBlock
            className="ButtonBlock__right-prop-focus"
            title="focus"
            type={StaffValuePropBlockTypes.boolean}
            properties={['true', 'false']}
            propActive={buttonFocus}
            action={componentsActions.buttonFocus}
          />

          {/* active */}
          <StaffValuePropBlock
            className="ButtonBlock__right-prop-active"
            title="active"
            type={StaffValuePropBlockTypes.boolean}
            properties={['true', 'false']}
            propActive={buttonActive}
            action={componentsActions.buttonActive}
          />

          {/* disabled */}
          <StaffValuePropBlock
            className="ButtonBlock__right-prop-disabled"
            title="disabled"
            type={StaffValuePropBlockTypes.boolean}
            properties={['true', 'false']}
            propActive={buttonDisabled}
            action={componentsActions.buttonDisabled}
          />

          {/* block */}
          <StaffValuePropBlock
            className="ButtonBlock__right-prop-block"
            title="block"
            type={StaffValuePropBlockTypes.boolean}
            properties={['true', 'false']}
            propActive={buttonBlock}
            action={componentsActions.buttonBlock}
          />

          {/* pending */}
          <StaffValuePropBlock
            className="ButtonBlock__right-prop-pending"
            title="pending"
            type={StaffValuePropBlockTypes.boolean}
            properties={['true', 'false']}
            propActive={buttonPending}
            action={componentsActions.buttonPending}
          />

          {/* code */}
          <StaffValuePropBlock
            className={classNames('ButtonBlock__right-code-show-hide', {
              'ButtonBlock__right-code-show-hide--hide': buttonShowHideCode === 'hide'
            })}
            title="code"
            type={StaffValuePropBlockTypes.code}
            properties={['show', 'hide']}
            propActive={buttonShowHideCode}
            action={componentsActions.buttonShowHideCode}
          />
          <ButtonCode
            className="ButtonBlock__right-code"
            showHideCode={buttonShowHideCode}
            buttonCodeData={{
              buttonChildren,
              buttonClassName: buttonClassName,
              buttonSize,
              buttonTheme,
              buttonType,
              buttonFocus: buttonFocus === 'true',
              buttonActive: buttonActive === 'true',
              buttonDisabled: buttonDisabled === 'true',
              buttonBlock: buttonBlock === 'true',
              buttonPending: buttonPending === 'true'
            }}
          />
        </div>
      </div>
    </div>
  )
}
