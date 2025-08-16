import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import bannerImg from "../../assets/menu/banner.jpg"
import PopularItems from "../PopularItems/PopularItems";

export default function Menu() {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover img={bannerImg} title={'Our menu'}></Cover>
    </div>
  );
}
