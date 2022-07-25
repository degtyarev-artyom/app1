export const TotalBid = ({
  data1,
  data2,
}) => {
  const общаяСтавка1 = data1?.общаяСтавка
  const общаяСтавка2 = data2?.общаяСтавка

  return (
    <tr>
      <td>Общая ставка</td>
      <td>{ общаяСтавка1 }</td>
      <td>{ общаяСтавка2 }</td>
    </tr>
  )
}
