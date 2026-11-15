import { Link } from "react-router-dom"
import logo from "../../assets/Navbar/Logo.svg"
import Badge from "../Badge"

function NavButton({buttonText, pathToPage, bgColor="bg-transparent"}: {buttonText: string, pathToPage: string, bgColor?: string}){
  return(
    <Link to={pathToPage} className={`flex px-4 py-2 items-center justify-center gap-2
      rounded-full border-2 border-ink
      text-ink font-sans text-[16px] font-bold leading-none ${bgColor}`}>{buttonText}</Link>
  )
}

function LogOut(){
  return(
    <Link to="/login" className="flex px-6 py-3 items-center justify-center gap-2
      rounded-full border-2 border-ink
      text-ink font-sans text-[16px] font-bold leading-none">Uitloggen</Link>
  )
}

export default function NavBar(){
  return (
    // desktop only for now
    <div className="flex px-20 py-5 justify-between items-center self-stretch
      border-b-2 border-ink">
        <img src={logo} alt="" />
        <nav className="flex gap-2">
            <NavButton buttonText="Boeken" pathToPage="/boeken" bgColor="bg-sunny"  />
            <NavButton buttonText="Auteurs" pathToPage="/auteurs" />
            <NavButton buttonText="Genres" pathToPage="/genres" />
        </nav>
        <div className="flex gap-2 items-center">
          <Badge />
          <LogOut />
        </div>
    </div>
  )
}

// Fix die kleuren en isAdmin ? admin badge : niets
// Alr buddy ternary operator in je comment.