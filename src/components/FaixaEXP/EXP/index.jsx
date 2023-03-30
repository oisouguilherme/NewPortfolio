export function Exp({time,text}){
  return(
    <div className="w-1/5">
      <div className="flex gap-2 items-center">
        <p className="text-6xl font-black mb-3 text-purple-800">+</p>
        <p className="text-5xl font-bold text-white">{time}</p>
      </div>
      <p className="text-white">{text}</p>
    </div>
  )
}