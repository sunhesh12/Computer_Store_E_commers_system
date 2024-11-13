import React from "react";
import Image from "next/image";
import NavBarRightSide from "./NavBarEndIcon";

export default function NavBarEnd() {
    const img = "/Search.png";
    const notificatioIcon = "/Notification.png";
    const curtIcon = "/curt.png";
  return (
    <>
      <div className="navEnd">
        <NavBarRightSide src={curtIcon} altText="curt Icon" NoOfMesages="9" />
        <NavBarRightSide
          src={notificatioIcon}
          altText="curt Icon"
          NoOfMesages="9"
        />
        <div className="searchDiv">
          <Image
            style={{ width: "70%", height: "50%" }}
            src={img}
            alt=""
            width={50}
            height={50}
          />
        </div>
      </div>
    </>
  );
}
