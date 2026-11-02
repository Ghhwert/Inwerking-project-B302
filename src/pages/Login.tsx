import logo from "../assets/LoginAssets/logo.svg"
import illustration from "../assets/LoginAssets/illustration.svg"

function Login(){
    return (
        <div className="login flex items-start min-h-screen bg-paper">
          <div className="brand-panel hidden md:flex px-18 py-20 flex-col  justify-between items-start flex-[1_0_0] self-stretch 
            bg-cobalt border-r-2 border-ink">
            <a href="#">
              <img src={logo} alt="Logo" className="logo flex items-center gap-3" />
            </a>
            <img src={illustration} alt="Ilustration" className="illustration w-7/8 max-w-[560px]" />
            <p className="welcome font-display text-[56px] font-semibold leading-none tracking-[-2.16px]
              text-white">Welkom terug,<br /><i>boekenwurm.</i></p>

          </div>

          <div className="form-panel flex flex-col justify-center items-center flex-[1_0_0] self-stretch">
            <div className="login-card flex w-4/5 max-w-[440px] px-10 py-10  flex-col gap-6
              rounded-xl border-2 border-ink bg-white shadow-hard">
              <div className="frame flex flex-col items-start gap-2 w-full">
                <span className="badge flex px-3 py-1 items-center gap-1
                  rounded-full border-[1.5px] border-ink bg-cobalt
                  font-mono text-white text-xs font-medium leading-[120%] tracking-[0.96px]">ADMIN</span>
                <p className="inloggen font-display text-[44px] font-semibold leading-[105%] tracking-[-0.88px]">Inloggen</p>
              </div>
              <form className="form flex flex-col w-full items-start gap-6">
                <div className="email-input flex flex-col items-start self-stretch gap-2">
                  <label htmlFor="email" className="text-ink font-mono text-[12px] font-medium leading-[120%] tracking-[0.96px]">E-MAILADRES</label>
                  <input type="email" 
                    id="email"
                    placeholder="email"
                    className="input flex px-3 py-4 self-stretch
                      rounded-xl border-[2px] border-ink bg-white"
                  />
                </div>
                <div className="email-input flex flex-col items-start self-stretch gap-2">
                    <label htmlFor="password" className="text-ink font-mono text-[12px] font-medium leading-[120%] tracking-[0.96px]">WACHTWOORD</label>
                    <input type="password" 
                      placeholder="Wachtwoord"
                      className="input flex px-3 py-4 self-stretch
                        rounded-xl border-2 border-ink bg-white"
                    />
                </div>    
                <button type="submit" className="button flex px-3 py-6 content-center items-center justify-center self-stretch  gap-2
                   rounded-full border-2 border-ink bg-cobalt shadow-hard-sm
                   font-sans text-white text-[16px] font-bold leading-none">Inloggen</button>

                <p className="self-stretch
                  font-sans text-[14px] font-medium leading-[140%]">Zonder login kun je alles bekijken. Genres toevoegen, wijzigen of verwijderen mag alleen een admin.</p>
                <div className="login-guest">
  {/* placeholder href*/}
                <a href="#" className="continue-as-guest text-cobalt font-sans text-[16px] font-bold ">Verder zonder inloggen→</a>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
}

export default Login;