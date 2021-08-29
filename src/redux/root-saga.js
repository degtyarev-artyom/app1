import { all, call, put, takeEvery, /* takeLatest,  */take/* , fork */ } from 'redux-saga/effects'
import { sandboxActions, sandboxActionTypes } from 'redux/pages/sandbox/sandbox-actions'
import { setThemeCodeLS, setThemeLS } from 'functions/staff-styling-func'
import { staffActionTypes } from './staff/staff-actions'

/* hello-saga */
function* helloSaga() {
  yield call(() => console.log('Hello, Saga!'))
}

/* delay-function */
export const delay = ms => new Promise(res => setTimeout(res, ms))

/* increment-async */
// export function* incrementAsync() {
//   yield call(delay, 1000)
//   yield put(sandboxActions.counterIncrement())
// } 
// function* watchIncrementAsync() {
//   yield takeEvery(sandboxActionTypes.COUNTER_INCREMENT_ASYNC, incrementAsync)
// }

export function* sandboxIncrementAsync() {
  yield call(delay, 1000)
  yield put(sandboxActions.counterIncrement())
  // yield all([
  //   call(delay, 1000),
  //   put(sandboxActions.counterIncrement()),
  // ])
}
function* watchSandboxIncrementAsync() {
  yield takeEvery(sandboxActionTypes.COUNTER_INCREMENT_ASYNC, sandboxIncrementAsync)
}

/* all actions */
function* watchActions() {
  while (true) {
    const action = yield take('*')
    yield call(() => console.log(action))
  }
}

function* staffSetTheme({ theme }) {
  yield call(setThemeLS, theme)
}

function* watchStaffSetTheme() {
  yield takeEvery(staffActionTypes.SET_THEME, staffSetTheme)
}

function* staffSetThemeCode({ theme }) {
  yield call(setThemeCodeLS, theme)
}

function* watchStaffSetThemeCode() {
  yield takeEvery(staffActionTypes.SET_THEME_CODE, staffSetThemeCode)
}

/* export-root-saga */
export function* rootSaga() {
  yield all([
    helloSaga(),
    watchSandboxIncrementAsync(),
    watchActions(),
    watchStaffSetTheme(),
    watchStaffSetThemeCode()
  ])
}
