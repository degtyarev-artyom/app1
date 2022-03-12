import classNames from 'classnames'
import { IPKD } from './ipk-d/ipk-d.js'
import { IPK } from './ipk/ipk.js'
import './sandbox.scss'

export const Sandbox = ({
  className,
}) => {

  return (
    <div
      className={classNames('Sandbox', {
        [className]: className
      })}
    >
      {<IPK />}
      {<IPKD />}
    </div>
  )
}
