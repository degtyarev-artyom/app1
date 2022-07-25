import { calc, ipkPrettyNumber } from "../helpers"
import { S } from "./spacer"

export const SquareMeter = ({
  data1,
  data2,
  setData1,
  setData2
}) => {
  const квМШаг = 0.1
  const квММакс = 200
  const квММин = 1
  const квМЗначение1 = data1?.квМ
  const квМЗначение2 = data2?.квМ
  const квМДействие = e => {
    calc({ квМ: +e.target.value }, data1, setData1, 'data1')
    calc({ квМ: +e.target.value }, data2, setData2, 'data2')
  }
  const квМСтоимостьКМ1 = ipkPrettyNumber(data1?.стоимостьЖилья / data1?.квМ)
  const квМСтоимостьКМ2 = ipkPrettyNumber(data2?.стоимостьЖилья / data2?.квМ)

  return (
    <tr>
      <td>Кв. м.</td>
      <td className="range-flex">
        <input
          type="range"
          step={квМШаг}
          min={квММин}
          max={квММакс}
          value={квМЗначение1}
          onInput={квМДействие}
        />
        <span className="orange">
          { квМЗначение1 }
        </span>
        <span><S /></span>
        <span className="grey">
          { квМСтоимостьКМ1 }
        </span>
      </td>
      <td className="range-flex">
        <input
          type="range"
          step={квМШаг}
          min={квММин}
          max={квММакс}
          value={квМЗначение2}
          onInput={квМДействие}
        />
        <span className="orange">
          { квМЗначение2 }
        </span>
        <span><S /></span>
        <span className="grey">
          { квМСтоимостьКМ2 }
        </span>
      </td>
    </tr>
  )
}
