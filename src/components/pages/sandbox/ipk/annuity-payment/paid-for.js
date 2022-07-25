import { S } from "./spacer"

export const PaidFor = ({
  data1,
  data2,
  plus1,
  plus2,
  i1,
  i2,
  visiblePlus1,
  visiblePlus2
}) => {
  const ipkData1 = ipkGetData(data1, plus1)
  const ipkData2 = ipkGetData(data2, plus2)
  const разницаДопСумма1 = ipkPrettyNumber(+data1?.переплата - +ipkData1[i1]?.выплаченоПроцентнаяЧасть)
  const разницаДопСумма2 = ipkPrettyNumber(+data2?.переплата - +ipkData2[i2]?.выплаченоПроцентнаяЧасть)
  const оплаченоВыплаченоПроцентнаяЧасть1 = ipkPrettyNumber(ipkData1[i1]?.выплаченоПроцентнаяЧасть)
  const оплаченоВыплаченоПроцентнаяЧасть2 = ipkPrettyNumber(ipkData2[i2]?.выплаченоПроцентнаяЧасть)
  const оплаченоПроцентнаяЧасть1 = ipkPrettyNumber(+ipkData1[i1]?.процентнаяЧасть)
  const оплаченоПроцентнаяЧасть2 = ipkPrettyNumber(+ipkData2[i2]?.процентнаяЧасть)
  const оплаченоВыплаченоОсновнаяЧасть1 = ipkPrettyNumber(ipkData1[i1]?.выплаченоОсновнаяЧасть)
  const оплаченоВыплаченоОсновнаяЧасть2 = ipkPrettyNumber(ipkData2[i2]?.выплаченоОсновнаяЧасть)
  const оплаченоОстаточнаяЧасть1 = ipkPrettyNumber(+ipkData1[i1]?.остаточнаяЧасть)
  const оплаченоОстаточнаяЧасть2 = ipkPrettyNumber(+ipkData2[i2]?.остаточнаяЧасть)
  const оплаченоВыплаченоПроцентнаяЧастьПроценты1 = ipkPrettyNumber(
    ipkData1[i1]?.выплаченоПроцентнаяЧасть * 100
    / (ipkData1[i1]?.выплаченоПроцентнаяЧасть + ipkData1[i1]?.выплаченоОсновнаяЧасть)
  )
  const оплаченоВыплаченоПроцентнаяЧастьПроценты2 = ipkPrettyNumber(
    ipkData2[i2]?.выплаченоПроцентнаяЧасть * 100
    / (ipkData2[i2]?.выплаченоПроцентнаяЧасть + ipkData2[i2]?.выплаченоОсновнаяЧасть)
  )
  const оплаченоВыплаченоОсновнаяЧастьПроценты1 = ipkPrettyNumber(
    ipkData1[i1]?.выплаченоОсновнаяЧасть * 100
    / (ipkData1[i1]?.выплаченоПроцентнаяЧасть + ipkData1[i1]?.выплаченоОсновнаяЧасть)
  )
  const оплаченоВыплаченоОсновнаяЧастьПроценты2 = ipkPrettyNumber(
    ipkData2[i2]?.выплаченоОсновнаяЧасть * 100
    / (ipkData2[i2]?.выплаченоПроцентнаяЧасть + ipkData2[i2]?.выплаченоОсновнаяЧасть)
  )

  return (
    <tr>
      <td>Оплачено</td>
      <td>
        <span className={visiblePlus1 ? 'red' : ''}>
          { оплаченоВыплаченоПроцентнаяЧасть1 }
          { +i1 === (ipkData1.length - 1) && оплаченоПроцентнаяЧасть1 !== '0.00' && (<>
            &nbsp;( { оплаченоПроцентнаяЧасть1 } )
          </>)}
        </span>
        <S />
        { оплаченоВыплаченоОсновнаяЧасть1 }
        { +i1 === (ipkData1.length - 1) && оплаченоОстаточнаяЧасть1 !== '0.00' && (<>
          &nbsp;( { оплаченоОстаточнаяЧасть1 } )
        </>)}

        {+i1 === (ipkData1.length - 1) && разницаДопСумма1 !== '0.00' ? (<>
          <S />
          <span className="blue">
            +{ разницаДопСумма1 }
          </span>
        </>) : (
          <span className="white"></span>
        )}

        <div style={{ margin: '10px 0 0 0' }}>
          <span className="red">
            { i1 > 0 ? оплаченоВыплаченоПроцентнаяЧастьПроценты1 : '0.00' }%
          </span>
          <S />
          <span className="green">
            { i1 > 0 ? оплаченоВыплаченоОсновнаяЧастьПроценты1 : '0.00' }%
          </span>
        </div>
      </td>
      <td>
        <span className={visiblePlus2 ? 'red' : ''}>
          { оплаченоВыплаченоПроцентнаяЧасть2 }
          { +i2 === (ipkData2.length - 1) && оплаченоПроцентнаяЧасть2 !== '0.00' && (<>
            &nbsp;( { оплаченоПроцентнаяЧасть2 } )
          </>)}
        </span>
        <S />
        { оплаченоВыплаченоОсновнаяЧасть2 }
        { +i2 === (ipkData2.length - 1) && оплаченоОстаточнаяЧасть2 !== '0.00' && (<>
          &nbsp;( { оплаченоОстаточнаяЧасть2 } )
        </>)}

        {+i2 === (ipkData2.length - 1) && разницаДопСумма2 !== '0.00' ? (<>
          <S />
          <span className="blue">
            +{ разницаДопСумма2 }
          </span>
        </>) : (
          <span className="white"></span>
        )}

        <div style={{ margin: '10px 0 0 0' }}>
          <span className="red">
            { i2 > 0 ? оплаченоВыплаченоПроцентнаяЧастьПроценты2 : '0.00' }%
          </span>
          <S />
          <span className="green">
            { i2 > 0 ? оплаченоВыплаченоОсновнаяЧастьПроценты2 : '0.00' }%
          </span>
        </div>
      </td>
    </tr>
  )
}
