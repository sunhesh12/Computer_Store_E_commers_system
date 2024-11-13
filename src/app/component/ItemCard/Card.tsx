"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import useHover from "../../component/useHover";
import style from "./page.module.css";

interface Product {
  src: string;
  model: string;
  type: string;
  prize: string;
}

interface CardProps {
  productArray: Product[];
  index: number;
}

export default function Card({ productArray, index }: CardProps) {
  const [isClient, setIsClient] = useState(false);
  const productContainerRef = useRef<HTMLDivElement>(null);

  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHover();

  useEffect(() => {
    setIsClient(true); // Ensure hydration works correctly
  }, []);

  if (!isClient) return null; // Prevent SSR issues

  // Get the specific product based on the index
  const product = productArray[index];

  return (
    <div ref={productContainerRef}>
      <div
        className={style.curtDiv}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <div className={style.imageIcon}>
          <Image src={product.src} alt={product.model} width={200} height={100} />
        </div>
        <div className={style.Description}>
          <p
            style={{
              color: hoveredIndex === index ? "var(--myYellow)" : "var(--myWhite)",
            }}
          >
            {product.model}
          </p>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p
            style={{
              color: hoveredIndex === index ? "var(--myYellow)" : "var(--myWhite)",
              fontSize: "60%",
            }}
          >
            -{product.type}-
          </p>
          <h2
            style={{
              color: hoveredIndex === index ? "var(--myYellow)" : "var(--myWhite)",
              marginTop: "10px",
            }}
          >
            RS.{product.prize}/=
          </h2>
        </div>
      </div>
    </div>
  );
}
