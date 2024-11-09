import SideNavbar from "../component/sideNavBar";

export default function customerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Products = [];

  while (Products.length < 20) {
    Products.push({ src: "/asus.png", text: "ASUS ROG" });
  }
  return (
    <>
      <div className="container">
        <div className="sideNav">
          {Products.map((Products, index) => (
            <SideNavbar
              key={index}
              src={Products.src}
              text={Products.text}
            />
          ))}
        </div>
        <div className="contain">{children}</div>
      </div>
    </>
  );
}
