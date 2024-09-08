export interface TodoType {
  id: string;
  title: string;
  completed: boolean;
}
export type TodoNormalizedType = { [key: string]: TodoType };

export interface PersonType {
  id: string;
  name: string;
  image: string;
  email: string;
}

export type UserNormalizedType = { [key: string]: PersonType };
