import { memo } from 'react'

export const B = ({
  addCount,
  delCount
}) => {

  console.log('render B')

  return (
    <>
      <button
        className="H__count-button-add"
        onClick={addCount}
      >
        +1
      </button>
      <button
        className="H__count-button-del"
        onClick={delCount}
      >
        -1
      </button>
    </>
  )
}

export const BMemo = memo(B)
