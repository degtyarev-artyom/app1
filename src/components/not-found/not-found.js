import classNames from "classnames"
import { Navbar } from "components/common/navbar/navbar"
import { Title } from "components/common/title/title"
import "./not-found.scss"

export const NotFound = ({
  externalClass,
}) => {
  return (
    <div className={classNames('NotFound', {
      [externalClass]: externalClass,
    })}>
      <Title externalClass="NotFound__title">Page not found</Title>
      <Navbar externalClass="NotFound__navbar" />
      <div className="NotFound__content">
        ¯\_(ツ)_/¯
      </div>
    </div>
  )
}
