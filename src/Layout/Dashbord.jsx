import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUsers,
  FaUtensils,
  FaUtensilSpoon,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

export default function Dashbord() {
  const [cart] = useCart();
  const isAdmin = true;
  return (
    <div className="flex ">
      {/* dashbord side ber */}
      <div className="w-64 min-h-screen  bg-amber-700">
        <div className="text-center mt-6">
          <h4 className="text-4xl uppercase">bistro boss</h4>
          <p className="text-2xl uppercase">resturant</p>
        </div>
        <ul className=" p-4 space-y-3">
          {isAdmin ? (
            <>
              <li className="flex items-center">
                <FaHome></FaHome>
                <NavLink className="ml-3" to="/dashbord/adminhome">
                  Admin Home
                </NavLink>
              </li>
              <li className="flex items-center">
                <FaUtensils></FaUtensils>
                <NavLink className="ml-3" to="/dashbord/addItem">
                  Add Item
                </NavLink>
              </li>
              <li className="flex items-center">
                <FaList></FaList>
                <NavLink className="ml-3" to="/dashbord/manageitem">
                  Manage Item
                </NavLink>
              </li>
              <li className="flex items-center">
                <FaBook></FaBook>
                <NavLink className="ml-3" to="/dashbord/managebooking">
                  Manage Booking
                </NavLink>
              </li>
              <li className="flex items-center">
                <FaUsers></FaUsers>
                <NavLink className="ml-3" to="/dashbord/alluser">
                  All User
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li className="flex items-center">
                <FaHome></FaHome>
                <NavLink className="ml-3" to="/dashbord/userhome">
                  User Home
                </NavLink>
              </li>
              <li className="flex items-center">
                <FaCalendar></FaCalendar>
                <NavLink className="ml-3" to="/dashbord/reservetion">
                  Reservation
                </NavLink>
              </li>
              <li className="flex items-center">
                <FaShoppingCart></FaShoppingCart>
                <NavLink className="ml-3" to="/dashbord/cart">
                  My Cart ( {cart.length} )
                </NavLink>
              </li>
              <li className="flex items-center">
                <FaAd></FaAd>
                <NavLink className="ml-3" to="/dashbord/review">
                  Review
                </NavLink>
              </li>
              <li className="flex items-center">
                <FaList></FaList>
                <NavLink className="ml-3" to="/dashbord/booking">
                  My Booking
                </NavLink>
              </li>
            </>
          )}
          {/* common  */}
          <div className="divider divider-neutral"></div>
          <li className="flex items-center">
            <FaHome></FaHome>
            <NavLink className="ml-3" to="/">
              Home
            </NavLink>
          </li>
          <li className="flex items-center">
            <FaSearch></FaSearch>
            <NavLink className="ml-3" to="/ourshop">
              Menu
            </NavLink>
          </li>
          <li className="flex items-center">
            <FaEnvelope></FaEnvelope>
            <NavLink className="ml-3" to="/ourshop">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashbord content */}
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
