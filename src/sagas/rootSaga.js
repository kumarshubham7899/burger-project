import { all, fork } from 'redux-saga/effects';
import * as count1Sagas from './CountSaga/firstSaga';
import * as count2Sagas from './CountSaga/secondSaga';

export default function* rootSaga() {
  yield all(
    [...Object.values(count1Sagas), ...Object.values(count2Sagas)].map(fork)
  );
}
