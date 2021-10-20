import classNames from 'classnames'
import { Button, ButtonProps } from 'components/pages/components/button-block/button/button'
// import { useEffect, useRef, useState } from 'react'
import {
  // interval,
  // fromEvent,
  // from,
} from 'rxjs'
import {
  // filter,
  // map,
  // takeLast,
  // takeWhile,
  // tap,
  // take,
  // scan,
  // reduce,
  // switchMap,
  // mergeMap,
  // delay,
} from 'rxjs/operators'
import './rx-js.scss'

export const RxJS = ({
  externalClass,
}) => {
  
  

  return (
    <div className={classNames('RxJS', {
      [externalClass]: externalClass
    })}>
      <div className="RxJS__buttons-wrap">
        <Button
          externalClass="RxJS__button-interval"
          theme={ButtonProps.theme.blue}
          active
          focus
        >
          Subscribe
        </Button>
        <Button
          externalClass="RxJS__button-interval"
          theme={ButtonProps.theme.orange}
          active
          focus
        >
          Unsubscribe
        </Button>
      </div>
      <div className="RxJS__results">
      </div>
    </div>
  )
}
