import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

export default function MenuCategory({ items, title, img }) {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}

      <section className="grid md:grid-cols-2 gap-10 mt-10 mb-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </section>
      <Link to={'/ourshop'}>
        {" "}
        <button className="btn btn-outline btn-neutral m-10 border-0 border-b-2 text-white border-b-orange-600 uppercase">
          order now
        </button>
      </Link>
    </div>
  );
}
