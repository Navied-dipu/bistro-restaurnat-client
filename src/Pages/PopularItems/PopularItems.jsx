import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle.jsx/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";

export default function PopularItems() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <div className="mb-10">
      <section>
        <SectionTitle
          subheading={"Chake it out"}
          heading={"from our menu"}
        ></SectionTitle>
        <section className="grid md:grid-cols-2 gap-10">
          {menu.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </section>
      </section>
    </div>
  );
}
