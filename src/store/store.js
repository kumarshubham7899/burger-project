import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;
