"use client";

import React, { useState, useEffect, useRef } from "react";
import useHover from "../../component/useHover"; // Adjust the path based on your folder structure
import style from "./page.module.css";
import Image from "next/image";
import ImageSlider from "../../component/ImageSlider";

export default function Page() {
  const [isClient, setIsClient] = useState(false);
  const [product, setProduct] = useState([]);
  const productContainerRef = useRef(null);

  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHover();

  const img = [
    { src: "/bg-1.jpeg", text: "Item 1", pl: "200px", pt: "200px" },
    { src: "/bg-2.jpg", text: "Item 2", pl: "100px", pt: "100px" },
    { src: "/bg-3.jpg", text: "Item 3", pl: "100px", pt: "100px" },
    { src: "/bg-4.jpg", text: "Item 4", pl: "100px", pt: "100px" },
    { src: "/bg-5.jpg", text: "Item 5", pl: "100px", pt: "100px" },
    { src: "/bg-6.jpg", text: "Item 6", pl: "100px", pt: "100px" },
    { src: "/bg-7.jpg", text: "Item 7", pl: "100px", pt: "100px" },
  ];

  // Initialize the product list after the component mounts
  useEffect(() => {
    setIsClient(true);
    const productArray = [];
    while (productArray.length < 10) {
      productArray.push({
        src: "/laptop.png",
        model: "HP LAPTOP 15-FD206TU CORE I5 13TH GEN",
        type: "Lap Top",
        prize: "300 000",
      });
    }
    setProduct(productArray);
  }, []);

  // Scroll to the middle product after the product array is populated
  // useEffect(() => {
  //   if (product.length === 0) return;

  //   const middleIndex = Math.floor(product.length / 2);
  //   const container = productContainerRef.current;
  //   const middleProduct = container.children[middleIndex];

  //   if (middleProduct) {
  //     container.scrollTo({
  //       left:
  //         middleProduct.offsetLeft -
  //         container.offsetWidth / 2 +
  //         middleProduct.offsetWidth / 2,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [product]);

  if (!isClient) return null; // Prevent server-side rendering issues

  return (
    <div className={style.Mainwrapper}>
      {/* Cover background image */}
      <div className={style.imageAndDataWrapper}>
        <div className={style.imageChangeDiv}>
          <ImageSlider img={img} time={5000} />
        </div>
      </div>

      {/* Computer curs */}
      <div className={style.mainWrapper}>
        <div className={style.writeClick}></div>
        <div className={style.CurtContainer} ref={productContainerRef}>
          {product.map((product, index) => (
            <div
              key={index}
              className={style.curtDiv}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={style.imageIcon}>
                <Image
                  src={product.src}
                  alt={product.model}
                  width={200}
                  height={100}
                  index={index}
                />
              </div>
              <div className={style.Description}>
                <p
                  style={{
                    color:
                      hoveredIndex === index
                        ? "var(--myYellow)"
                        : "var(--myWhite)",
                  }}
                >
                  {product.model}
                </p>
              </div>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <p
                  style={{
                    color:
                      hoveredIndex === index
                        ? "var(--myYellow)"
                        : "var(--myWhite)",
                    marginTop: "10px",
                    fontSize: "60%",
                  }}
                >
                  -{product.type}-
                </p>
                <h2
                  style={{
                    color:
                      hoveredIndex === index
                        ? "var(--myYellow)"
                        : "var(--myWhite)",
                    marginTop: "10px",
                  }}
                >
                  RS.{product.prize}/=
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className={style.writeClick}></div>
      </div>
    </div>
  );
}
