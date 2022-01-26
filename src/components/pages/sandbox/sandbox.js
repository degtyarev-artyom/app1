import classNames from 'classnames'
import './sandbox.scss'

export const Sandbox = ({
  className,
}) => {
  return (
    <div className={classNames('Sandbox', {
      [className]: className
    })}>
      Sandbox
    </div>
  )
}
