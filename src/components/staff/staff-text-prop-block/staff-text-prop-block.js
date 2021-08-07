import classNames from 'classnames'
import React from 'react'
import './staff-text-prop-block.scss'
import { useDispatch } from 'react-redux'

export const StaffTextPropBlock = ({
  externalClass,
  title,
  action,
  text,
  ...rest
}) => {
  const dispatch = useDispatch();

  return (
    <div
      className={classNames('StaffTextPropBlock', {
        [externalClass]: externalClass,
      })}
      {...rest}
    >
      <div className="StaffTextPropBlock__title">
        { title }
      </div>
      <input
        className="StaffTextPropBlock__input"
        type="text"
        value={text}
        onChange={e => dispatch(action(e.target.value))}
      />
    </div>
  )
}
