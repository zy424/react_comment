import createBrowserHistory from 'history/createBrowserHistory';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

// Create a history
const history = createBrowserHistory();

// Create middlewares

const middlewares = [];

middlewares.push(logger);

// Create store
const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
  ),
);

const action = (type, payload) => store.dispatch({ type, payload });

// Export history and store
export { history, store, action };