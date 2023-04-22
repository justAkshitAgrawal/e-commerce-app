import { atom } from "recoil";

const userCartStateAtom = atom({
  key: "userCartState",
  default: [],
});

export default userCartStateAtom;
