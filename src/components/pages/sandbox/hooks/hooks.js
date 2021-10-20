import classNames from 'classnames'
import { Button, ButtonProps } from 'components/pages/components/button-block/button/button'
import { useCallback, useEffect, useRef, useState } from 'react'
// import { BigCalc } from './hooks-other'
import './hooks.scss'

const Hooks = ({
  externalClass,
}) => {
  const [nums, setNums] = useState([7, 6, 5, 4, 3, 2, 1])
  const addNumber = () => setNums(prev => [prev.length + 1, ...prev])

  /* scroll */
  const listRef = useRef()
  const listRefUnmount = useRef()
  const [activeScroll, setActiveScroll] = useState(false)
  const [countScroll, setCountScroll] = useState(0)

  /* scroll =>  handleScroll */
  const handleScroll = useCallback(() => {
    setCountScroll(prev => ++prev)
  }, [])

  /* scroll => unmount */
  useEffect(() => {
    listRefUnmount.current = listRef.current
    return () => {
      listRefUnmount.current.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  /* scroll => addScroll*/
  const addScroll= () => {
    listRef.current.addEventListener('scroll', handleScroll)
    setActiveScroll(true)
  }

  /* scroll => removeScroll */
  const removeScroll = () => {
    listRef.current.removeEventListener('scroll', handleScroll)
    setActiveScroll(false)
  }

  /* start | stop */
  const timer = useRef()
  const [timerActive, setTimerActive] = useState(false)

  /* start | stop => unmount */
  useEffect(() => () => clearInterval(timer.current), [])

  /* start | stop => start func */
  const start = () => {
    clearInterval(timer.current)
    timer.current = setInterval(addNumber, 100)
    setTimerActive(true)
  }

  /* start | stop => stop func */
  const stop = () => {
    clearInterval(timer.current)
    setTimerActive(false)
  }

  /* bigCalc */
  // const [countBigCalc, setCountBigCalc] = useState(1)
  // const changeCountBigCalc = () => setCountBigCalc(prev => ++prev)

  return (
    <div className={classNames('Hooks', {
      [externalClass]: externalClass
    })}>
      <div className="Hooks__wrap">
        <div className="Hooks__block">

          {/* button wrap */}
          <div className="Hooks__button-wrap">

            {/* button => Новое число */}
            <Button
              externalClass="Hooks__button"
              onClick={addNumber}
              theme={ButtonProps.theme.blue}
              active
            >
              Новое число
            </Button>

            {/* button => Добавить скролл */}
            <Button
              externalClass="Hooks__button"
              theme={ButtonProps.theme.green}
              onClick={addScroll}
              disabled={activeScroll}
            >
              Добавить скролл
            </Button>

            {/* button => Убрать скролл */}
            <Button
              externalClass="Hooks__button"
              theme={ButtonProps.theme.red}
              onClick={removeScroll}
              disabled={!activeScroll}
            >
              Убрать скролл
            </Button>

            {/* button => start */}
            <Button
              externalClass="Hooks__button"
              theme={ButtonProps.theme.purple}
              onClick={start}
              disabled={timerActive}
            >
              start
            </Button>

            {/* button => stop */}
            <Button
              externalClass="Hooks__button"
              theme={ButtonProps.theme.orange}
              onClick={stop}
              disabled={!timerActive}
            >
              stop
            </Button>

            {/* button => countBigCalc */}
            {/* <Button
              externalClass="Hooks__button"
              theme={ButtonProps.theme.greyRed}
              onClick={changeCountBigCalc}
            >
              countBigCalc = <BigCalc count={countBigCalc} />
            </Button> */}
          </div>

          {/* list */}
          <div
            className="Hooks__list"
            ref={listRef}
          >
            {nums.map(num => (
              <div className={classNames('Hooks__item', {
                'Hooks__item--active': activeScroll
              })} key={num}>
                { num }
              </div>
            ))}
          </div>

          {/* count scroll */}
          <div className={classNames('Hooks__count-scroll', {
            'Hooks__count-scroll--active': activeScroll 
          })}>
            { countScroll }
          </div>

        </div>
      </div>
    </div>
  )
}

export { Hooks }
