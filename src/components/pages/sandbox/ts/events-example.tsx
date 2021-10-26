import React, { FC, useRef, useState } from 'react'

export const EventsExample: FC = () => {

  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = () => {
    console.log(inputRef.current?.value)
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('drag div element')
  }

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    // e.preventDefault()
    setIsDrag(false)
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    // e.preventDefault()
    setIsDrag(false)
    console.log('drop div element')
  }

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} placeholder="Управляемый" />
      <input ref={inputRef} type="text" placeholder="Неуправляемый" />
      <button onClick={clickHandler}>321</button>
      <div
        onDrag={dragHandler}
        draggable style={{width: 100, height: 100, background: 'red'}}
      />
      <div
        onDrop={dropHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragOverHandler}
        style={{ width: 100, height: 100, background: isDrag ? 'green' : 'red', marginTop: 20 }}
      />
    </div>
  )
}
