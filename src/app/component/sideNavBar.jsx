import React from 'react';
import Image from 'next/image';

export default function SideNavBar({ src, text }) {
  return (
    <div className='SideNavBar'>
      <Image 
        src={src} 
        alt="SideNav Image" 
        width={50}  // Set a suitable width
        height={50} // Set a suitable height
        style={{ marginRight: '10px' }} // Optional: Add some spacing
      />
      <h3>{text}</h3>
    </div>
  );
}
