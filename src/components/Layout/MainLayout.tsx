import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

export default function MainLayout(){
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}