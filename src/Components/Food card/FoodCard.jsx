import React from "react";
import MenuItem from "../../Pages/Shared/MenuItem/MenuItem";

export default function FoodCard({ item }) {
  const { image, name, price, recipe } = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
           <p className=" absolute right-0 mr-4 mt-2 pl-2 pr-2 pb-0.5 text-white rounded-sm bg-slate-900">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline btn-neutral border-0 border-b-2 text-white border-b-orange-600 uppercase">
              add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
