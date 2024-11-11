'use client';

import { useEffect, useState } from 'react';
import React from "react";
import Image from "next/image";
import useHover from '../component/useHover'; // Adjust path based on folder structure

export default function SideNavBar({ src, text }) {

  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(Date.now()); // Ensure this runs only on the client.
  }, []);

  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <div className="SideNavBar">
      <div
        className="SideNavBarItem"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          display: "flex", // Ensure items are horizontal
          alignItems: "center",
        }}
      >
        <Image
          src={src}
          alt="SideNav Image"
          width={50} 
          height={50}
          style={{ marginRight: "10px" }}
        />
        <h3 style={{ color: hoveredIndex ? "var(--myYellow)" : "var(--myWhite)" }}>{text}</h3>
      </div>
    </div>
  );
}



// import SideNavBar from './SideNavBar';

// export default function ParentComponent() {
//   const items = [
//     { src: '/image1.png', text: 'Item 1' },
//     { src: '/image2.png', text: 'Item 2' },
//   ];

//   return (
//     <div>
//       {items.map((item, index) => (
//         <SideNavBar key={index} src={item.src} text={item.text} index={index} />
//       ))}
//     </div>
//   );
// }
