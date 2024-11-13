import React from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface Links {
  href: Url;
  text:String
}

export default function NavigationButton({ href,text }: Links) {
  return (
    <li>
      <div className="liwrapper">
        <Link href={href} className="linkofNav">
          {text}
        </Link>
      </div>
    </li>
  );
}
