import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import PopularItems from "../PopularItems/PopularItems";
import UseMenu from "../../hooks/UseMenu";
import SectionTitle from "../../Components/SectionTitle.jsx/SectionTitle";
import MenuCategory from "./Menu Category/MenuCategory";
import bannerImg from "../../assets/menu/banner.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

export default function Menu() {
  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      {/* {main cover} */}
      <Cover img={bannerImg} title={"Our menu"}></Cover>
      <SectionTitle
        subheading={"Don't miss"}
        heading={"todays offer"}
      ></SectionTitle>
      {/* offered */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert */}
      <MenuCategory img={dessertImg} items={dessert} title={"Dessert"}></MenuCategory>
      {/* pizza */}
      <MenuCategory img={pizzaImg} items={dessert} title={"Pizza"}></MenuCategory>
      {/* salad */}
      <MenuCategory img={saladImg} items={dessert} title={"Salad"}></MenuCategory>
      {/* soup */}
      <MenuCategory img={soupImg} items={dessert} title={"Soup"}></MenuCategory>
    </div>
  );
}
