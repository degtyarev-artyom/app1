import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import './counter.scss'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { sandboxActions } from 'redux/pages/sandbox/sandbox-actions'
import { sandboxSelectors } from 'redux/pages/sandbox/sandbox-selectors'
import { StaffButton, StaffButtonProps } from 'components/staff/staff-button/staff-button'
import { useRef, useState } from 'react'
import { getTheme } from 'styling/staff/staff-styling-functions'

export const Counter = ({
  externalClass,
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const counterValue = useSelector(sandboxSelectors.counterValue)
  const dispatch = useDispatch()

  const [el, setEl] = useState([])
  const listEl = useRef(null)

  // const handleScroll = e => {
  //   console.log('scroll')
  // }

  // listEl.addEventListener('onscroll')

  return (
    <div className={classNames('Counter', {
      [externalClass]: externalClass
    })}>
      <div className="Counter__button-list">
        {/* Increment after second */}
        <StaffButton
          externalClass="Counter__button"
          onClick={() => dispatch(sandboxActions.counterIncrementAsync())}
          theme={getTheme(currentTheme, StaffButtonProps.theme.green)}
        >
          Increment after second
        </StaffButton>

        {/* Increment */}
        <StaffButton
          externalClass="Counter__button"
          onClick={() => dispatch(sandboxActions.counterIncrement())}
          theme={getTheme(currentTheme, StaffButtonProps.theme.blue)}
        >
          Increment
        </StaffButton>

        {/* Decrement */}
        <StaffButton
          externalClass="Counter__button"
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
        externalClass="Counter__button-clear"
        onClick={() => dispatch(sandboxActions.counterClear())}
        theme={getTheme(currentTheme, StaffButtonProps.theme.orange)}
      >
        Set zero
      </StaffButton>

      <div className="Counter__use-ref-wrap">
        <StaffButton
          externalClass="Counter__use-ref-add-el"
          theme={getTheme(currentTheme, StaffButtonProps.theme.green)}
          onClick={() => setEl([el.length + 1, ...el])}
        >
          Add element
        </StaffButton>

        <div className="Counter__use-ref-list" ref={listEl}>
          {el.map(item => (
            <div className="Counter__use-ref-item" key={item}>
              { item }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
