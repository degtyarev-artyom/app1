import { all, call, put, takeEvery, /* takeLatest,  */take/* , fork */ } from 'redux-saga/effects'
import { sandboxActions, sandboxActionTypes } from 'redux/pages/sandbox/sandbox-actions'
import { setThemeCodeLS, setThemeLS } from 'functions/staff-styling-func'
import { EStaffActionTypes } from './staff/staff-types'

/* hello-saga */
function* helloSaga() {
  // yield call(() => console.log('Hello, Saga!'))
}

/* delay-function */
export const delay = ms => new Promise(res => setTimeout(res, ms))
export const delayData = (data, ms = 0) => new Promise(res => setTimeout(() => res(data), ms))

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
    /* const action =  */yield take('*')
    // yield call(() => console.log(action))
  }
}

function* staffSetTheme({ payload }) {
  yield call(setThemeLS, payload)
}

function* watchStaffSetTheme() {
  yield takeEvery(EStaffActionTypes.SET_THEME, staffSetTheme)
}

function* staffSetThemeCode({ payload }) {
  yield call(setThemeCodeLS, payload)
}

function* watchStaffSetThemeCode() {
  yield takeEvery(EStaffActionTypes.SET_THEME_CODE, staffSetThemeCode)
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
