import classNames from 'classnames'
import { getTheme } from 'functions/staff-styling-func'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import { ipkGetData, ipkPrettyNumber } from './ipk-functions'
import { staticStyles } from './ipk-styles'
import './ipk.scss'

export const IPK = ({
  className,
  ...rest
}) => {

  const S = () => <>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</>
  const B = () => <tr className="tr-br">
    <td></td>
    <td></td>
    <td></td>
  </tr>

  const максимальнаяСтоимостьЖилья = 20000000
  const шагСтоимостиЖилья = 100000
  const шагПервоначальногоВзноса = 100000
  const шагСрокИпотекиЛет = 1
  const шагПроцентнаяСтавкаГодовых = 0.1

  const [data1, setData1] = useState(() => {
    const dataLS1 = localStorage.getItem('data1')
    return dataLS1
      ? JSON.parse(dataLS1)
      : {
        стоимостьЖилья: 10000000,
        первоначальныйВзнос: 3000000,
        срокИпотекиЛет: 20,
        процентнаяСтавкаГодовых: 9.3,
        квМ: 70
      } 
  })

  const [data2, setData2] = useState(() => {
    const dataLS2 = localStorage.getItem('data2')
    return dataLS2
      ? JSON.parse(dataLS2)
      : {
        стоимостьЖилья: 10000000,
        первоначальныйВзнос: 3000000,
        срокИпотекиЛет: 20,
        процентнаяСтавкаГодовых: 9.3,
        квМ: 70,
      }
  })

  const calc = ({
    стоимостьЖилья,
    первоначальныйВзнос,
    срокИпотекиЛет,
    процентнаяСтавкаГодовых,
    квМ,
  }, data, setData, dataLS) => {

    стоимостьЖилья = стоимостьЖилья ?? data.стоимостьЖилья
    первоначальныйВзнос = первоначальныйВзнос ?? data.первоначальныйВзнос
    срокИпотекиЛет = срокИпотекиЛет ?? data.срокИпотекиЛет
    процентнаяСтавкаГодовых = процентнаяСтавкаГодовых ?? data.процентнаяСтавкаГодовых
    квМ = квМ ?? data.квМ

    const суммаКредита = стоимостьЖилья - первоначальныйВзнос
    const срокИпотекиМесяцев = срокИпотекиЛет * 12
    const ежемесячнаяСтавка = процентнаяСтавкаГодовых / 12 / 100
    const общаяСтавка = Math.pow((1 + ежемесячнаяСтавка), срокИпотекиМесяцев)
    const ежемесячныйПлатеж = суммаКредита * ежемесячнаяСтавка * общаяСтавка / (общаяСтавка - 1)
    const переплата = ежемесячныйПлатеж * срокИпотекиМесяцев - суммаКредита

    const calcData = {
      стоимостьЖилья,
      первоначальныйВзнос,
      суммаКредита,
      срокИпотекиЛет,
      срокИпотекиМесяцев,
      процентнаяСтавкаГодовых,
      квМ,
      ежемесячнаяСтавка,
      общаяСтавка,
      ежемесячныйПлатеж,
      переплата
    }

    localStorage.setItem(dataLS, JSON.stringify(calcData))
    setData(calcData)
  }

  /* eslint-disable */
  useMemo(() => {
    calc({}, data1, setData1, 'data1')
    calc({}, data2, setData2, 'data2')
  }, [])
  /* eslint-enable */

  const ежемесячныйПлатежРазницаЧисло1 = data2?.ежемесячныйПлатеж - data1?.ежемесячныйПлатеж
  const ежемесячныйПлатежРазница1 = ежемесячныйПлатежРазницаЧисло1 > 0
    ? `+${ipkPrettyNumber(ежемесячныйПлатежРазницаЧисло1)}`
    : ipkPrettyNumber(ежемесячныйПлатежРазницаЧисло1)

  const ежемесячныйПлатежРазницаЧисло2 = data1?.ежемесячныйПлатеж - data2?.ежемесячныйПлатеж
  const ежемесячныйПлатежРазница2 = ежемесячныйПлатежРазницаЧисло2 > 0
    ? `+${ipkPrettyNumber(ежемесячныйПлатежРазницаЧисло2)}`
    : ipkPrettyNumber(ежемесячныйПлатежРазницаЧисло2)

  const переплатаРазницаЧисло1 = data2?.переплата - data1?.переплата
  const переплатаРазница1 = переплатаРазницаЧисло1 > 0
    ? `+${ipkPrettyNumber(переплатаРазницаЧисло1)}`
    : ipkPrettyNumber(переплатаРазницаЧисло1)
  
  const переплатаРазницаЧисло2 = data1?.переплата - data2?.переплата
  const переплатаРазница2 = переплатаРазницаЧисло2 > 0
    ? `+${ipkPrettyNumber(переплатаРазницаЧисло2)}`
    : ipkPrettyNumber(переплатаРазницаЧисло2)

  /* платежи */

  const [visiblePlus1, setVisiblePlus1] = useState(false)
  const [visiblePlus2, setVisiblePlus2] = useState(false)
  const [plus1, setPlus1] = useState(0)
  const [plus2, setPlus2] = useState(0)

  const ipkData1 = ipkGetData(data1, plus1)
  const ipkData2 = ipkGetData(data2, plus2)

  const [i1, setI1] = useState(0)
  const [i2, setI2] = useState(0)

  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = getTheme(currentTheme, staffThemes.orange)

  const шагКвМ = 0.1
  const максКвМ = 150

  return (
    <div
      className={classNames('IPK', {
        [className]: className,
        [`theme-${theme}`]: theme
      })}
      {...rest}
    >
      <div
        className="IPK__title"
        onClick={() => {
          calc({
            стоимостьЖилья: 10000000,
            первоначальныйВзнос: 3000000,
            срокИпотекиЛет: 20,
            процентнаяСтавкаГодовых: 9.3,
            квМ: 70,
          }, data1, setData1, 'data1')
          calc({
            стоимостьЖилья: 10000000,
            первоначальныйВзнос: 3000000,
            срокИпотекиЛет: 20,
            процентнаяСтавкаГодовых: 9.3,
            квМ: 70,
          }, data2, setData2, 'data2')
        }}
      >
        Аннуитетные платежи
      </div>
      <table>
      <tbody>

        {/* Стоимость жилья */}
        <tr>
          <td>Стоимость жилья</td>
          <td className="range-flex">
            <input
              type="range"
              step={шагСтоимостиЖилья}
              min={+data1?.первоначальныйВзнос + шагСтоимостиЖилья}
              max={максимальнаяСтоимостьЖилья}
              value={data1?.стоимостьЖилья}
              onInput={e => {
                calc({ стоимостьЖилья: +e.target.value }, data1, setData1, 'data1')
                calc({ стоимостьЖилья: +e.target.value }, data2, setData2, 'data2')
              }}
            />
            <span className="purple">{ ipkPrettyNumber(data1?.стоимостьЖилья, true) }</span>
          </td>
          <td className="range-flex">
            <input
              type="range"
              step={шагСтоимостиЖилья}
              min={+data2?.первоначальныйВзнос + шагСтоимостиЖилья}
              max={максимальнаяСтоимостьЖилья}
              value={data2?.стоимостьЖилья}
              onInput={e => {
                calc({ стоимостьЖилья: +e.target.value }, data2, setData2, 'data2')
                calc({ стоимостьЖилья: +e.target.value }, data1, setData1, 'data1')
              }}
            />
            <span className="purple">{ ipkPrettyNumber(data2?.стоимостьЖилья, true) }</span>
          </td>
        </tr>

        {/* Первоначальный взнос */}
        <tr>
          <td>Первоначальный взнос</td>
          <td className="range-flex">
            <input
              type="range"
              step={шагПервоначальногоВзноса}
              min={шагПервоначальногоВзноса}
              max={+data1?.стоимостьЖилья - шагПервоначальногоВзноса}
              value={data1?.первоначальныйВзнос}
              onInput={e => {
                calc({ первоначальныйВзнос: +e.target.value }, data1, setData1, 'data1')
                calc({ первоначальныйВзнос: +e.target.value }, data2, setData2, 'data2')
              }}
            />
            <span className="purple">
              { ipkPrettyNumber(data1?.первоначальныйВзнос, true) }
            </span>
            <span>
              <S />
            </span>
            <span className="yellow">
              { ipkPrettyNumber(data1?.суммаКредита, true) }
            </span>
          </td>
          <td className="range-flex">
            <input
              type="range"
              step={шагПервоначальногоВзноса}
              min={шагПервоначальногоВзноса}
              max={+data2?.стоимостьЖилья - шагПервоначальногоВзноса}
              value={data2?.первоначальныйВзнос}
              onInput={e => {
                calc({ первоначальныйВзнос: +e.target.value }, data2, setData2, 'data2')
                calc({ первоначальныйВзнос: +e.target.value }, data1, setData1, 'data1')
              }}
            />
            <span className="purple">
              { ipkPrettyNumber(data2?.первоначальныйВзнос, true) }
            </span>
            <span>
              <S />
            </span>
            <span className="yellow">
              { ipkPrettyNumber(data2?.суммаКредита, true) }
            </span>
          </td>
        </tr>

        {/* Кв. м. */}
        <tr>
          <td>Кв. м.</td>
          <td className="range-flex">
            <input
              type="range"
              step={шагКвМ}
              min={1}
              max={максКвМ}
              value={data1?.квМ}
              onInput={e => {
                calc({ квМ: +e.target.value }, data1, setData1, 'data1')
                calc({ квМ: +e.target.value }, data2, setData2, 'data2')
              }}
            />
            <span className="orange">{ data1?.квМ }</span>
            <span><S /></span>
            <span className="grey">{ ipkPrettyNumber(data1?.стоимостьЖилья / data1?.квМ) }</span>
          </td>
          <td className="range-flex">
            <input
              type="range"
              step={шагКвМ}
              min={1}
              max={максКвМ}
              value={data2?.квМ}
              onInput={e => {
                calc({ квМ: +e.target.value }, data1, setData1, 'data1')
                calc({ квМ: +e.target.value }, data2, setData2, 'data2')
              }}
            />
            <span className="orange">{ data2?.квМ }</span>
            <span><S /></span>
            <span className="grey">{ ipkPrettyNumber(data2?.стоимостьЖилья / data2?.квМ) }</span>
          </td>
        </tr>

        {/* Срок ипотеки ( лет | месяцев ) */}
        <tr>
          <td>Срок ипотеки ( лет | месяцев )</td>
          <td className="range-flex">
            <input
              type="range"
              step={шагСрокИпотекиЛет}
              min={шагСрокИпотекиЛет}
              max={30}
              value={data1?.срокИпотекиЛет}
              onInput={e => {
                calc({ срокИпотекиЛет: +e.target.value }, data1, setData1, 'data1')
                setI1(0)
              }}
            />
            <span>
              { data1?.срокИпотекиЛет }
              <S />
              { data1?.срокИпотекиМесяцев }
            </span>
          </td>
          <td className="range-flex">
            <input
              type="range"
              step={шагСрокИпотекиЛет}
              min={шагСрокИпотекиЛет}
              max={30}
              value={data2?.срокИпотекиЛет}
              onInput={e => {
                calc({ срокИпотекиЛет: +e.target.value }, data2, setData2, 'data2')
                setI2(0)
              }}
            />
            <span>
              { data2?.срокИпотекиЛет }
              <S />
              { data2?.срокИпотекиМесяцев }
            </span>
          </td>
        </tr>

        {/* Процентная ставка годовых */}
        <tr>
          <td>Процентная ставка годовых</td>
          <td className="range-flex">
            <input
              type="range"
              step={шагПроцентнаяСтавкаГодовых}
              min={шагПроцентнаяСтавкаГодовых}
              max={15}
              value={data1?.процентнаяСтавкаГодовых}
              onInput={e => {
                calc({ процентнаяСтавкаГодовых: +e.target.value }, data1, setData1, 'data1')
                setI1(0)
              }}
            />
            <span>
              { data1?.процентнаяСтавкаГодовых }
            </span>
          </td>
          <td className="range-flex">
            <input
              type="range"
              step={шагПроцентнаяСтавкаГодовых}
              min={шагПроцентнаяСтавкаГодовых}
              max={15}
              value={data2?.процентнаяСтавкаГодовых}
              onInput={e => {
                calc({ процентнаяСтавкаГодовых: +e.target.value }, data2, setData2, 'data2')
                setI1(0)
              }}
            />
            <span>
              { data2?.процентнаяСтавкаГодовых }
            </span>
          </td>
        </tr>

        {/* br */}
        <B />

        <tr>
          <td>Оплачено</td>
          <td>
            { ipkPrettyNumber((ipkData1[i1]?.выплаченоПроцентнаяЧасть)) }
            { +i1 === (ipkData1.length - 1) && ipkPrettyNumber(+ipkData1[i1]?.процентнаяЧасть) !== '0.00' && (<>
              &nbsp;( { ipkPrettyNumber(+ipkData1[i1]?.процентнаяЧасть) } )
            </>)}
            <S />
            { ipkPrettyNumber((ipkData1[i1]?.выплаченоОсновнаяЧасть)) }
            { +i1 === (ipkData1.length - 1) && ipkPrettyNumber(+ipkData1[i1]?.остаточнаяЧасть) !== '0.00' && (<>
              &nbsp;( { ipkPrettyNumber(+ipkData1[i1]?.остаточнаяЧасть) } )
            </>)}
            <hr />
            <span className="red">
              { i1 > 0 ? ipkPrettyNumber((ipkData1[i1]?.выплаченоПроцентнаяЧасть * 100 / (ipkData1[i1]?.выплаченоПроцентнаяЧасть + ipkData1[i1]?.выплаченоОсновнаяЧасть))) : '0.00' }%
            </span>
            <S />
            <span className="green">
              { i1 > 0 ? ipkPrettyNumber((ipkData1[i1]?.выплаченоОсновнаяЧасть * 100 / (ipkData1[i1]?.выплаченоПроцентнаяЧасть + ipkData1[i1]?.выплаченоОсновнаяЧасть))) : '0.00' }%
            </span>
          </td>
          <td>
            { ipkPrettyNumber(ipkData2[i2]?.выплаченоПроцентнаяЧасть) }
            { +i2 === (ipkData2.length - 1) && ipkPrettyNumber(+ipkData2[i2]?.процентнаяЧасть) !== '0.00' && (<>
              &nbsp;( { ipkPrettyNumber(+ipkData2[i2]?.процентнаяЧасть) } )
            </>)}
            <S />
            { ipkPrettyNumber(ipkData2[i2]?.выплаченоОсновнаяЧасть) }
            { +i2 === (ipkData2.length - 1) && ipkPrettyNumber(+ipkData2[i2]?.остаточнаяЧасть) !== '0.00' && (<>
              &nbsp;( { ipkPrettyNumber(+ipkData2[i2]?.остаточнаяЧасть) } )
            </>)}
            <hr />
            <span className="red">
              { i2 > 0 ? ipkPrettyNumber((ipkData2[i2]?.выплаченоПроцентнаяЧасть * 100 / (ipkData2[i2]?.выплаченоПроцентнаяЧасть + ipkData2[i2]?.выплаченоОсновнаяЧасть))) : '0.00' }%
            </span>
            <S />
            <span className="green">
              { i2 > 0 ? ipkPrettyNumber((ipkData2[i2]?.выплаченоОсновнаяЧасть * 100 / (ipkData2[i2]?.выплаченоПроцентнаяЧасть + ipkData2[i2]?.выплаченоОсновнаяЧасть))) : '0.00' }%
            </span>
          </td>
        </tr>

        {/* br */}
        <B />

        {/* Номер платежа */}
        <tr>
          <td>Номер платежа</td>
          <td className="range-flex">
            <input
              type="range"
              step="1"
              value={i1}
              min={0}
              max={ipkData1.length - 1}
              onInput={e => setI1(e.target.value)}
            />
            <span>{ i1 }</span>
            
            {/* plus 1 */}
            <input
              className={classNames('plus-checkbox', {
                false: !visiblePlus1
              })}
              type="checkbox"
              checked={visiblePlus1}
              onChange={() => {
                setVisiblePlus1(!visiblePlus1)
                setPlus1(0)
                setI1(0)
              }}
            />
            {visiblePlus1 && <input
              className="plus-number"
              type="number"
              min={0}
              value={plus1}
              step={1000}
              onInput={e => {
                setPlus1(+e.target.value)
                setI1(0)
              }}
            />}

            <br />
            { (i1 * 100 / (ipkData1.length - 1)).toFixed(2) }%
            <S />
            {(i1 / 12).toFixed(2)} лет
          </td>
          <td className="range-flex">
            <input
              type="range"
              step="1"
              value={i2}
              min={0}
              max={ipkData2.length - 1}
              onInput={e => setI2(+e.target.value)}
            />
            <span>{ i2 }</span>

            {/* plus 2 */}
            <input
              className={classNames('plus-checkbox', {
                false: !visiblePlus2
              })}
              type="checkbox"
              checked={visiblePlus2}
              onChange={() => {
                setVisiblePlus2(!visiblePlus2)
                setPlus2(0)
                setI2(0)
              }}
            />
            {visiblePlus2 && <input
              className="plus-number"
              type="number"
              min={0}
              value={plus2}
              step={1000}
              onInput={e => {
                setPlus2(+e.target.value)
                setI2(0)
              }}
            />}

            <br />
            { (i2 * 100 / (ipkData2.length - 1)).toFixed(2) }%
            <S />
            {(i2 / 12).toFixed(2)} лет
          </td>
        </tr>

        {/* br */}
        <B />
        
        {/* След. платеж */}
        <tr>
          <td>След. платеж</td>
          <td>
            <span className="red">{ ipkData1[i1]?.процентнаяЧастьПроценты }%</span>
            <S />
            <span className="green">{ ipkData1[i1]?.основнаяЧастьПроценты }%</span>
            <hr />
            <div>
              { ipkPrettyNumber(ipkData1[i1]?.процентнаяЧасть) }
              <S />
              { ipkPrettyNumber(ipkData1[i1]?.основнаяЧасть) }
            </div>
          </td>
          <td>
            <span className="red">{ ipkData2[i2]?.процентнаяЧастьПроценты }%</span>
            <S />
            <span className="green">{ ipkData2[i2]?.основнаяЧастьПроценты }%</span>
            <hr />
            <div>
              { ipkPrettyNumber(ipkData2[i2]?.процентнаяЧасть) }
              <S />
              { ipkPrettyNumber(ipkData2[i2]?.основнаяЧасть) }
            </div>
          </td>
        </tr>

        {/* br */}
        <B />

        {/* eslint-disable */}
        {/* Ежемесячный платеж */}
        <tr>
          <td>Ежемесячный платеж</td>
          <td>
            <span className={classNames('grey', {
              ['orange']: ежемесячныйПлатежРазницаЧисло2 > 0,
              ['blue']: ежемесячныйПлатежРазницаЧисло2 < 0
            })}>
              { ipkPrettyNumber(data1?.ежемесячныйПлатеж) }
              &nbsp;( { ежемесячныйПлатежРазница1 } )
            </span>
          </td>
          <td>
            <span className={classNames('td grey', {
              ['blue']: ежемесячныйПлатежРазницаЧисло2 > 0,
              ['orange']: ежемесячныйПлатежРазницаЧисло2 < 0
            })}>
              { ipkPrettyNumber(data2?.ежемесячныйПлатеж) }
              &nbsp;( { ежемесячныйПлатежРазница2 } )
            </span>
          </td>
        </tr>

        {/* br */}
        <B />

        {/* Переплата */}
        <tr>
          <td>Переплата</td>
          <td>
            <span className="red">
            { ipkPrettyNumber(data1?.переплата) }
            </span>
            <S />
            <span className={classNames({
              ['orange']: переплатаРазницаЧисло2 > 0,
              ['blue']: переплатаРазницаЧисло2 < 0
            })}>
              { переплатаРазница1 }
            </span>
            {/* </span> */}
          </td>
          <td>
            <span className="red">
              { ipkPrettyNumber(data2?.переплата) }
            </span>
            <S />
            <span className={classNames({
              ['blue']: переплатаРазницаЧисло2 > 0,
              ['orange']: переплатаРазницаЧисло2 < 0
            })}>
              { переплатаРазница2 }
            </span>
          </td>
        </tr>
        {/* eslint-enable */}

        {/* br */}
        <B />

        {/* Всего */}
        <tr>
          <td>Всего</td>
          <td>
            { ipkPrettyNumber((+data1?.стоимостьЖилья + +data1?.переплата)) }
          </td>
          <td>
            { ipkPrettyNumber((+data2?.стоимостьЖилья + +data2?.переплата)) }
          </td>
        </tr>

        {/* Ежемесячная ставка */}
        <tr>
          <td>Ежемесячная ставка</td>
          <td>{ data1?.ежемесячнаяСтавка }</td>
          <td>{ data2?.ежемесячнаяСтавка }</td>
        </tr>

        {/* Общая ставка */}
        <tr>
          <td>Общая ставка</td>
          <td>{ data1?.общаяСтавка }</td>
          <td>{ data2?.общаяСтавка }</td>
        </tr>

      </tbody>
      </table>
      <style jsx>{ staticStyles }</style>
    </div>
  )
}
