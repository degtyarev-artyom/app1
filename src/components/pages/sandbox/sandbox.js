import classNames from 'classnames'
import { StaffContent } from 'components/staff/staff-content/staff-content'
import { StaffNavbar } from 'components/staff/staff-navbar/staff-navbar'
import { StaffTitle } from 'components/staff/staff-title/staff-title'
import { useSelector } from 'react-redux'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import './sandbox.scss'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { getTheme } from 'functions/staff-styling-func'
import { Hooks } from './hooks/hooks'
import { useState } from 'react'
import { Button, ButtonProps } from '../components/button/button'
// import { Counter } from 'components/pages/sandbox/counter/counter'
// import { RxJS } from './rx-js/rx-js'

export const Sandbox = ({
  externalClass,
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = getTheme(currentTheme, staffThemes.orange)

  const [show, setShow] = useState(true)

  return (
    <div className={classNames('Sandbox', {
      [externalClass]: externalClass
    })}>
      <StaffTitle
        externalClass="Sandbox__title"
        theme={theme}
      >
        Sandbox
      </StaffTitle>
      <StaffNavbar externalClass="Sandbox__navbar" />
      <StaffContent
        externalClass="Sandbox__content"
        theme={theme}
      >
        
        {/* <Counter externalClass="Sandbox__counter" /> */}
        {/* <RxJS externalClass="Sandbox__rx-js" /> */}

        <Button
          externalClass="Sandbox__hooks-show-hide-button"
          onClick={() => setShow(show => !show)}
          theme={show ? ButtonProps.theme.greyRed : ButtonProps.theme.greyOlive}
          size={ButtonProps.size.m}
          active
        >
          { show ? 'Hide' : 'Show' }
        </Button>
        {show && <Hooks externalClass="Sandbox__hooks" />}
        
      </StaffContent>
    </div>
  )
}
