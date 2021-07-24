import { all, call, put, takeEvery, /* takeLatest,  */take/* , fork */ } from 'redux-saga/effects'
import { componentsActions, componentsActionTypes } from 'redux/pages/components/components-actions'
import { commonActionTypes } from './common-actions'

/* hello-saga */
function* helloSaga() {
  yield call(() => console.log('Hello, Saga!'))
}

/* delay-function */
export const delay = ms => new Promise(res => setTimeout(res, ms))

/* increment-async */
// export function* incrementAsync() {
//   yield call(delay, 1000)
//   yield put(componentsActions.counterIncrement())
// } 
// function* watchIncrementAsync() {
//   yield takeEvery(componentsActionTypes.COUNTER_INCREMENT_ASYNC, incrementAsync)
// }

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put(componentsActions.counterIncrement())
  // yield all([
  //   call(delay, 1000),
  //   put(componentsActions.counterIncrement()),
  // ])
}
function* watchIncrementAsync() {
  yield takeEvery(componentsActionTypes.COUNTER_INCREMENT_ASYNC, incrementAsync)
}

/* all actions */
function* watchActions() {
  while (true) {
    const action = yield take('*')
    yield call(() => console.log(action))
  }
}

function* setTheme({ theme }) {
  yield call(() => localStorage.setItem('theme', theme))
}

function* watchSetTheme() {
  yield takeEvery(commonActionTypes.SET_THEME, setTheme)
}

/* export-root-saga */
export function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchActions(),
    watchSetTheme(),
  ])
}
