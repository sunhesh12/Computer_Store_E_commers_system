import React from "react";
import NavButton from "../NavigationBar/NavigationButton";

export default function NavBarBody() {
  return (
    <>
      <div className="Navigation">
        <ul>
          <NavButton href={"/home"} text={"Home"}></NavButton>
          <NavButton href={"/about"} text={"ABout"}></NavButton>
          <NavButton href={"/services"} text={"Service"}></NavButton>
          <NavButton href={"/contact"} text={"Contact"}></NavButton>
        </ul>
      </div>
    </>
  );
}
