"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ImageSlider.module.css";

interface ImageItem {
  pt:string;
  pl: string;
  src: string;
  text: string;
}

interface ImageSliderProps {
  img: ImageItem[];
  time?: number; // Optional time prop in milliseconds
}
export default function ImageSlider({ img, time = 3000 }: ImageSliderProps) {
  // Default to 3000ms
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setFade(false);
      
      //   setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
        setFade(true); // Start fade in
      }, 500);
    }, time); // Use time prop

    return () => clearInterval(interval); // Cleanup on unmount
  }, [img.length, time]); // Re-run if time changes

  const positionLeft = img[currentIndex].pl;
  const positionTop = img[currentIndex].pt;
  return (
    <div
      className={`${styles.imageChangeDiv} ${
        fade ? styles.fadeIn : styles.fadeOut
      }`}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={img[currentIndex].src}
          alt={img[currentIndex].text}
          fill
          sizes="(max-width: 600px) 100vw, 600px"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className={styles.overlay}></div>
        {/* <div className={styles.overlay2}></div> */}
        <div className={styles.overlay1}></div>
        <div className={styles.HeadTag}>
          <div
            style={{ left: positionLeft, top: positionTop }}
            className={styles.TextDiv}
          >
            <h1>{img[currentIndex].text}</h1>
            {/**add any componet to show customer on the image */}
          </div>
        </div>
      </div>
    </div>
  );
}
