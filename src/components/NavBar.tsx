import logo from "../assets/logo.svg"

function NavButton({name, linkToPage}: {name: string, linkToPage: string}){
  return(
    <button className="flex px-4 py-2 items-center justify-center gap-2
      rounded-full border-2 border-ink
      text-ink font-sans text-[16px] font-bold leading-none"></button>
  )
}

export default function NavBar(){
  return (
    // desktop only for now
    <div className="flex px-20 py-5 justify-between items-center self-stretch
      border-b-2 border-ink">
        <img src={logo} alt="" />
        <nav>
            
        </nav>
    </div>
  )
}