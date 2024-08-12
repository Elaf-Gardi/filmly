import SideBar from "@/components/sidebar/SideBar";
import Header from "@/components/header/Header";
import "./globals.css";

export const metadata = {
  title: 'FILMLY',
  description: 'Your favorite streaming app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <div className="flex flex-grow">
          <div className="w-60">
            <SideBar />
          </div>
          <div className="flex flex-col flex-grow">
            <div className="h-20 bg-red-50">
              <Header />
            </div>
            <div className="flex-grow">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
