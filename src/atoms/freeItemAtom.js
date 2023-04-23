import { atom } from "recoil";

const freeItemAtom = atom({
  key: "freeItemAtom",
  default: false,
});

export default freeItemAtom;
