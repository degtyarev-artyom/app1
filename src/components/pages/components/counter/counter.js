import classNames from 'classnames'
import { Button, ButtonProps } from 'components/common/button/button'
import { useDispatch, useSelector } from 'react-redux'
import { componentsSelectors } from 'redux/pages/components/components-selectors'
import { componentsActions } from 'redux/pages/components/components-actions'
import './counter.scss'
import { commonSelectors } from 'redux/common/common-selectors'

export const Counter = ({
  externalClass,
}) => {
  const currentTheme = useSelector(commonSelectors.currentTheme)
  const counterValue = useSelector(componentsSelectors.counterValue)
  const dispatch = useDispatch()

  return (
    <div className={classNames('Counter', {
      [externalClass]: externalClass,
    })}>
      <div className="Counter__button-list">
        {/* Increment after second */}
        <Button
          externalClass="Counter__button"
          onClick={() => dispatch(componentsActions.counterIncrementAsync())}
          theme={currentTheme === 'default' ? ButtonProps.theme.green : currentTheme}
        >
          Increment after second
        </Button>

        {/* Increment */}
        <Button
          externalClass="Counter__button"
          onClick={() => dispatch(componentsActions.counterIncrement())}
          theme={currentTheme === 'default' ? ButtonProps.theme.blue : currentTheme}
        >
          Increment
        </Button>

        {/* Decrement */}
        <Button
          externalClass="Counter__button"
          onClick={() => dispatch(componentsActions.counterDecrement())}
          theme={currentTheme === 'default' ? ButtonProps.theme.red : currentTheme}
        >
          Decrement
        </Button>
      </div>

      {/* value */}
      <div className="Counter__value">
        { counterValue }
      </div>

      {/* clear-button */}
      <Button
        externalClass="Counter__button-clear"
        onClick={() => dispatch(componentsActions.counterClear())}
        theme={currentTheme === 'default' ? ButtonProps.theme.purple : currentTheme}
      >
        Set zero
      </Button>
    </div>
  )
}
