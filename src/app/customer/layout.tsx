import SideNavbar from '../component/sideNavBar';

export default function customerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container">
        <div className="sideNav">
          {Array.from({ length: 10 }).map((_, index) => (
            <SideNavbar key={index} src="/asus.png" text={`ASUS ROG ${index + 1}`} />
          ))}
        </div>
        <div className="contain">{children}</div>
      </div>
    </>
  );
}
