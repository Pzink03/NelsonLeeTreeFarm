import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import Navbar from "@/components/Navbar"



export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className=" my-4 flex-grow grid grid-cols-1">
            <div>
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>

  )
}
