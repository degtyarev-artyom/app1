import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import './counter.scss'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { sandboxActions } from 'redux/pages/sandbox/sandbox-actions'
import { sandboxSelectors } from 'redux/pages/sandbox/sandbox-selectors'
import { StaffButton, StaffButtonProps } from 'components/staff/staff-button/staff-button'
import { getTheme } from 'functions/staff-styling-func'

export const Counter = ({
  className,
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const counterValue = useSelector(sandboxSelectors.counterValue)
  const dispatch = useDispatch()

  return (
    <div className={classNames('Counter', {
      [className]: className
    })}>
      <div className="Counter__button-list">
        {/* Increment after second */}
        <StaffButton
          className="Counter__button"
          onClick={() => dispatch(sandboxActions.counterIncrementAsync())}
          theme={getTheme(currentTheme, StaffButtonProps.theme.green)}
        >
          Increment after second
        </StaffButton>

        {/* Increment */}
        <StaffButton
          className="Counter__button"
          onClick={() => dispatch(sandboxActions.counterIncrement())}
          theme={getTheme(currentTheme, StaffButtonProps.theme.blue)}
        >
          Increment
        </StaffButton>

        {/* Decrement */}
        <StaffButton
          className="Counter__button"
          onClick={() => dispatch(sandboxActions.counterDecrement())}
          theme={getTheme(currentTheme, StaffButtonProps.theme.red)}
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
        className="Counter__button-clear"
        onClick={() => dispatch(sandboxActions.counterClear())}
        theme={getTheme(currentTheme, StaffButtonProps.theme.orange)}
      >
        Set zero
      </StaffButton>
    </div>
  )
}
