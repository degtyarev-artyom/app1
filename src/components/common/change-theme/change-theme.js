import classNames from 'classnames';
import { commonActions } from 'redux/common/common-actions';
import { commonSelectors } from 'redux/common/common-selectors';
import './change-theme.scss'
import { useDispatch, useSelector } from 'react-redux';
import { themes } from 'styling/themes';

export const ChangeTheme = ({
  externalClass,
}) => {
  const currentTheme = useSelector(commonSelectors.currentTheme)
  const dispatch = useDispatch()

  return (
    <div className={classNames('ChangeTheme', {
      [externalClass]: externalClass, 
    })}>
      <div
        className={classNames('ChangeTheme__item ChangeTheme__item--default', {
          'ChangeTheme__item--default--active': currentTheme === 'default', 
        })}
        onClick={() => dispatch(commonActions.setTheme(themes.default))}
      >
        <div className="ChangeTheme__item--default--green"/>
        <div className="ChangeTheme__item--default--purple"/>
        <div className="ChangeTheme__item--default--blue"/>
        <div className="ChangeTheme__item--default--red"/>
        <div className="ChangeTheme__item--default--orange"/>
      </div>
      <div
        className={classNames('ChangeTheme__item ChangeTheme__item--green', {
          'ChangeTheme__item--green--active': currentTheme === 'green', 
        })}
        onClick={() => dispatch(commonActions.setTheme(themes.green))}
      />
      <div
        className={classNames('ChangeTheme__item ChangeTheme__item--purple', {
          'ChangeTheme__item--purple--active': currentTheme === 'purple', 
        })}
        onClick={() => dispatch(commonActions.setTheme(themes.purple))}
      />
      <div
        className={classNames('ChangeTheme__item ChangeTheme__item--blue', {
          'ChangeTheme__item--blue--active': currentTheme === 'blue', 
        })}
        onClick={() => dispatch(commonActions.setTheme(themes.blue))}
      />
      <div
        className={classNames('ChangeTheme__item ChangeTheme__item--red', {
          'ChangeTheme__item--red--active': currentTheme === 'red', 
        })}
        onClick={() => dispatch(commonActions.setTheme(themes.red))}
      />
      <div
        className={classNames('ChangeTheme__item ChangeTheme__item--orange', {
          'ChangeTheme__item--orange--active': currentTheme === 'orange', 
        })}
        onClick={() => dispatch(commonActions.setTheme(themes.orange))}
      />
    </div>
  )
}