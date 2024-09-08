import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import peopleSaga from "./Sagas/getUsers";
import peopleReducer, { initialPeopleState } from "./reducer/peopleReducer";

export const initialAppState: State = {
  people: initialPeopleState,
};

export type CustomAction<T = any> = { type: string; payload: T };

const rootReducer = combineReducers({
  people: peopleReducer,
});

export type State = ReturnType<typeof rootReducer>;

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, undefined, applyMiddleware(sagaMiddleware));

// run saga
sagaMiddleware.run(peopleSaga);

export default store;
