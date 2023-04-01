export function CardConhecimento({image, text}){
  return(
    <div className="bg-black flex items-center gap-6 px-6 py-2 w-72 text-white font-medium cursor-pointer hover:border-solid hover:border-2 hover:border-purple-800">
      <img src={image} alt={text} />
      <p>{text}</p>
    </div>
  )
}