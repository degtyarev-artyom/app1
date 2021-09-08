import { memo, useMemo } from "react"

const BigCalc = ({
  count
}) => {
  const result = useMemo(() => {
    let i = 0
    while (i < 500000000) i++
    return count
  }, [count])

  return <>{ result }</>
}

const BigCalcMemo = memo(
  BigCalc,
  (prev, { count }) => count % 5 !== 0
)

export { BigCalcMemo as BigCalc }
