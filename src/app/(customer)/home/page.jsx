"use client";

import React from "react";
import style from "./page.module.css";
import ImageSlider from "../../component/ImageSlider";
import Card from "@/app/component/ItemCard/Card";

export default function Page() {
  const img = [
    { src: "/bg-1.jpeg", text: "Item 1", pl: "200px", pt: "200px" },
    { src: "/bg-2.jpg", text: "Item 2", pl: "100px", pt: "100px" },
    { src: "/bg-3.jpg", text: "Item 3", pl: "100px", pt: "100px" },
    { src: "/bg-4.jpg", text: "Item 4", pl: "100px", pt: "100px" },
    { src: "/bg-5.jpg", text: "Item 5", pl: "100px", pt: "100px" },
    { src: "/bg-6.jpg", text: "Item 6", pl: "100px", pt: "100px" },
    { src: "/bg-7.jpg", text: "Item 7", pl: "100px", pt: "100px" },
  ];

  // Product data
  const products = [
    {
      src: "/laptop.png",
      model: "HP LAPTOP 15-FD206TU CORE I5 13TH GEN",
      type: "Lap Top",
      prize: "300 000",
    },
    {
      src: "/laptop.png",
      model: "DELL Inspiron 3501",
      type: "Lap Top",
      prize: "250 000",
    },
    {
      src: "/laptop.png",
      model: "HP LAPTOP 15-FD206TU CORE I5 13TH GEN",
      type: "Lap Top",
      prize: "300 000",
    },
    {
      src: "/laptop.png",
      model: "DELL Inspiron 3501",
      type: "Lap Top",
      prize: "250 000",
    },
    {
      src: "/laptop.png",
      model: "HP LAPTOP 15-FD206TU CORE I5 13TH GEN",
      type: "Lap Top",
      prize: "300 000",
    },
    {
      src: "/laptop.png",
      model: "DELL Inspiron 3501",
      type: "Lap Top",
      prize: "250 000",
    },
    // Add more products as needed...
  ];

  return (
    <div className={style.Mainwrapper}>
      {/* Cover background image */}
      <div className={style.imageAndDataWrapper}>
        <div className={style.imageChangeDiv}>
          <ImageSlider img={img} time={5000} />
        </div>
      </div>

      {/* Product cards */}
      <div className={style.mainWrapper}>
        <div className={style.writeClick}></div>
        <div className={style.CurtContainer}>
        {products.map((product, index) => (
          <Card key={index} productArray={products} index={index} />
        ))}
        </div>
        <div className={style.writeClick}></div>
      </div>
    </div>
  );
}
