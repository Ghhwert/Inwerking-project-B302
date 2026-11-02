import{Route, Routes, Navigate, Outlet} from "react-router-dom"

import Login from "./pages/Login.tsx";
import Boeken from "./pages/Boeken.tsx";
import Auteurs from "./pages/Auteurs.tsx";
import Genres from "./pages/Genres.tsx";

import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";



function MainLayout(){
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      <Route path="/login" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/boeken" element={<Boeken />} />
        <Route path="/auteurs" element={<Auteurs />} />
        <Route path="/genre" element={<Genres />} />
      </Route>

      <Route path="*" element={<Navigate to="/boeken" replace />} />
    </Routes>
  )
}
