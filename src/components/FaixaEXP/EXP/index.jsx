export function Exp({time,text}){
  return(
    <div className="md:w-1/5 w-fit">
      <div className="flex gap-2 items-center justify-center md:justify-start">
        <p className="text-6xl font-black mb-3 text-purple-800">+</p>
        <p className="text-5xl font-bold text-white">{time}</p>
      </div>
      <p className="text-white">{text}</p>
    </div>
  )
}