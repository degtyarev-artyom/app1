import classNames from "classnames"
import { Button, ButtonProps } from "components/common/button/button"
import { useDispatch, useSelector } from "react-redux"
import { actionsCounter } from "redux/components/counter/actions-counter"
import { selectorsCounter } from "redux/components/counter/selectors-counter"
import "./counter.scss"

export const Counter = ({
  externalClass,
}) => {
  const value = useSelector(selectorsCounter.value)
  const dispatch = useDispatch()

  return (
    <div className={classNames('Counter', {
      [externalClass]: externalClass,
    })}>
      <div className="Counter__button-list">

        {/* Increment after second */}
        <Button
          externalClass="Counter__button"
          onClick={() => dispatch(actionsCounter.incrementAsync())}
          theme={ButtonProps.theme.green}
        >
          Increment after second
        </Button>

        {/* Increment */}
        <Button
          externalClass="Counter__button"
          onClick={() => dispatch(actionsCounter.increment())}
          theme={ButtonProps.theme.blue}
        >
          Increment
        </Button>

        {/* Decrement */}
        <Button
          externalClass="Counter__button"
          onClick={() => dispatch(actionsCounter.decrement())}
          theme={ButtonProps.theme.red}
        >
          Decrement
        </Button>
      </div>
      <div className="Counter__value">
        { value }
      </div>
    </div>
  )
}
