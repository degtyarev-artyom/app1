import classNames from 'classnames'
import { getTheme } from 'functions/staff-styling-func'
import { hsla } from 'functions/staff-styling-hsla-func'
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

  const стоимостьЖильяМакс = 20000000
  const стоимостьЖильяШаг = 100000
  const минСуммаКредита = 100000
  const первоначальныйВзносШаг = 1000
  const срокИпотекиЛетШаг = 1
  const процентнаяСтавкаГодовыхШаг = 0.1

  const defaultData1 = {
    первоначальныйВзносПроцентМин: 15,
    стоимостьЖилья: 8000000,
    первоначальныйВзнос: 8000000 * 15 / 100,
    срокИпотекиЛет: 20,
    процентнаяСтавкаГодовых: 12,
    квМ: 70
  }

  const defaultData2 = {
    первоначальныйВзносПроцентМин: 15,
    стоимостьЖилья: 8000000,
    первоначальныйВзнос: 8000000 * 15 / 100,
    срокИпотекиЛет: 20,
    процентнаяСтавкаГодовых: 5,
    квМ: 70,
  }

  const [data1, setData1] = useState(() => {
    const dataLS1 = localStorage.getItem('data1')
    return dataLS1 ? JSON.parse(dataLS1) : defaultData1 
  })

  const [data2, setData2] = useState(() => {
    const dataLS2 = localStorage.getItem('data2')
    return dataLS2 ? JSON.parse(dataLS2) : defaultData2
  })

  const calc = ({
    первоначальныйВзносПроцентМин,
    стоимостьЖилья,
    первоначальныйВзнос,
    срокИпотекиЛет,
    процентнаяСтавкаГодовых,
    квМ,
  }, data, setData, dataLS) => {

    первоначальныйВзносПроцентМин = первоначальныйВзносПроцентМин ?? data.первоначальныйВзносПроцентМин
    стоимостьЖилья = стоимостьЖилья ?? data.стоимостьЖилья
    const первоначальныйВзносМин = стоимостьЖилья * первоначальныйВзносПроцентМин / 100
    первоначальныйВзнос = первоначальныйВзнос ?? data.первоначальныйВзнос
    первоначальныйВзнос = первоначальныйВзнос > data.первоначальныйВзнос
      ? Math.ceil(первоначальныйВзнос / 100000) * 100000
      : первоначальныйВзнос
    первоначальныйВзнос = первоначальныйВзнос < data.первоначальныйВзнос
      ? Math.floor(первоначальныйВзнос / 100000) * 100000
      : первоначальныйВзнос
    первоначальныйВзнос = первоначальныйВзнос < первоначальныйВзносМин ? первоначальныйВзносМин : первоначальныйВзнос
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
      первоначальныйВзносПроцентМин,
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

  const квМШаг = 0.1
  const квММакс = 200

  /* aннуитентные платежи => click */

  const clickTitleA = () => {
    calc(defaultData1, data1, setData1, 'data1')
    calc(defaultData2, data2, setData2, 'data2')
    setI1(0)
    setI2(0)
    setVisiblePlus1(false)
    setVisiblePlus2(false)
    setPlus1(0)
    setPlus2(0)
  }

  /* стоимость жилья */

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

  /* первоначальныйВзносПроцентМин */

  const первоначальныйВзносПроцентМин1 = +data1.первоначальныйВзносПроцентМин
  const первоначальныйВзносПроцентМин2 = +data2.первоначальныйВзносПроцентМин
  const первоначальныйВзносПроцентШаг = 1
  const первоначальныйВзносПроцентМин = 1
  const первоначальныйВзносПроцентМакс = 99
  const первоначальныйВзносПроцентДействие1 = e => {
    calc({ первоначальныйВзносПроцентМин: +e.target.value }, data1, setData1, 'data1')
    setI1(0)
  }
  const первоначальныйВзносПроцентДействие2 = e => {
    calc({ первоначальныйВзносПроцентМин: +e.target.value }, data2, setData2, 'data2')
    setI2(0)
  }

  /* первоначальный взнос */

  const первоначальныйВзносМин1 = стоимостьЖильяЗначение1 * первоначальныйВзносПроцентМин1 / 100
  const первоначальныйВзносМин2 = стоимостьЖильяЗначение2 * первоначальныйВзносПроцентМин2 / 100
  const первоначальныйВзносМакс1 = +data1?.стоимостьЖилья - минСуммаКредита
  const первоначальныйВзносМакс2 = +data2?.стоимостьЖилья - минСуммаКредита
  const первоначальныйВзносЗначение1 = +data1?.первоначальныйВзнос < первоначальныйВзносМин1 ? первоначальныйВзносМин1 : +data1?.первоначальныйВзнос
  const первоначальныйВзносЗначение2 = +data2?.первоначальныйВзнос < первоначальныйВзносМин2 ? первоначальныйВзносМин2 : +data2?.первоначальныйВзнос

  const первоначальныйВзносДействие1 = e => {
    calc({ первоначальныйВзнос: +e.target.value }, data1, setData1, 'data1')
    setI1(0)
  }

  const первоначальныйВзносДействие2 = e => {
    calc({ первоначальныйВзнос: +e.target.value }, data2, setData2, 'data2')
    setI2(0)
  }
  const первоначальныйВзносПВ1 = ipkPrettyNumber(первоначальныйВзносЗначение1, true)
  const первоначальныйВзносПВ2 = ipkPrettyNumber(первоначальныйВзносЗначение2, true)
  const первоначальныйВзносСуммаКредита1 = ipkPrettyNumber(data1?.суммаКредита, true)
  const первоначальныйВзносСуммаКредита2 = ipkPrettyNumber(data2?.суммаКредита, true)

  /* кв. м. */

  const квММин = 1
  const квМЗначение1 = data1?.квМ
  const квМЗначение2 = data2?.квМ
  const квМДействие = e => {
    calc({ квМ: +e.target.value }, data1, setData1, 'data1')
    calc({ квМ: +e.target.value }, data2, setData2, 'data2')
  }
  const квМСтоимостьКМ1 = ipkPrettyNumber(data1?.стоимостьЖилья / data1?.квМ)
  const квМСтоимостьКМ2 = ipkPrettyNumber(data2?.стоимостьЖилья / data2?.квМ)

  /* срок ипотеки ( лет | месяцев ) */

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

  /* процентная ставка годовых */

  const процентнаяСтавкаГодовыхМакс = 30
  const процентнаяСтавкаГодовыхЗначение1 = data1?.процентнаяСтавкаГодовых
  const процентнаяСтавкаГодовыхЗначение2 = data2?.процентнаяСтавкаГодовых
  const процентнаяСтавкаГодовыхДействие1 = e => {
    calc({ процентнаяСтавкаГодовых: +e.target.value }, data1, setData1, 'data1')
    setI1(0)
  }
  const процентнаяСтавкаГодовыхДействие2 = e => {
    calc({ процентнаяСтавкаГодовых: +e.target.value }, data2, setData2, 'data2')
    setI2(0)
  }

  /* оплачено */

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

  /* номер платежа */

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

  /* след. платеж */

  const следПлатежПроцентнаяЧастьПроценты1 = ipkData1[i1]?.процентнаяЧастьПроценты
  const следПлатежПроцентнаяЧастьПроценты2 = ipkData2[i2]?.процентнаяЧастьПроценты
  const следПлатежОсновнаяЧастьПроценты1 = ipkData1[i1]?.основнаяЧастьПроценты
  const следПлатежОсновнаяЧастьПроценты2 = ipkData2[i2]?.основнаяЧастьПроценты
  const следПлатежПроцентнаяЧасть1 = ipkPrettyNumber(ipkData1[i1]?.процентнаяЧасть)
  const следПлатежПроцентнаяЧасть2 = ipkPrettyNumber(ipkData2[i2]?.процентнаяЧасть)
  const следПлатежОсновнаяЧасть1 = ipkPrettyNumber(ipkData1[i1]?.основнаяЧасть)
  const следПлатежОсновнаяЧасть2 = ipkPrettyNumber(ipkData2[i2]?.основнаяЧасть)

  /* ежемесячный платеж */

  const ежемесячныйПлатежРазницаЧисло1 = data2?.ежемесячныйПлатеж - data1?.ежемесячныйПлатеж
  const ежемесячныйПлатежРазница1 = ежемесячныйПлатежРазницаЧисло1 > 0
    ? `+${ipkPrettyNumber(ежемесячныйПлатежРазницаЧисло1)}`
    : ipkPrettyNumber(ежемесячныйПлатежРазницаЧисло1)
  const ежемесячныйПлатежРазницаЧисло2 = data1?.ежемесячныйПлатеж - data2?.ежемесячныйПлатеж
  const ежемесячныйПлатежРазница2 = ежемесячныйПлатежРазницаЧисло2 > 0
    ? `+${ipkPrettyNumber(ежемесячныйПлатежРазницаЧисло2)}`
    : ipkPrettyNumber(ежемесячныйПлатежРазницаЧисло2)

  /* переплата */
  
  const переплатаРазницаЧисло1 = data2?.переплата - data1?.переплата
  const переплатаРазница1 = переплатаРазницаЧисло1 > 0
    ? `+${ipkPrettyNumber(переплатаРазницаЧисло1)}`
    : ipkPrettyNumber(переплатаРазницаЧисло1)
  const переплатаРазницаЧисло2 = data1?.переплата - data2?.переплата
  const переплатаРазница2 = переплатаРазницаЧисло2 > 0
    ? `+${ipkPrettyNumber(переплатаРазницаЧисло2)}`
    : ipkPrettyNumber(переплатаРазницаЧисло2)

  /* ежемесячная ставка */
  const ежемесячнаяСтавка1 = data1?.ежемесячнаяСтавка
  const ежемесячнаяСтавка2 = data2?.ежемесячнаяСтавка

  /* общая ставка */
  const общаяСтавка1 = data1?.общаяСтавка
  const общаяСтавка2 = data2?.общаяСтавка

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
        onClick={clickTitleA}
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

        {/* Мин. проц. перв. взноса */}
        <tr>
          <td>Мин. проц. перв. взноса</td>
          <td className="range-flex">
            <input
              type="range"
              step={первоначальныйВзносПроцентШаг}
              min={первоначальныйВзносПроцентМин}
              max={первоначальныйВзносПроцентМакс}
              value={первоначальныйВзносПроцентМин1}
              onInput={первоначальныйВзносПроцентДействие1}
            />
            <span>
              { первоначальныйВзносПроцентМин1 }%
            </span>
          </td>
          <td className="range-flex">
            <input
              type="range"
              step={первоначальныйВзносПроцентШаг}
              min={первоначальныйВзносПроцентМин}
              max={первоначальныйВзносПроцентМакс}
              value={первоначальныйВзносПроцентМин2}
              onInput={первоначальныйВзносПроцентДействие2}
            />
            <span>
              { первоначальныйВзносПроцентМин2 }%
            </span>
          </td>
        </tr>

        {/* Первоначальный взнос */}
        <tr>
          <td>Первоначальный взнос</td>
          <td className="range-flex">
            <input
              type="range"
              step={первоначальныйВзносШаг}
              min={первоначальныйВзносМин1}
              max={первоначальныйВзносМакс1}
              value={первоначальныйВзносЗначение1}
              onInput={первоначальныйВзносДействие1}
            />
            <span className="purple">
              { первоначальныйВзносПВ1 }
            </span>
            <span><S /></span>
            <span className="yellow">
              { первоначальныйВзносСуммаКредита1 }
            </span>
          </td>
          <td className="range-flex">
            <input
              type="range"
              step={первоначальныйВзносШаг}
              min={первоначальныйВзносМин2}
              max={первоначальныйВзносМакс2}
              value={первоначальныйВзносЗначение2}
              onInput={первоначальныйВзносДействие2}
            />
            <span className="purple">
              { первоначальныйВзносПВ2 }
            </span>
            <span>
              <S />
            </span>
            <span className="yellow">
              { первоначальныйВзносСуммаКредита2 }
            </span>
          </td>
        </tr>

        {/* Кв. м. */}
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

        {/* Срок ипотеки ( лет | месяцев ) */}
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

        {/* Процентная ставка годовых */}
        <tr>
          <td>Проц. ставка годовых</td>
          <td className="range-flex">
            <input
              type="range"
              step={процентнаяСтавкаГодовыхШаг}
              min={процентнаяСтавкаГодовыхШаг}
              max={процентнаяСтавкаГодовыхМакс}
              value={процентнаяСтавкаГодовыхЗначение1}
              onInput={процентнаяСтавкаГодовыхДействие1}
            />
            <span>
              { процентнаяСтавкаГодовыхЗначение1 }%
            </span>
          </td>
          <td className="range-flex">
            <input
              type="range"
              step={процентнаяСтавкаГодовыхШаг}
              min={процентнаяСтавкаГодовыхШаг}
              max={процентнаяСтавкаГодовыхМакс}
              value={процентнаяСтавкаГодовыхЗначение2}
              onInput={процентнаяСтавкаГодовыхДействие2}
            />
            <span>
              { процентнаяСтавкаГодовыхЗначение2 }%
            </span>
          </td>
        </tr>

        {/* Оплачено */}
        <tr>
          <td>Оплачено</td>
          <td>
            <span className={visiblePlus1 ? 'yellow' : ''}>
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
            <span className={visiblePlus2 ? 'yellow' : ''}>
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

        {/* Номер платежа */}
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

        {/* След. платеж */}
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

        {/* Переплата */}
        <tr style={{ backgroundColor: hsla('yellow', 20, 10, 30) }}>
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

        {/* Ежемесячная ставка */}
        <tr>
          <td>Ежемесячная ставка</td>
          <td>{ ежемесячнаяСтавка1 }</td>
          <td>{ ежемесячнаяСтавка2 }</td>
        </tr>

        {/* Общая ставка */}
        <tr>
          <td>Общая ставка</td>
          <td>{ общаяСтавка1 }</td>
          <td>{ общаяСтавка2 }</td>
        </tr>

      </tbody>
      </table>
      <style jsx>{ staticStyles }</style>
    </div>
  )
}
