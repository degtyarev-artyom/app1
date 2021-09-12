import classNames from 'classnames'
import { StaffContent } from 'components/staff/staff-content/staff-content'
import { StaffNavbar } from 'components/staff/staff-navbar/staff-navbar'
import { StaffTitle } from 'components/staff/staff-title/staff-title'
import { useSelector } from 'react-redux'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import './sandbox.scss'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { getTheme } from 'functions/staff-styling-func'
import { Tab, Tabs } from 'components/pages/components/tabs/tabs'

export const Sandbox = ({
  externalClass,
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = getTheme(currentTheme, staffThemes.orange)

  // const [show, setShow] = useState(true)

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

        {/* Tabs */}
        <a href="/sandbox">/sandbox</a>
        <Tabs externalClass="Sandbox__tabs" tabsId="1">
          <Tab tabSlug="1" tabName="Таб 1">content 1</Tab>
          <Tab tabSlug="2" tabName="Таб 2">
            <Tabs externalClass="Sandbox__tabs" tabsId="2">
              <Tab tabSlug="1" tabName="Таб 2-1">content 2-1</Tab>
              <Tab tabSlug="2" tabName="Таб 2-2" tabDefault>content 2-2</Tab>
              <Tab tabSlug="3" tabName="Таб 2-3">content 2-3</Tab>
            </Tabs>
          </Tab>
          <Tab tabSlug="3" tabName="Таб 3" tabDefault>content 3</Tab>
        </Tabs>

        {/* Hooks */}
        {/* <Button
          externalClass="Sandbox__hooks-show-hide-button"
          onClick={() => setShow(prev => !prev)}
          theme={show ? ButtonProps.theme.greyRed : ButtonProps.theme.greyOlive}
          size={ButtonProps.size.m}
          active
        >
          { show ? 'Hide' : 'Show' }
        </Button>
        {show && <Hooks externalClass="Sandbox__hooks" />} */}

        {/* RxJS */}
        {/* <RxJS externalClass="Sandbox__rx-js" /> */}

        {/* Counter */}
        {/* <Counter externalClass="Sandbox__counter" /> */}
      </StaffContent>
    </div>
  )
}
