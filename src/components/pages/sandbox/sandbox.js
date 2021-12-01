import classNames from 'classnames'
import './sandbox.scss'

export const Sandbox = ({
  externalClass,
}) => {
  return (
    <div className={classNames('Sandbox', {
      [externalClass]: externalClass
    })}>
      Sandbox SBR
    </div>
  )
}
