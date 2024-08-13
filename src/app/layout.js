import SideBar from "@/components/sidebar/SideBar"
import SearchBar from "@/components/searchBar/SearchBar"
import "./globals.css"

export const metadata = {
  title: "FILMLY",
  description: "Your favorite streaming app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col bg-dark_gray">
        <div className="flex flex-grow">
          <SideBar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  )
}
