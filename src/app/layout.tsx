import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import img from "../../public/Search.png";
import notificatioIcon from "../../public/Notification.png";
import curtIcon from "../../public/curt.png";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Computer Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <div className="wrapper">
        <div className="item">
          <div className="logo">
            <h1 className="logo-title">
              <b>
                <i>LOGO HERE</i>
              </b>
            </h1>
            <p className="logo-description">
              <b>
                <i>Computer system store</i>
              </b>
            </p>
          </div>
          <div className="Navigation">
            <ul>
              <li>
                <Link href={"/"} className="linkofNav">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/custome/about"} className="linkofNav">
                  About
                </Link>
              </li>
              <li>
                <Link href={""} className="linkofNav">
                  Service
                </Link>
              </li>
              <li>
                <Link href={""} className="linkofNav">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navEnd">
            <div className="searchDiv">
              <Image
                style={{ width: "90%", height: "70%" }}
                src={curtIcon}
                alt=""
              />
              <div className="notitficationNumber">
                <span>
                  <h2 className="notitficationNumberText">9</h2>
                </span>
              </div>
            </div>
            <div className="searchDiv">
              <Image
                style={{ width: "90%", height: "70%" }}
                src={notificatioIcon}
                alt=""
              />
              <div className="notitficationNumber">
                <span>
                  <h2 className="notitficationNumberText">9</h2>
                </span>
              </div>
            </div>
            <div className="searchDiv" style={{marginRight: "18px"}}>
              <Image style={{ width: "90%", height: "70%" }} src={img} alt="" />
            </div>
          </div>
        </div>
        {children}
        <div className="footer"></div>
        </div>
      </body>
    </html>
  );
}
