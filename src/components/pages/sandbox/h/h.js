import classNames from 'classnames'
import { useCallback, useState } from 'react'
import { BMemo } from './b'
import { FastMemo } from './fast'
import './h.scss'
import { L } from './l'

export const H = ({
  className
}) => {

  /* count */
  const [count, setCount] = useState(0)
  const addCount = useCallback(() => setCount(count => count + 1), [])
  const delCount = useCallback(() => setCount(count => count - 1), [])

  /* buttons, numbers */
  const [numbers, setNumbers] = useState([5 ,4, 3, 2, 1])
  const addNumber = () => setNumbers(numbers => [numbers[0] + 1, ...numbers])
  const clearNumber = () => setNumbers([5, 4, 3, 2, 1])
  const [visibleNumbers, setVisibleNumbers] = useState(true)
  const changeShowNumbers = () => setVisibleNumbers(visibleNumbers => !visibleNumbers)
  const addButtonDisabled = visibleNumbers === false
  const clearButtonDisabled = numbers.length < 10 || visibleNumbers === false

  /* counts */
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const addCount1 = () => {
    setCount1(count => count + 1)
  }

  const addCount2 = () => {
    setCount2(count => count + 1)
  }

  return (
    <div className={classNames('H', {
      [className]: className
    })}>

      {/* count */}
      <div className="H__count-wrap">
        <div className="H__count">{ count }</div>
        <BMemo addCount={addCount} delCount={delCount} />
      </div>

      <hr />

      {/* buttons */}
      <div className="H__buttons">
        <button
          className="H__buttons-add-number"
          onClick={addNumber}
          disabled={addButtonDisabled}
        >
          Добавить число
        </button>
        <button
          className="H__buttons-clear-number"
          onClick={clearNumber}
          disabled={clearButtonDisabled}
        >
          Очистить список
        </button>
        <button
          className="H__buttons-hide-numbers"
          onClick={changeShowNumbers}
        >
          { visibleNumbers ? 'Hide' : 'Show' } numbers list
        </button>
      </div>
      
      {/* list */}
      {visibleNumbers && (
        <L
          className="H__numbers-list"
          numbers={numbers}
        />
      )}

      <hr />
      <div className="H__counts">
        <div className="H__count-1">
          <button
            onClick={addCount1}
          >
            +
          </button>&nbsp;{ count1 }
        </div>
        <hr />
        <div className="H__count-2">
          <button
            onClick={addCount2}
          >
            +
          </button>&nbsp;{ count2 }{count2 === 5 && ' => five'}
          <FastMemo count={count2} />
        </div>
      </div>
      <hr />
    </div>
  )
}
