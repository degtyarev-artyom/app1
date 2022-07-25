import classNames from "classnames"
import { hsla } from "functions/staff-styling-hsla-func"

export const MonthlyPayment = ({
  data1,
  data2,
}) => {
  const ежемесячныйПлатежРазницаЧисло1 = data2?.ежемесячныйПлатеж - data1?.ежемесячныйПлатеж
  const ежемесячныйПлатежРазница1 = ежемесячныйПлатежРазницаЧисло1 > 0
    ? `+${ipkPrettyNumber(ежемесячныйПлатежРазницаЧисло1)}`
    : ipkPrettyNumber(ежемесячныйПлатежРазницаЧисло1)
  const ежемесячныйПлатежРазницаЧисло2 = data1?.ежемесячныйПлатеж - data2?.ежемесячныйПлатеж
  const ежемесячныйПлатежРазница2 = ежемесячныйПлатежРазницаЧисло2 > 0
    ? `+${ipkPrettyNumber(ежемесячныйПлатежРазницаЧисло2)}`
    : ipkPrettyNumber(ежемесячныйПлатежРазницаЧисло2)

  return (
    <tr style={{ backgroundColor: hsla('#008cff', 20, 10, 15) }}>
      <td>Ежемесячный платеж</td>
      <td>
        <span className={classNames('grey', {
          orange: ежемесячныйПлатежРазницаЧисло2 > 0,
          blue: ежемесячныйПлатежРазницаЧисло2 < 0
        })}>
          { ipkPrettyNumber(data1?.ежемесячныйПлатеж) }
          &nbsp;( { ежемесячныйПлатежРазница1 } )
        </span>
      </td>
      <td>
        <span className={classNames('td grey', {
          blue: ежемесячныйПлатежРазницаЧисло2 > 0,
          orange: ежемесячныйПлатежРазницаЧисло2 < 0
        })}>
          { ipkPrettyNumber(data2?.ежемесячныйПлатеж) }
          &nbsp;( { ежемесячныйПлатежРазница2 } )
        </span>
      </td>
    </tr>
  )
}
