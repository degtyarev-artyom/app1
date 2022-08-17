import classNames from 'classnames'
import { getTheme } from 'functions/staff-styling-func'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import { AnnualInterestRate } from './annuity-payment/annual-interest-rate'
import { CostHouse } from './annuity-payment/cost-house'
import { InitialPayment } from './annuity-payment/initial-payment'
import { MinimumDownPaymentPercentage } from './annuity-payment/minimum-down-payment-percentage'
import { MonthlyPayment } from './annuity-payment/monthly-payment'
import { MonthlyRate } from './annuity-payment/monthly-rate'
import { MortgageTermYear } from './annuity-payment/mortgage-term-year'
import { NextPayment } from './annuity-payment/next-payment'
import { Overpayment } from './annuity-payment/overpayment'
import { PaidFor } from './annuity-payment/paid-for'
import { PaymentNumber } from './annuity-payment/payment-number'
import { SquareMeter } from './annuity-payment/square-meter'
import { TotalBid } from './annuity-payment/total-bid'
import { calc, ipkGetData } from './helpers'
import { staticStyles } from './ipk-styles'
import './ipk.scss'

export const IPK = ({
  className,
  ...rest
}) => {

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
        <CostHouse
          data1={data1}
          data2={data2}
          setI1={setI1}
          setI2={setI2}
          setData1={setData1}
          setData2={setData2}
        />

        {/* Мин. проц. перв. взноса */}
        <MinimumDownPaymentPercentage
          data1={data1}
          data2={data2}
          setI1={setI1}
          setI2={setI2}
          setData1={setData1}
          setData2={setData2}
        />

        {/* Первоначальный взнос */}
        <InitialPayment
          data1={data1}
          data2={data2}
          setI1={setI1}
          setI2={setI2}
          setData1={setData1}
          setData2={setData2}
        />

        {/* Кв. м. */}
        <SquareMeter
          data1={data1}
          data2={data2}
          setData1={setData1}
          setData2={setData2}
        />

        {/* Срок ипотеки ( лет | месяцев ) */}
        <MortgageTermYear
          data1={data1}
          data2={data2}
          setI1={setI1}
          setI2={setI2}
          setData1={setData1}
          setData2={setData2}
        />

        {/* Процентная ставка годовых */}
        <AnnualInterestRate
          data1={data1}
          data2={data2}
          setI1={setI1}
          setI2={setI2}
          setData1={setData1}
          setData2={setData2}
        />

        {/* Оплачено */}
        <PaidFor
          data1={data1}
          data2={data2}
          plus1={plus1}
          plus2={plus2}
          i1={i1}
          i2={i2}
          visiblePlus1={visiblePlus1}
          visiblePlus2={visiblePlus2}
        />

        {/* Номер платежа */}
        <PaymentNumber
          data1={data1}
          data2={data2}
          setI1={setI1}
          setI2={setI2}
          plus1={plus1}
          plus2={plus2}
          setPlus1={setPlus1}
          setPlus2={setPlus2}
          visiblePlus1={visiblePlus1}
          visiblePlus2={visiblePlus2}
          setVisiblePlus1={setVisiblePlus1}
          setVisiblePlus2={setVisiblePlus2}
          i1={i1}
          i2={i2}
        />

        {/* След. платеж */}
        <NextPayment
          ipkData1={ipkData1}
          ipkData2={ipkData2}
          i1={i1}
          i2={i2}
        />

        {/* Ежемесячный платеж */}
        <MonthlyPayment
          data1={data1}
          data2={data2}
        />

        {/* Переплата */}
        <Overpayment
          data1={data1}
          data2={data2}
        />

        {/* Ежемесячная ставка */}
        <MonthlyRate
          data1={data1}
          data2={data2}
        />

        {/* Общая ставка */}
        <TotalBid
          data1={data1}
          data2={data2}
        />

      </tbody>
      </table>
      <style jsx>{ staticStyles }</style>
    </div>
  )
}
