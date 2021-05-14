import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducerCounter } from './components/counter/reducer-counter'

const reducers = combineReducers({
  counter: reducerCounter,
})

const sagaMiddleware = createSagaMiddleware()

const composedEnhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
)

export const store = createStore(reducers, composedEnhancer)

sagaMiddleware.run(rootSaga)
