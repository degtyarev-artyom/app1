import { useMemo} from 'react'
import { staffActions } from 'redux/staff/staff-actions.ts'
import './App.scss'
import { useDispatch } from 'react-redux'
import { StaffChangeTheme } from 'components/staff/staff-change-theme/staff-change-theme'
import { getThemeCodeLS, getThemeLS } from 'functions/staff-styling-func'
import { AppPages } from 'Pages'

const App = () => {
  const dispatch = useDispatch()
  useMemo(() => {
    dispatch(staffActions.setTheme(getThemeLS()))
    dispatch(staffActions.setThemeCode(getThemeCodeLS()))
  }, [dispatch])

  return (
    <div className="App">
      <StaffChangeTheme externalClass="App__staff-change-theme" />
      <AppPages />
    </div>
  )
}

export default App
