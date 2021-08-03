import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import './counter.scss'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffGetTheme } from 'styling/js/staff/staff-styling-themes'
import { sandboxActions } from 'redux/pages/sandbox/sandbox-actions'
import { sandboxSelectors } from 'redux/pages/sandbox/sandbox-selectors'
import { StaffButton, StaffButtonProps } from 'components/staff/staff-button/staff-button'

export const Counter = ({
  externalClass,
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const counterValue = useSelector(sandboxSelectors.counterValue)
  const dispatch = useDispatch()

  return (
    <div className={classNames('Counter', {
      [externalClass]: externalClass,
    })}>
      <div className="Counter__button-list">
        {/* Increment after second */}
        <StaffButton
          externalClass="Counter__button"
          onClick={() => dispatch(sandboxActions.counterIncrementAsync())}
          theme={staffGetTheme(currentTheme, StaffButtonProps.theme.green)}
        >
          Increment after second
        </StaffButton>

        {/* Increment */}
        <StaffButton
          externalClass="Counter__button"
          onClick={() => dispatch(sandboxActions.counterIncrement())}
          theme={staffGetTheme(currentTheme, StaffButtonProps.theme.blue)}
        >
          Increment
        </StaffButton>

        {/* Decrement */}
        <StaffButton
          externalClass="Counter__button"
          onClick={() => dispatch(sandboxActions.counterDecrement())}
          theme={staffGetTheme(currentTheme, StaffButtonProps.theme.red)}
        >
          Decrement
        </StaffButton>
      </div>

      {/* value */}
      <div className="Counter__value">
        { counterValue }
      </div>

      {/* clear-button */}
      <StaffButton
        externalClass="Counter__button-clear"
        onClick={() => dispatch(sandboxActions.counterClear())}
        theme={staffGetTheme(currentTheme, StaffButtonProps.theme.orange)}
      >
        Set zero
      </StaffButton>
    </div>
  )
}
