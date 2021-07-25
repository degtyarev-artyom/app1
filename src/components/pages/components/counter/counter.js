import classNames from 'classnames'
import { Button, ButtonProps } from 'components/common/button/button'
import { useDispatch, useSelector } from 'react-redux'
import { componentsSelectors } from 'redux/pages/components/components-selectors'
import { componentsActions } from 'redux/pages/components/components-actions'
import './counter.scss'
import { commonSelectors } from 'redux/common/common-selectors'
import { getTheme } from 'styling/themes'

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
          theme={getTheme(currentTheme, ButtonProps.theme.green)}
        >
          Increment after second
        </Button>

        {/* Increment */}
        <Button
          externalClass="Counter__button"
          onClick={() => dispatch(componentsActions.counterIncrement())}
          theme={getTheme(currentTheme, ButtonProps.theme.blue)}
        >
          Increment
        </Button>

        {/* Decrement */}
        <Button
          externalClass="Counter__button"
          onClick={() => dispatch(componentsActions.counterDecrement())}
          theme={getTheme(currentTheme, ButtonProps.theme.red)}
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
        theme={getTheme(currentTheme, ButtonProps.theme.orange)}
      >
        Set zero
      </Button>
    </div>
  )
}
