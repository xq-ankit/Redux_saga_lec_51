import { State } from "../store";

export const getPeopleData = () => (state: State) => state.people.data;
export const isDataLoading = () => (state: State) => state.people.isLoading;
