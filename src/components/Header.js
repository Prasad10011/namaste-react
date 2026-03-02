import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const {loggedInUser} = useContext(UserContext);
  const cartItems = useSelector((store)=> store.cart.items);
  useEffect(() => {
    console.log("use effect called");
  }, []);

  return (
    <div className="flex justify-between items-center shadow-lg bg-gray-50 mx-2 my-2">
      <div className="logo-container">
        <img className="w-45" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-2 m-2">
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="about">About</Link></li>
          <li className="px-2"><Link to="/contact">Contact Us</Link></li>
          <li className="px-2"><Link to="/cart">Cart - {cartItems.length} items</Link></li>
          <button name="login"
            className={btnName === "Login" ? "login" : "logout"}
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
          <li className="px-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
