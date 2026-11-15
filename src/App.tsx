import{Route, Routes, Navigate} from "react-router-dom"

import Login from "./pages/Login/Login.tsx";
import Boeken from "./pages/Boeken.tsx";
import Auteurs from "./pages/Auteurs.tsx";
import Genres from "./pages/Genres.tsx";

import MainLayout from "./components/Layout/MainLayout.tsx";

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

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
