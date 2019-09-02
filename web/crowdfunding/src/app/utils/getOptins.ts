import { LOCALSTORAGE_TOKEN_NAME } from "../../globals";

export const getOptions = () => {
  const token: string = localStorage.getItem(LOCALSTORAGE_TOKEN_NAME);

  return {
    headers: {
      token,
    },
  }
};
