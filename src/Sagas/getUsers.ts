import { call, put, takeEvery } from "redux-saga/effects";
import { REQUEST_USERS, usersReceived } from "../actions/user";
import { fetchUsersData } from "../api";
import { CustomAction } from "../store";

function* loadUsers(action: CustomAction<number>): Generator<any, any, unknown> {
  try {
    const response: any = yield call(fetchUsersData, action.payload);
    yield put(usersReceived(response.results));
  } catch (error) {
    console.error(error);
  }
}

export default function* peopleSaga() {
  yield takeEvery(REQUEST_USERS, loadUsers);
}
