import { put, takeLatest } from 'redux-saga/effects';
import { firstClickIncrease } from '../../actions/firstAction';

function* handleFirstClick(action) {
  try {
    yield put(firstClickIncrease(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* watchForFirstCLick() {
  yield takeLatest('FIRST_CLICK', handleFirstClick);
}
