import type { Dispatch, SetStateAction } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
};

export type ChildProps = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};
