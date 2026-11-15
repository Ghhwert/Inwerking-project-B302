import Badge from "../../components/Badge"
import LoginForm from "./LoginForm"
import { Link } from "react-router-dom"

export default function LoginPanel(){
  return (
    <div className="flex flex-col justify-center items-center flex-[1_0_0] self-stretch">
      <div className="flex w-4/5 max-w-[440px] px-10 py-10  flex-col gap-6
        rounded-xl border-2 border-ink bg-white shadow-hard">
        <div className="flex flex-col items-start gap-2 w-full">
          <Badge />
          <h1 className="font-display text-[44px] font-semibold leading-[105%] tracking-[-0.88px]">Inloggen</h1>
        </div>
        <LoginForm />
        <p className="self-stretch
          font-sans text-[14px] font-medium leading-[140%]">Zonder login kun je alles bekijken. Genres toevoegen, wijzigen of verwijderen mag alleen een admin.</p>
        <div className="login-guest">
        <Link to="/boeken" className="text-cobalt font-sans text-[16px] font-bold 
          hover:text-mint">Verder zonder inloggen→</Link>
        </div>
      </div>
    </div>
  )
}