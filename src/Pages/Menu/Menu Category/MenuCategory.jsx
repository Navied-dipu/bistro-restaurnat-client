import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

export default function MenuCategory({ items, title, img }) {
  return (
    <div>
     { title && <Cover img={img} title={title}></Cover>}
      <section className="grid md:grid-cols-2 gap-10 mt-10 mb-10">
               {items.map((item) => (
                 <MenuItem key={item._id} item={item}></MenuItem>
               ))}
             </section>
    </div>
  );
}
