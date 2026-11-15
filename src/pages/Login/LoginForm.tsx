import Field from "../../components/Field"

export default function LoginForm(){
  return(
    <form className="form flex flex-col w-full items-start gap-6">
      <Field label="E-MAILADRES" placeholder="E-mailadres" id="email" type="email" />
      <Field label="WACHTWOORD" placeholder="Wachtwoord" id="wachtwoord" type="password" />
      <button type="submit" className="button flex px-3 py-6 content-center items-center justify-center self-stretch  gap-2
        rounded-full border-2 border-ink bg-cobalt shadow-hard-sm
        font-sans text-white text-[16px] font-bold leading-none
        transition duration-150 ease-in-out hover:bg-mint active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
      >Inloggen</button>
    </form>
  )
}