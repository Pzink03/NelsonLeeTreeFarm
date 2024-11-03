import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import Navbar from "@/components/Navbar"
// import { Popup } from "@/components/Popup";



export function RootLayout() {
    return (
      <>

      {/* <Popup /> */}
      <div className="flex flex-col min-h-screen bg-stone-100">
        <Navbar />
        <div className="flex-grow my-4 min-h-screen ">
          <Outlet />
        </div>
        <Footer />
      </div>
      </>
    );
  }
