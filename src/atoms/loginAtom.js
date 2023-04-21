import { atom } from "recoil";

const loginStateAtom = atom({
  key: "loginState",
  default: false,
});

export default loginStateAtom;
