import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Navbar/Logo.svg";
import Badge from "../Badge";
import { useAuth } from "../../context/AuthContext";

type NavButtonProps = {
  buttonText: string;
  pathToPage: string;
  activeColor: string; // volledige class, bv. "bg-book"
};

function NavButton({ buttonText, pathToPage, activeColor }: NavButtonProps) {
  return (
    <NavLink
      to={pathToPage}
      className={({ isActive }) =>
        `flex items-center justify-center gap-2 rounded-full border-2 border-ink px-4 py-2
         font-sans text-[16px] font-bold leading-none text-ink
         ${isActive ? activeColor : "bg-transparent hover:bg-paper-deep"}`
      }
    >
      {buttonText}
    </NavLink>
  );
}

export default function NavBar() {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const pillClass =
    "flex items-center justify-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-sans text-[16px] font-bold leading-none text-ink";

  return (
    // desktop only for now
    <header className="flex items-center justify-between self-stretch border-b-2 border-ink px-20 py-5">
      <img src={logo} alt="" />

      <nav className="flex gap-2">
        <NavButton buttonText="Boeken" pathToPage="/boeken" activeColor="bg-book" />
        <NavButton buttonText="Auteurs" pathToPage="/auteurs" activeColor="bg-author" />
        <NavButton buttonText="Genres" pathToPage="/genres" activeColor="bg-genre" />
      </nav>

      <div className="flex items-center gap-2">
        {isAdmin ? (
          <>
            <Badge />
            <button onClick={handleLogout} className={pillClass}>
              Uitloggen
            </button>
          </>
        ) : (
          <Link to="/login" className={pillClass}>
            Inloggen
          </Link>
        )}
      </div>
    </header>
  );
}