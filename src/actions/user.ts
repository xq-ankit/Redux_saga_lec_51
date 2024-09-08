import { ActionCreator } from "redux";
import { CustomAction } from "../store";
import { PersonType } from "../types";

// Action types
export const REQUEST_USERS = "REQUEST_USERS";
export const USERS_RECEIVED = "USERS_RECEIVED";

// Action creators
export const requestUsers: ActionCreator<CustomAction<number>> = (count: number) => ({
  type: REQUEST_USERS,
  payload: count,
});

export const usersReceived: ActionCreator<CustomAction<PersonType[]>> = (users: any[]) => ({
  type: USERS_RECEIVED,
  payload: users,
});
