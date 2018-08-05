import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'

let middlewares = []

const INITIAL_STATE = {
  app: {
    isEditing: false,
  },
}

middlewares.push(thunk)

const logger = createLogger({
  predicate: () => process.env.NODE_ENV === 'development'
})

middlewares.push(logger)

const store = createStore(reducers, INITIAL_STATE, compose(applyMiddleware(...middlewares)))

export default store
