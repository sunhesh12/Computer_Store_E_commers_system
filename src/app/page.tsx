import Image from "next/image";
import React from "react";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div>
        <Image src={"/bg-2.png"} alt="hello" width={100} height={100}></Image>
      </div>
    </>
  );
}
