import classNames from 'classnames'
import { memo, useMemo } from 'react';

export const Fast = ({
  className,
  count
}) => {

  console.log(`render Fast (count = ${count})`)

  const i = useMemo(() => {
    let i = 0;
    while (i < 500000000) i++
    return i
  /* eslint-disable */
  }, [count])
  /* eslint-enable */

  return (
    <div className={classNames('Fast', {
      [className]: className
    })}>
      Fast ({ count }), i = { i }
    </div>
  )
}

const rerender = (prevProps, nextProps) => nextProps.count === 5 ? false : true

export const FastMemo = memo(Fast, rerender)
