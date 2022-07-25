import classNames from "classnames"
import { S } from "./spacer"

export const PaymentNumber = ({
  data1,
  data2,
  setI1,
  setI2,
  plus1,
  plus2,
  setPlus1,
  setPlus2,
  visiblePlus1,
  visiblePlus2,
  setVisiblePlus1,
  setVisiblePlus2,
  i1,
  i2,
}) => {
  const ipkData1 = ipkGetData(data1, plus1)
  const ipkData2 = ipkGetData(data2, plus2)
  const номерПлатежаШаг = 1
  const номерПлатежаМин = 0
  const номерПлатежаМакс1 = ipkData1.length - 1
  const номерПлатежаМакс2 = ipkData2.length - 1
  const номерПлатежаДействие1 = e => setI1(+e.target.value)
  const номерПлатежаДействие2 = e => setI2(+e.target.value)
  const номерПлатежаПлюсЧекДействие1 = () => {
    setVisiblePlus1(!visiblePlus1)
    setPlus1(0)
    setI1(0)
  }
  const номерПлатежаПлюсЧекДействие2 = () => {
    setVisiblePlus2(!visiblePlus2)
    setPlus2(0)
    setI2(0)
  }
  const номерПлатежаПлюсМин = 0
  const номерПлатежаПлюсШаг = 1000
  const остатокЕжемесячныйПлатеж = (value, ежемесячныйПлатеж) => {
    if (value < 0) {
      return 0
    }
    const целаяЧасть = Math.floor(ежемесячныйПлатеж % 1000)
    const дробнаяЧасть = Math.round((ежемесячныйПлатеж % 1) * 100) / 100
    return value + (1000 - (целаяЧасть + дробнаяЧасть))
  }
  const номерПлатежаПлюсДействие1 = e => {
    let value = +e.target.value;
    if (value - plus1 < 0) {
      value -= 1000
    } else {
      value = (value === 1000 && plus1 === 0) ? 0 : value
    }
    setPlus1(остатокЕжемесячныйПлатеж(value, +data1.ежемесячныйПлатеж))
    setI1(0)
  }
  const номерПлатежаПлюсДействие2 = e => {
    let value = +e.target.value;
    if (value - plus2 < 0) {
      value -= 1000
    } else {
      value = (value === 1000 && plus2 === 0) ? 0 : value
    }
    setPlus2(остатокЕжемесячныйПлатеж(value, +data2.ежемесячныйПлатеж))
    setI2(0)
  }
  const номерПлатежаПроцент1 = (i1 * 100 / (ipkData1.length - 1)).toFixed(2)
  const номерПлатежаПроцент2 = (i2 * 100 / (ipkData2.length - 1)).toFixed(2)
  const номерПлатежаЛет1 = Math.floor(i1 / 12)
  const номерПлатежаЛет2 = Math.floor(i2 / 12)
  const номерПлатежаМесяцев1 = i1 % 12
  const номерПлатежаМесяцев2 = i2 % 12

  return (
    <tr>
      <td>Номер платежа</td>
      <td className="range-flex">
        <input
          type="range"
          step={номерПлатежаШаг}
          value={i1}
          min={номерПлатежаМин}
          max={номерПлатежаМакс1}
          onInput={номерПлатежаДействие1}
        />
        <span>{ i1 }</span>
        
        {/* plus 1 */}
        <input
          className={classNames('plus-checkbox', {
            false: !visiblePlus1
          })}
          type="checkbox"
          checked={visiblePlus1}
          onChange={номерПлатежаПлюсЧекДействие1}
        />
        {visiblePlus1 && <input
          className="plus-number"
          type="number"
          min={номерПлатежаПлюсМин}
          value={plus1}
          step={номерПлатежаПлюсШаг}
          onInput={номерПлатежаПлюсДействие1}
        />}
        {visiblePlus1 && (
          <span className="white">
            { ipkPrettyNumber(+plus1 + +data1?.ежемесячныйПлатеж) }
          </span>
        )}

        <br />
        { номерПлатежаПроцент1 }%
        { (!!номерПлатежаЛет1 || !!номерПлатежаМесяцев1) && <S /> }
        { !!номерПлатежаЛет1 && `лет: ${номерПлатежаЛет1}` }
        { !!номерПлатежаЛет1 && !!номерПлатежаМесяцев1 && <S /> }
        { !!номерПлатежаМесяцев1 && `месяцев: ${номерПлатежаМесяцев1}` }
      </td>
      <td className="range-flex">
        <input
          type="range"
          step={номерПлатежаШаг}
          value={i2}
          min={номерПлатежаМин}
          max={номерПлатежаМакс2}
          onInput={номерПлатежаДействие2}
        />
        <span>{ i2 }</span>

        {/* plus 2 */}
        <input
          className={classNames('plus-checkbox', {
            false: !visiblePlus2
          })}
          type="checkbox"
          checked={visiblePlus2}
          onChange={номерПлатежаПлюсЧекДействие2}
        />
        {visiblePlus2 && <input
          className="plus-number"
          type="number"
          min={номерПлатежаПлюсМин}
          value={plus2}
          step={номерПлатежаПлюсШаг}
          onInput={номерПлатежаПлюсДействие2}
        />}
        {visiblePlus2 && (
          <span className="white">
            { ipkPrettyNumber(+plus2 + +data2?.ежемесячныйПлатеж) }
          </span>
        )}

        <br />
        { номерПлатежаПроцент2 }%
        { (!!номерПлатежаЛет2 || !!номерПлатежаМесяцев2) && <S /> }
        { !!номерПлатежаЛет2 && `лет: ${номерПлатежаЛет2}` }
        { !!номерПлатежаЛет2 && !!номерПлатежаМесяцев2 && <S /> }
        { !!номерПлатежаМесяцев2 && `месяцев: ${номерПлатежаМесяцев2}` }
      </td>
    </tr>
  )
}
