import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import shopCoverImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../hooks/UseMenu";
import FoodCard from "../../Components/Food card/FoodCard";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import OrderTabs from "./OrderTabs";
export default function OurShop() {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Our Shop</title>
      </Helmet>
      <div className="mb-5">
        <Cover img={shopCoverImg} title={"our shop"}></Cover>
      </div>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Dessert </Tab>
          <Tab>Pizza </Tab>
          <Tab>Soup </Tab>
          <Tab> Salad </Tab>
          <Tab> Drinks </Tab>
        </TabList>
        <TabPanel>
         <OrderTabs items={dessert}></OrderTabs>
        </TabPanel>
        <TabPanel>
         <OrderTabs items={pizza}></OrderTabs>
        </TabPanel>
        <TabPanel>
         <OrderTabs items={soup}></OrderTabs>
        </TabPanel>
        <TabPanel>
         <OrderTabs items={salad}></OrderTabs>
        </TabPanel>
        <TabPanel>
         <OrderTabs items={drinks}></OrderTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
}
