export const ipkdPN = (n, noFixed = false) => {
  n = n?.toFixed(2) ?? '0.00'
  let [num, part] = n.toString().split('.')
  num = num.split('').reverse().join('').match(/.{1,3}/g).join(' ').split('').reverse().join('')
  const result = noFixed ? `${num}` : `${num}.${part}`
  return result === '-0.00' ? '0.00' : result
}

export const ipkdGetP = d => {
  let суммаДолга = d?.суммаКредита
  const процентнаяЧасть = суммаДолга * d?.ежемесячнаяСтавка
  const платежЗаМесяц = d?.ежемесячноеПогашениеДолга + процентнаяЧасть
  const основнаяЧасть = платежЗаМесяц - процентнаяЧасть
  let оплаченоПроценты = 0
  let оплаченоОсновнаяЧасть = 0
  let оплаченоПроцентыСлед = процентнаяЧасть
  let оплаченоОсновнаяЧастьСлед = основнаяЧасть

  const платежи = [{
    суммаДолга,
    процентнаяЧасть,
    платежЗаМесяц,
    основнаяЧасть,
    оплаченоПроценты,
    оплаченоОсновнаяЧасть
  }]

  for (; Math.round(суммаДолга) > 0;) {
    суммаДолга -= d?.ежемесячноеПогашениеДолга
    const процентнаяЧасть = суммаДолга * d?.ежемесячнаяСтавка
    const платежЗаМесяц = d?.ежемесячноеПогашениеДолга + процентнаяЧасть
    const основнаяЧасть = платежЗаМесяц - процентнаяЧасть
    
    оплаченоПроценты = оплаченоПроцентыСлед
    оплаченоОсновнаяЧасть = оплаченоОсновнаяЧастьСлед
    оплаченоПроцентыСлед += процентнаяЧасть
    оплаченоОсновнаяЧастьСлед += основнаяЧасть

    платежи.push({
      суммаДолга,
      процентнаяЧасть,
      платежЗаМесяц,
      основнаяЧасть,
      оплаченоПроценты,
      оплаченоОсновнаяЧасть
    })
  }

  return платежи
}
