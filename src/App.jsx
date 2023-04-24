import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useSetRecoilState } from "recoil";
import loginStateAtom from "./atoms/loginAtom";
import profileStateAtom from "./atoms/profileAtom";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

function App() {
  const loginState = useSetRecoilState(loginStateAtom);
  const profileState = useSetRecoilState(profileStateAtom);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      loginState(true);
      profileState(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  return (
    <div className=" font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {localStorage.getItem("user") && (
          <Route path="/success" element={<Success />} />
        )}
        <Route
          path="*"
          element={
            <h1 className="h-screen p-10 m-auto text-xl text-center text-white bg-black">
              404 Not Found
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
