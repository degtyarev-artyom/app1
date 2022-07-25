import { calc } from "../helpers"

export const CostHouse = ({
  data1,
  data2,
  setI1,
  setI2,
  setData1,
  setData2
}) => {
  const стоимостьЖильяМакс = 20000000
  const стоимостьЖильяШаг = 100000
  const стоимостьЖильяМин1 = Math.floor((+data1?.первоначальныйВзнос + стоимостьЖильяШаг) / стоимостьЖильяШаг) * стоимостьЖильяШаг
  const стоимостьЖильяМин2 = Math.floor((+data2?.первоначальныйВзнос + стоимостьЖильяШаг) / стоимостьЖильяШаг) * стоимостьЖильяШаг
  const стоимостьЖильяЗначение1 = +data1?.стоимостьЖилья
  const стоимостьЖильяЗначение2 = +data2?.стоимостьЖилья
  const стоимостьЖильяДействие1 = e => {
    calc({ стоимостьЖилья: +e.target.value }, data1, setData1, 'data1')
    setI1(0)
  }
  const стоимостьЖильяДействие2 = e => {
    calc({ стоимостьЖилья: +e.target.value }, data2, setData2, 'data2')
    setI2(0)
  }

  return (
    <tr>
      <td>Стоимость жилья</td>
      <td className="range-flex">
        <input
          type="range"
          step={стоимостьЖильяШаг}
          min={стоимостьЖильяМин1}
          max={стоимостьЖильяМакс}
          value={стоимостьЖильяЗначение1}
          onInput={стоимостьЖильяДействие1}
        />
        <span className="purple">{ ipkPrettyNumber(data1?.стоимостьЖилья, true) }</span>
      </td>
      <td className="range-flex">
        <input
          type="range"
          step={стоимостьЖильяШаг}
          min={стоимостьЖильяМин2}
          max={стоимостьЖильяМакс}
          value={стоимостьЖильяЗначение2}
          onInput={стоимостьЖильяДействие2}
        />
        <span className="purple">{ ipkPrettyNumber(data2?.стоимостьЖилья, true) }</span>
      </td>
    </tr>
  )
}
