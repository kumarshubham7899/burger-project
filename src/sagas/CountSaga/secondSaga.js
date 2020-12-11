import { put, takeLatest } from 'redux-saga/effects';
import { secondClickDecrease } from '../../actions/secondAction';

function* handleSecondClick(action) {
  try {
    yield put(secondClickDecrease(action.payload));
  } catch (error) {
    console.log(error);
  }
}
export function* watchForSecondCLick() {
  yield takeLatest('SECOND_CLICK', handleSecondClick);
}
