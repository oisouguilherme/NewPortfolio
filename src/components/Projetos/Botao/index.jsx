export function Botao({text}){
  return (
    <a
      className="bg-purple-800 md:w-1/3 w-full py-4 rounded text-center text-white font-medium hover:bg-purple-700 hover:scale-110 duration-200"
      href="#"
    >
      {text}
    </a>
  );
}