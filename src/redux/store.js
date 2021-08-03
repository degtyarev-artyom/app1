import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from 'redux/root-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { staffReducer } from 'redux/staff/staff-reducer'
import { componentsReducer } from 'redux/pages/components/components-reducer'
import { sandboxReducer } from 'redux/pages/sandbox/sandbox-reducer'

const reducers = combineReducers({
  staff: staffReducer,
  components: componentsReducer,
  sandbox: sandboxReducer,
})

const sagaMiddleware = createSagaMiddleware()

const composedEnhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
)

export const store = createStore(reducers, composedEnhancer)

sagaMiddleware.run(rootSaga)
