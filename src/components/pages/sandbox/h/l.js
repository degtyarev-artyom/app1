import classNames from 'classnames'
import { useCallback, useEffect, useRef, useState } from 'react'
import './l.scss';

export const L = ({
  className,
  numbers
}) => {

  const LRef = useRef(null)
  const [scroll, setScroll] = useState(false)
  const [scrollCount, setScrollCount] = useState(0)
  const LHandleScroll = useCallback(() => setScrollCount(count => count + 1), [])
  const addScroll = () => {
    LRef.current.addEventListener('scroll', LHandleScroll)
    setScroll(true)
  }
  const removeScroll = () => {
    LRef.current.removeEventListener('scroll', LHandleScroll)
    setScroll(false)
  }

  /* eslint-disable */
  useEffect(() => {
    const LEl = LRef.current
    return () => LEl.removeEventListener('scroll', LHandleScroll)
  }, [])
  /* eslint-enable */

  return (
    <>
      {/* L => buttons */}
      <div className="L__buttons">
        
        <button
          className="L__buttons-add-scroll"
          onClick={addScroll}
          disabled={scroll}
        >
          Добавить скролл
        </button>

        <div className={classNames('L__buttons-count-scroll', {
          /* eslint-disable */
          ['L__buttons-count-scroll--green']: scroll,
          ['L__buttons-count-scroll--red']: !scroll
          /* eslint-enable */
        })}>
          { scrollCount }
        </div>

        <button
          className="L__buttons-remove-scroll"
          onClick={removeScroll}
          disabled={!scroll}
        >
          Убрать скролл
        </button>
      </div>

      {/* L => numbers */}
      <div
        className={classNames('L', {
          [className]: className
        })}
        ref={LRef}
      >
        {!!numbers.length && numbers.map((item, i) => {
          return (
            <div className="L__item" key={i}>
              { item }
            </div>
          )
        })}
      </div>
    </>
  )
}
