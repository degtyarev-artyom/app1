import { calc } from "../helpers"
import { S } from "./spacer"

export const MortgageTermYear = ({
  data1,
  data2,
  setI1,
  setI2,
  setData1,
  setData2
}) => {
  const срокИпотекиЛетШаг = 1
  const срокИпотекиЛетМакс = 30
  const срокИпотекиЛетЗначение1 = data1?.срокИпотекиЛет
  const срокИпотекиЛетЗначение2 = data2?.срокИпотекиЛет
  const срокИпотекиЛетДействие1 = e => {
    calc({ срокИпотекиЛет: +e.target.value }, data1, setData1, 'data1')
    setI1(0)
  }
  const срокИпотекиЛетДействие2 = e => {
    calc({ срокИпотекиЛет: +e.target.value }, data2, setData2, 'data2')
    setI2(0)
  }
  const срокИпотекиМесяцев1 = data1?.срокИпотекиМесяцев
  const срокИпотекиМесяцев2 = data2?.срокИпотекиМесяцев

  return (
    <tr>
      <td>Срок ипотеки</td>
      <td className="range-flex">
        <input
          type="range"
          step={срокИпотекиЛетШаг}
          min={срокИпотекиЛетШаг}
          max={срокИпотекиЛетМакс}
          value={срокИпотекиЛетЗначение1}
          onInput={срокИпотекиЛетДействие1}
        />
        <span>
          { срокИпотекиЛетЗначение1 }
          <S />
          { срокИпотекиМесяцев1 }
        </span>
      </td>
      <td className="range-flex">
        <input
          type="range"
          step={срокИпотекиЛетШаг}
          min={срокИпотекиЛетШаг}
          max={срокИпотекиЛетМакс}
          value={срокИпотекиЛетЗначение2}
          onInput={срокИпотекиЛетДействие2}
        />
        <span>
          { срокИпотекиЛетЗначение2 }
          <S />
          { срокИпотекиМесяцев2 }
        </span>
      </td>
    </tr>
  )
}
