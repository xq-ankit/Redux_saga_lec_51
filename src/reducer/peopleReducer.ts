import { produce } from "immer";
import { PersonType } from "../types";
import { REQUEST_USERS, USERS_RECEIVED } from "../actions/user";
import { CustomAction } from "../store";

export type PeopleState = {
  data: { [id: string]: PersonType };
  isLoading: boolean;
};

export const initialPeopleState: PeopleState = {
  data: {},
  isLoading: false,
};

const peopleReducer = (state: PeopleState = initialPeopleState, action: CustomAction<any>): PeopleState => {
  switch (action.type) {
    case REQUEST_USERS:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });

    case USERS_RECEIVED:
      const formattedData = action.payload.reduce((acc: { [id: string]: PersonType }, person: any) => {
        acc[person.id.value] = {
          id:person.id.value,
            name: person.name.first + " " + person.name.last,
            image: person.picture.medium,
            email: person.email,
        };
        return acc;
      }, {});

      return produce(state, (draft) => {
        draft.data = formattedData;
        draft.isLoading = false;
      });

    default:
      return state;
  }
};

export default peopleReducer;
