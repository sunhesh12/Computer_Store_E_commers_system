"use client";

import React from "react";
import useHover from "../../component/useHover"; // Adjust the path based on your folder structure
import style from "./page.module.css";
import Image from "next/image";
// import img from "";
// import img2 from "laptop.png";

export default function Page() {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHover();
  const img = [
    { src: "/background.png", text: "Item 1" },
    // { src: "/background.png", text: "Item 2" },
  ];

  const product = [];

  {
    /*add item till atleast 10 item*/
  }
  while (product.length < 10) {
    product.push({
      src: "/laptop.png",
      model: "HP LAPTOP 15-FD206TU CORE I5 13TH GEN",
      type: "Lap Top",
      prize: "300 000",
    });
  }
  // const img2 = "/laptop.png";
  return (
    <div className={style.Mainwrapper}>
      {/*Cover background image*/}
      <div className={style.imageChnageDiv}>
        {img.map((img, index) => (
          <Image
            style={{ width: "100%", height: "100%" }}
            key={index}
            src={img.src}
            alt={img.text}
            width={1080}
            height={1080}
            index={index}
          />
        ))}
      </div>

      {/*computer curts */}
      <div className={style.CurtContainer}>
        {/* {Array.from({ length: 10 }).map((_, index) => ( */}
        {product.map((product, index) => (
          <div
            key={index}
            className={style.curtDiv}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={style.imageIcon}>
              {/* <Image src={img2} alt="" width={200} height={150} /> */}
              <Image
                style={{ width: "auto", height: "auto" }}
                key={index}
                src={product.src}
                alt=""
                width={200}
                height={100}
                index={index}
              />
            </div>
            <div className={style.Description}>
              <p
                style={{
                  color: hoveredIndex === index ? "yellow" : "white",
                }}
              >
                {product.model}
              </p>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <p
                style={{
                  color: hoveredIndex === index ? "yellow" : "white",
                  marginTop: "10px",
                  fontSize: "60%",
                }}
              >
                -{product.type}-
              </p>
              <h2
                style={{
                  color: hoveredIndex === index ? "yellow" : "white",
                  marginTop: "10px",
                }}
              >
                RS.{product.prize}/=
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
