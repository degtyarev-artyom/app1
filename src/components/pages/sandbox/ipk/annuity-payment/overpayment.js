import classNames from "classnames"
import { hsla } from "functions/staff-styling-hsla-func"
import { ipkPrettyNumber } from "../helpers"
import { S } from "./spacer"

export const Overpayment = ({
  data1,
  data2,
}) => {
  const переплатаРазницаЧисло1 = data2?.переплата - data1?.переплата
  const переплатаРазница1 = переплатаРазницаЧисло1 > 0
    ? `+${ipkPrettyNumber(переплатаРазницаЧисло1)}`
    : ipkPrettyNumber(переплатаРазницаЧисло1)
  const переплатаРазницаЧисло2 = data1?.переплата - data2?.переплата
  const переплатаРазница2 = переплатаРазницаЧисло2 > 0
    ? `+${ipkPrettyNumber(переплатаРазницаЧисло2)}`
    : ipkPrettyNumber(переплатаРазницаЧисло2)

  return (
    <tr style={{ backgroundColor: hsla('#ff0062', 20, 10, 15) }}>
      <td>Переплата</td>
      <td>
        <span className="red">
        { ipkPrettyNumber(data1?.переплата) }
        </span>
        <S />
        <span className={classNames({
          orange: переплатаРазницаЧисло2 > 0,
          blue: переплатаРазницаЧисло2 < 0
        })}>
          { переплатаРазница1 }
        </span>
      </td>
      <td>
        <span className="red">
          { ipkPrettyNumber(data2?.переплата) }
        </span>
        <S />
        <span className={classNames({
          blue: переплатаРазницаЧисло2 > 0,
          orange: переплатаРазницаЧисло2 < 0
        })}>
          { переплатаРазница2 }
        </span>
      </td>
    </tr>
  )
}
