import { all, call, put, takeEvery } from 'redux-saga/effects'
import { actionsCounter, actionTypesCounter } from './components/counter/actions-counter'

function* helloSaga() {
  yield call(() => console.log('Hello, Saga!'))
}

export const delay = ms => new Promise(res => setTimeout(res, ms))

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put(actionsCounter.increment())
} 

function* watchIncrementAsync() {
  yield takeEvery(actionTypesCounter.INCREMENT_ASYNC, incrementAsync)
}

export function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
