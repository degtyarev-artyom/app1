import classNames from 'classnames'
import { getTheme } from 'functions/staff-styling-func'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import { ipkdGetP, ipkdPN } from './ipk-d-functions'
import { staticStyles } from './ipk-d-styles'
import './ipk-d.scss'

export const IPKD = ({
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

  const [d1, setD1] = useState(() => {
    let d1LS = localStorage.getItem('d1')
    if (d1LS) {
      return JSON.parse(d1LS)
    } else {
      d1LS = {
        стоимостьЖилья: 10000000,
        первоначальныйВзнос: 3000000,
        срокИпотекиЛет: 20,
        процентнаяСтавкаГодовых: 9.3,
        ежемесячнаяСтавка: 9.3 / 12 / 100,
        суммаКредита: 7000000,
        срокИпотекиМесяцев: 240,
        ежемесячноеПогашениеДолга: 7000000 / 240
      }
      localStorage.setItem('d1', JSON.stringify(d1LS))
      return d1LS
    }
  })

  const calc = (name, d, setD, dLS, setI = false) => e => {
    const data = { ...d, [name]: +e.target.value }
    const {
      стоимостьЖилья,
      первоначальныйВзнос,
      срокИпотекиЛет,
      процентнаяСтавкаГодовых
    } = data

    const ежемесячнаяСтавка = процентнаяСтавкаГодовых / 12 / 100
    const суммаКредита = стоимостьЖилья - первоначальныйВзнос
    const срокИпотекиМесяцев = срокИпотекиЛет * 12
    const ежемесячноеПогашениеДолга = суммаКредита / срокИпотекиМесяцев

    const result = {
      стоимостьЖилья,
      первоначальныйВзнос,
      срокИпотекиЛет,
      процентнаяСтавкаГодовых,
      ежемесячнаяСтавка,
      суммаКредита,
      срокИпотекиМесяцев,
      ежемесячноеПогашениеДолга
    }

    localStorage.setItem(dLS, JSON.stringify(result))
    if (setI) setI(0)
    setD(result)
  }

  const p1 = ipkdGetP(d1)

  const [i1, setI1] = useState(0)

  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = getTheme(currentTheme, staffThemes.orange)

  return (
    <div
      className={classNames('IPKD', {
        [className]: className,
        [`theme-${theme}`]: theme
      })}
      {...rest}
    >
      <div
        className="IPKD__title"
        onClick={() => {
          const d1 = {
            стоимостьЖилья: 10000000,
            первоначальныйВзнос: 3000000,
            срокИпотекиЛет: 20,
            процентнаяСтавкаГодовых: 9.3,
            ежемесячнаяСтавка: 9.3 / 12 / 100,
            суммаКредита: 7000000,
            срокИпотекиМесяцев: 240,
            ежемесячноеПогашениеДолга: 7000000 / 240
          }
          localStorage.setItem('d1', JSON.stringify(d1))
          setD1(d1)
        }}
      >
        Дифференцированные платежи
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
              min={d1?.первоначальныйВзнос + шагСтоимостиЖилья}
              max={максимальнаяСтоимостьЖилья}
              value={d1?.стоимостьЖилья}
              onInput={calc('стоимостьЖилья', d1, setD1, 'd1')}
            />
            <span className="purple">
              { ipkdPN(d1?.стоимостьЖилья, true) }
            </span>
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
              max={d1?.стоимостьЖилья - шагПервоначальногоВзноса}
              value={d1?.первоначальныйВзнос}
              onInput={calc('первоначальныйВзнос', d1, setD1, 'd1')}
            />
            <span className="purple">
              { ipkdPN(d1?.первоначальныйВзнос, true) }
            </span>
            <span>
              <S />
            </span>
            <span className="yellow">
              { ipkdPN(d1?.суммаКредита, true) }
            </span>
          </td>
          <td></td>
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
              value={d1?.срокИпотекиЛет}
              onInput={calc('срокИпотекиЛет', d1, setD1, 'd1', setI1)}
            />
            <span>
              { d1?.срокИпотекиЛет }
              <S />
              { d1?.срокИпотекиМесяцев }
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
              value={d1?.процентнаяСтавкаГодовых}
              onInput={calc('процентнаяСтавкаГодовых', d1, setD1, 'd1')}
            />
            <span>
              { d1?.процентнаяСтавкаГодовых }
            </span>
          </td>
        </tr>

        {/* Ежемесячная ставка */}
        <tr>
          <td>Ежемесячная ставка</td>
          <td>
            { d1?.ежемесячнаяСтавка }
          </td>
        </tr>

        {/* Ежемесячное погашение долга */}
        <tr>
          <td>Ежемесячное погашение долга</td>
          <td>
            <span className="grey">
              { ipkdPN(d1?.ежемесячноеПогашениеДолга) }
            </span>
          </td>
        </tr>

        {/* br */}
        <B />

        {/* Оплачено */}
        <tr>
          <td>Оплачено</td>
          <td>
            { ipkdPN(p1[i1]?.оплаченоПроценты) }
            <S />
            { ipkdPN(p1[i1]?.оплаченоОсновнаяЧасть) }
            <hr />
            <span className="red">
              { i1 > 0 ? ipkdPN(p1[i1]?.оплаченоПроценты * 100 / ( p1[i1]?.оплаченоПроценты + p1[i1]?.оплаченоОсновнаяЧасть )) : '0.00' }%
            </span>
            <S />
            <span className="green">
              { i1 > 0 ? ipkdPN(p1[i1]?.оплаченоОсновнаяЧасть * 100 / ( p1[i1]?.оплаченоПроценты + p1[i1]?.оплаченоОсновнаяЧасть )) : '0.00' }%
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
              min={0}
              max={p1.length - 1}
              value={i1}
              onInput={e => {
                setI1(+e.target.value)
              }}
            />
            <span>
              { i1 }
            </span>
          </td>
        </tr>

        {/* br */}
        <B />

        {/* След. платеж */}
        <tr>
          <td>След. платеж</td>
          <td>
            { ipkdPN(p1[i1]?.процентнаяЧасть) }
            <S />
            <span className="grey">
              { ipkdPN(p1[i1]?.основнаяЧасть) }
            </span>
            <S />
            <span className="blue">
              { ipkdPN(p1[i1]?.платежЗаМесяц) }
            </span>
            <hr />
            <span className="red">
              { ipkdPN(p1[i1]?.процентнаяЧасть * 100 / p1[i1]?.платежЗаМесяц) }%
            </span>
            <S />
            <span className="green">
              { ipkdPN(p1[i1]?.основнаяЧасть * 100 / p1[i1]?.платежЗаМесяц) }%
            </span>
          </td>
        </tr>

      </tbody>
      </table>
      <style jsx>{ staticStyles }</style>
    </div>
  )
}
