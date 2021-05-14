import classNames from "classnames"
import './title.scss'

export const Title = ({
  externalClass,
  children,
}) => {
  return (
    <div className={classNames('Title', {
      [externalClass]: externalClass,
    })}>
      { children }
    </div>
  )
}
