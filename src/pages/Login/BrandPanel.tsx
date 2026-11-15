import logo from "../../assets/LoginAssets/logo.svg"
import illustration from "../../assets/LoginAssets/illustration.svg"

export default function BrandPanel(){
  return ( 
    <div className="brand-panel hidden md:flex px-18 py-20 flex-col  justify-between items-start flex-[1_0_0] self-stretch 
      bg-cobalt border-r-2 border-ink">
      <a href="#">
        <img src={logo} alt="Logo" className="logo flex items-center gap-3" />
      </a>
      <img src={illustration} alt="" className="illustration w-7/8 max-w-[560px]" />
      <p className="welcome font-display text-[56px] font-semibold leading-none tracking-[-2.16px]
        text-white">Welkom terug,<br /><i>boekenwurm.</i></p>
    </div>
  )
}