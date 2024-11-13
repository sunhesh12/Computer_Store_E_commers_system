"use client";
import React, { useEffect, useState } from "react";
import { parseString } from "xml2js"; // Correct import for xml2js
import style from "./page.module.css";
import ImageSlider from "@/app/component/ImageSlider";
import Card from "@/app/component/ItemCard/Card";
import useFetchXml from "../../component/userFetchFiles/useFetchXml";

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

  const { data: products, loading, error } = useFetchXml("/XmlFiles/products.xml");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <Card key={index} productArray={products} index={index} />
            ))
          ) : (
            <div>No products available</div> // Optional: Handle the case when products are empty
          )}
        </div>
        <div className={style.writeClick}></div>
      </div>
    </div>
  );
}
