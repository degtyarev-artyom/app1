import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { componentsReducer } from 'redux/pages/components/components-reducer'
import { commonReducer } from './common-reducer'

const reducers = combineReducers({
  common: commonReducer,
  components: componentsReducer,
})

const sagaMiddleware = createSagaMiddleware()

const composedEnhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
)

export const store = createStore(reducers, composedEnhancer)

sagaMiddleware.run(rootSaga)
