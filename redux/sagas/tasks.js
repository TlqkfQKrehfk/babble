import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../api/tasks'

function* addTask(action) {
  console.log("-- Saga: action.type --")
  console.log(action);

  // 1. back-end와 REST API 연동
  // yield call (비동기 함수명, 매개변수, 매개변수...)
  const result = yield call(api.post, action.payload)
  console.log("--")
  // 2. state를 변경하는 reducer 함수를 실행
  yield put({ type: "ADD_TASK_SUCCEEDED", payload: action.payload });


}

function* removeTask(action) {
  console.log("-- Saga: action type --")
  console.log(action);
  const result = yield call(api.delete, action.payload)
  console.log("--")
  yield put({ type: "REMOVE_TASK_SUCCEEDED", payload: action.payload });
}

function* fetchTasks(action) {
  console.log("-- Saga: action.type --")
  console.log(action);
  // 1. 비동기 함수 호출(API연동)
  const result = yield call(api.list);
  console.log("--saga : api result--")
  console.log(result.data);

  // 2. dispatch를 실행하는 부분
  yield put({ type: 'FETCH_TASKS_SUCCEEDED', payload: result.data })
}

function* tasksSaga() {

  // 액션이 발생했을 때, 제너레이터 함수로 처리를 하라
  // dispatch({type:"ADD_TASK", paylod:item})

  // takeEvery: 해당 액션이 발생 할때마다 모두 처리

  // yile takeEvery("액션타입, 처리할 제너레이터함수")
  yield takeEvery("ADD_TASK", addTask);

  yield takeEvery("REMOVE_TASK", removeTask);
  // takeLatest: 해당 액션이 발생 할 때 가장 나중에 호출할 액션 처리
  //             이전의 액션은 취소가 됨
  // 주로 api를 통해서 데이터를 조회해 올 때 사용
  // yield takeLatest("액션타입", 제너레이터 함수)
  yield takeLatest("FETCH_TASKS", fetchTasks);

}

export default tasksSaga