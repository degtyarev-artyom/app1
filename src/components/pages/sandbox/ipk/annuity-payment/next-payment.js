import { ipkPrettyNumber } from "../helpers"
import { S } from "./spacer"

export const NextPayment = ({
  ipkData1,
  ipkData2,
  i1,
  i2,
}) => {
  const следПлатежПроцентнаяЧастьПроценты1 = ipkData1[i1]?.процентнаяЧастьПроценты
  const следПлатежПроцентнаяЧастьПроценты2 = ipkData2[i2]?.процентнаяЧастьПроценты
  const следПлатежОсновнаяЧастьПроценты1 = ipkData1[i1]?.основнаяЧастьПроценты
  const следПлатежОсновнаяЧастьПроценты2 = ipkData2[i2]?.основнаяЧастьПроценты
  const следПлатежПроцентнаяЧасть1 = ipkPrettyNumber(ipkData1[i1]?.процентнаяЧасть)
  const следПлатежПроцентнаяЧасть2 = ipkPrettyNumber(ipkData2[i2]?.процентнаяЧасть)
  const следПлатежОсновнаяЧасть1 = ipkPrettyNumber(ipkData1[i1]?.основнаяЧасть)
  const следПлатежОсновнаяЧасть2 = ipkPrettyNumber(ipkData2[i2]?.основнаяЧасть)

  return (
    <tr>
      <td>След. платеж</td>
      <td>
        <span className="red">
          { следПлатежПроцентнаяЧастьПроценты1 }%
        </span>
        <S />
        <span className="green">
          { следПлатежОсновнаяЧастьПроценты1 }%
        </span>
        <div style={{ margin: '10px 0 0 0' }}>
          { следПлатежПроцентнаяЧасть1 }
          <S />
          { следПлатежОсновнаяЧасть1 }
        </div>
      </td>
      <td>
        <span className="red">
          { следПлатежПроцентнаяЧастьПроценты2 }%
        </span>
        <S />
        <span className="green">
          { следПлатежОсновнаяЧастьПроценты2 }%
        </span>
        <div style={{ margin: '10px 0 0 0' }}>
          { следПлатежПроцентнаяЧасть2 }
          <S />
          { следПлатежОсновнаяЧасть2 }
        </div>
      </td>
    </tr>
  )
}
