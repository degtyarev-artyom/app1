import classNames from 'classnames'
import { staffActions } from 'redux/staff/staff-actions'
import { staffSelectors } from 'redux/staff/staff-selectors'
import './staff-change-theme.scss'
import { useDispatch, useSelector } from 'react-redux'
import { staffThemes, staffColors } from 'styling/staff/staff-styling-themes'
import { getDynamicStyles } from './staff-change-theme-styles'

export const StaffChangeTheme = ({
  externalClass,
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const dispatch = useDispatch()
  const dynamicStyles = getDynamicStyles(staffColors)

  return (
    <div className={classNames('StaffChangeTheme', {
      [externalClass]: externalClass, 
    })}>
      <div
        className={classNames('StaffChangeTheme__item StaffChangeTheme__item--default', {
          'StaffChangeTheme__item--active': currentTheme === 'default', 
        })}
        onClick={() => dispatch(staffActions.setTheme(staffThemes.default))}
      >
        <div className="StaffChangeTheme__item--default--green"/>
        <div className="StaffChangeTheme__item--default--purple"/>
        <div className="StaffChangeTheme__item--default--blue"/>
        <div className="StaffChangeTheme__item--default--red"/>
        <div className="StaffChangeTheme__item--default--orange"/>
        <div className="StaffChangeTheme__item--default--grey"/>
      </div>

      {/* green */}
      <div
        className={classNames('StaffChangeTheme__item StaffChangeTheme__item--green', {
          'StaffChangeTheme__item--active': currentTheme === 'green', 
        })}
        onClick={() => dispatch(staffActions.setTheme(staffThemes.green))}
      />

      {/* purple */}
      <div
        className={classNames('StaffChangeTheme__item StaffChangeTheme__item--purple', {
          'StaffChangeTheme__item--active': currentTheme === 'purple', 
        })}
        onClick={() => dispatch(staffActions.setTheme(staffThemes.purple))}
      />

      {/* blue */}
      <div
        className={classNames('StaffChangeTheme__item StaffChangeTheme__item--blue', {
          'StaffChangeTheme__item--active': currentTheme === 'blue', 
        })}
        onClick={() => dispatch(staffActions.setTheme(staffThemes.blue))}
      />
      
      {/* red */}
      <div
        className={classNames('StaffChangeTheme__item StaffChangeTheme__item--red', {
          'StaffChangeTheme__item--active': currentTheme === 'red', 
        })}
        onClick={() => dispatch(staffActions.setTheme(staffThemes.red))}
      />
      
      {/* orange */}
      <div
        className={classNames('StaffChangeTheme__item StaffChangeTheme__item--orange', {
          'StaffChangeTheme__item--active': currentTheme === 'orange', 
        })}
        onClick={() => dispatch(staffActions.setTheme(staffThemes.orange))}
      />
      
      {/* grey */}
      <div
        className={classNames('StaffChangeTheme__item StaffChangeTheme__item--grey', {
          'StaffChangeTheme__item--active': currentTheme === 'grey', 
        })}
        onClick={() => dispatch(staffActions.setTheme(staffThemes.grey))}
      />
      
      <style jsx>{ dynamicStyles }</style>
    </div>
  )
}
