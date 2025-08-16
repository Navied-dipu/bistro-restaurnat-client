import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle.jsx/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import UseMenu from "../../hooks/UseMenu";

export default function PopularItems() {
  const [menu] = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="mb-10">
      <section>
        <SectionTitle
          subheading={"Chake it out"}
          heading={"from our menu"}
        ></SectionTitle>
        <section className="grid md:grid-cols-2 gap-10">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </section>
      </section>
    </div>
  );
}
