"use client";
import "./globals.css"; // Global styles
import NavBar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import { usePathname } from "next/navigation";
import SessionProvider from "@/utls/SessionProvider";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hiddenRoutes = ["/", "/login", "/register"];
  const showHeaderFooter = pathname ? !hiddenRoutes.includes(pathname) : false;

  return (
    <>
      {/* Conditionally render NavBar */}
      {showHeaderFooter && <NavBar />}
      <main>{children}</main>
      {/* Conditionally render Footer */}
      {showHeaderFooter && <Footer />}
    </>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div
          className="min-h-screen bg-cover bg-center flex flex-col"
          style={{ backgroundImage: "url('/images/Dash.jpeg')" }}
        >
          {/* Provide session context to the application */}
          <SessionProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
