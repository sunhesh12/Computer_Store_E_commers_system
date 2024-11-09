'use client';

import React from "react";
import Image from "next/image";
import useHover from '../component/useHover'; // Adjust path based on folder structure

export default function SideNavBar({ src, text }) {
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
        <h3 style={{ color: hoveredIndex ? "yellow" : "white" }}>{text}</h3>
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
