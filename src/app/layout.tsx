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
      {/* className={`${geistSans.variable} ${geistMono.variable}`} */}
      <body >
        <div className="wrapper">
          <div className="item">
            <div className="logo">
              <h1 className="logo-title">
                <b>
                  LOGO HERE
                </b>
              </h1>
              <p className="logo-description">
                <b>
                  Computer system store
                </b>
              </p>
            </div>
            <div className="Navigation">
              <ul>
                <li>
                  <div className="liwrapper">
                  <Link href={"/home"} className="linkofNav">
                    Home
                  </Link>
                  </div>
                </li>
                <li>
                <div className="liwrapper">
                  <Link href={"/about"} className="linkofNav">
                    About
                  </Link>
                  </div>
                </li>
                <li>
                <div className="liwrapper">
                  <Link href={"/services"} className="linkofNav">
                    Service
                  </Link>
                  </div>
                </li>
                <li>
                <div className="liwrapper">
                  <Link href={"/contact"} className="linkofNav">
                    Contact
                  </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="navEnd">
              <div className="searchDiv">
                <Image
                  style={{ width: "70%", height: "50%" }}
                  src={curtIcon}
                  alt=""
                />
                <div className="notitficationNumber">
                  <span>
                    <h4 className="notitficationNumberText">9</h4>
                  </span>
                </div>
              </div>
              <div className="searchDiv">
                <Image
                  style={{ width: "70%", height: "50%" }}
                  src={notificatioIcon}
                  alt=""
                />
                <div className="notitficationNumber">
                  <span>
                    <h4 className="notitficationNumberText">9</h4>
                  </span>
                </div>
              </div>
              <div className="searchDiv">
                <Image
                  style={{ width: "70%", height: "50%" }}
                  src={img}
                  alt=""
                />
              </div>
            </div>
          </div>
          {children}
          <div className="footer">
            <h1>This Project Done by Group 05.</h1>
          </div>
        </div>
      </body>
    </html>
  );
}
