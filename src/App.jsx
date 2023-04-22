import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useRecoilValue, useSetRecoilState } from "recoil";
import loginStateAtom from "./atoms/loginAtom";
import profileStateAtom from "./atoms/profileAtom";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import userCartStateAtom from "./atoms/userCartAtom";

function App() {
  const loginState = useSetRecoilState(loginStateAtom);
  const profileState = useSetRecoilState(profileStateAtom);
  const profileInfo = useRecoilValue(profileStateAtom);
  const setUserCart = useSetRecoilState(userCartStateAtom);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      loginState(true);
      profileState(JSON.parse(localStorage.getItem("user")));

      const getCategories = async () => {
        const querySnapshot = await getDocs(collection(db, "carts"));
        const carts = [];
        querySnapshot.forEach((doc) => {
          carts.push({ id: doc.id, ...doc.data() });
        });
        console.log(carts);
        const cart = carts.filter((cart) => cart.userId === profileInfo.uid);
        setUserCart(cart);
        console.log(cart[0]);
        return cart;
      };

      getCategories();
    }
  }, []);
  return (
    <div className=" font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
