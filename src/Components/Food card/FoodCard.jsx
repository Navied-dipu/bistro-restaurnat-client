import React, { useContext } from "react";
import MenuItem from "../../Pages/Shared/MenuItem/MenuItem";
import { AuthContext } from "../../Providers/AuthProviders";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


export default function FoodCard({ item }) {
  const { image, name, price, recipe, _id } = item;
  const naviget = useNavigate();
  const { user } = useAuth();
  const location = useLocation();
  const axiosSecure=useAxiosSecure()
  const [,refetch]=useCart()
  const handleAddtocart = () => {
    // console.log(food, user.email);
    const cartInfo = {
      menu_id: _id,
      email: user.email,
      image,
      name,
      price,
      recipe,
    };
    if (user && user.email) {
      // send data to database
      axiosSecure.post("/carts", cartInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} successfuly`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refatch to update the count
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "You are not login",
        text: "YPlease login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login, Please",
      }).then((result) => {
        if (result.isConfirmed) {
          naviget("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className=" absolute right-0 mr-4 mt-2 pl-2 pr-2 pb-0.5 text-white rounded-sm bg-slate-900">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={ handleAddtocart}
              className="btn btn-outline btn-neutral border-0 border-b-2 text-white border-b-orange-600 uppercase"
            >
              add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
