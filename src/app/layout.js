import SideBar from "@/components/sidebar/SideBar";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: 'FILMLY',
  description: 'Your favorite streaming app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col bg-dark_gray">
        <div className="flex flex-grow">
          <SideBar />
          <div className="flex flex-col flex-grow px-14">
            <Navbar />
            <div className="flex-grow p-4 lg:p-8">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
