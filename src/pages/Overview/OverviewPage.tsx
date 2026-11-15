export default function OverviewPage({type, number} : props){
  return(
    <div className="flex pt-14 pb-[180px] px-20 flex-col align-start gap-12 self-stretch">
      <div className="flex justify-between items-end self-stretch">
        <div className="flex flex-col items-start gap-3">
          <p className="font-mono text-xs font-medium leading-[120%] tracking-[0.96px] uppercase  text-ink-soft">Collectie · {number} {type}</p>
          <div className="flex items-center gap-4">
            <h1>Alle {type}</h1>
          </div>
        </div>
      </div>

      <div className="flex items-start content-start gap-x-10 gap-y-8 self-stretch flex-wrap">

      </div>
    </div>
  )
}