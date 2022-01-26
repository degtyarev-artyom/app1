import classNames from 'classnames'
import './staff-text-prop-block.scss'
import { useDispatch } from 'react-redux'

export const StaffTextPropBlock = ({
  className,
  title,
  type,
  action,
  text,
  ...rest
}) => {
  const dispatch = useDispatch();

  return (
    <div
      className={classNames('StaffTextPropBlock', {
        [className]: className
      })}
      {...rest}
    >
      <div className="StaffTextPropBlock__title">
        <span>{ title }</span>
        { type ? ` (${type}):` : ':' }
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

export const StaffTextPropBlockType = {
  jsx: 'JSX',
  string: 'String'
}
