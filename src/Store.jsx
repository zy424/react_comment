import createBrowserHistory from 'history/createBrowserHistory'
import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import Reducers from './reducers/Reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// Create a history
const history = createBrowserHistory();

// Create middlewares


// Create store
const store = createStore(
  Reducers,
  compose(
    applyMiddleware(thunk),
  ),
);

const action = (type, payload) => store.dispatch({ type, payload });

// Export history and store
export { history, store, action };