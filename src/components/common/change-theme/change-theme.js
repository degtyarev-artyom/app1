import classNames from 'classnames';
import { commonActions } from 'redux/common/common-actions';
import { commonSelectors } from 'redux/common/common-selectors';
import './change-theme.scss'
import { useDispatch, useSelector } from 'react-redux';
import { themes } from 'styling/themes';
import { getDynamicStyles } from './change-theme-styles'
import { colors } from 'styling/themes'

export const ChangeTheme = ({
  externalClass,
}) => {
  const currentTheme = useSelector(commonSelectors.currentTheme)
  const dispatch = useDispatch()
  const dynamicStyles = getDynamicStyles(colors)
  
  

  return (
    <div className={classNames('ChangeTheme', {
      [externalClass]: externalClass, 
    })}>
      <div
        className={classNames('ChangeTheme__item ChangeTheme__item--default', {
          'ChangeTheme__item--active': currentTheme === 'default', 
        })}
        onClick={() => dispatch(commonActions.setTheme(themes.default))}
      >
        <div className="ChangeTheme__item--default--green"/>
        <div className="ChangeTheme__item--default--purple"/>
        <div className="ChangeTheme__item--default--blue"/>
        <div className="ChangeTheme__item--default--red"/>
        <div className="ChangeTheme__item--default--orange"/>
        <div className="ChangeTheme__item--default--grey"/>
      </div>

      {/* green */}
      <div
        className={classNames('ChangeTheme__item ChangeTheme__item--green', {
          'ChangeTheme__item--active': currentTheme === 'green', 
        })}
        onClick={() => dispatch(commonActions.setTheme(themes.green))}
      />

      {/* purple */}
      <div
        className={classNames('ChangeTheme__item ChangeTheme__item--purple', {
          'ChangeTheme__item--active': currentTheme === 'purple', 
        })}
        onClick={() => dispatch(commonActions.setTheme(themes.purple))}
      />

      {/* blue */}
      <div
        className={classNames('ChangeTheme__item ChangeTheme__item--blue', {
          'ChangeTheme__item--active': currentTheme === 'blue', 
        })}
        onClick={() => dispatch(commonActions.setTheme(themes.blue))}
      />
      
      {/* red */}
      <div
        className={classNames('ChangeTheme__item ChangeTheme__item--red', {
          'ChangeTheme__item--active': currentTheme === 'red', 
        })}
        onClick={() => dispatch(commonActions.setTheme(themes.red))}
      />
      
      {/* orange */}
      <div
        className={classNames('ChangeTheme__item ChangeTheme__item--orange', {
          'ChangeTheme__item--active': currentTheme === 'orange', 
        })}
        onClick={() => dispatch(commonActions.setTheme(themes.orange))}
      />
      
      {/* grey */}
      <div
        className={classNames('ChangeTheme__item ChangeTheme__item--grey', {
          'ChangeTheme__item--active': currentTheme === 'grey', 
        })}
        onClick={() => dispatch(commonActions.setTheme(themes.grey))}
      />
      
      <style jsx>{ dynamicStyles }</style>
    </div>
  )
}
