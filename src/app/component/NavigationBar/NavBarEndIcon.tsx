import React from "react";
import Image, { StaticImageData } from "next/image";

interface RightSide{
    src:string | StaticImageData;
    altText:string;
    NoOfMesages:string;
}

export default function NavBarEnd({src,altText,NoOfMesages}:RightSide) {
  return (
    <>
      <div className="searchDiv">
        <Image style={{ width: "70%", height: "50%" }} src={src} alt={altText} width={50} height={50} />
        <div className="notitficationNumber">
          <span>
            <h4 className="notitficationNumberText">{NoOfMesages}</h4>
          </span>
        </div>
      </div>
    </>
  );
}
