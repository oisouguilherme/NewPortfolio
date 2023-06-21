export function Slide({projeto,linkGithub,linkSite,imagem}) {
  return (
    <div className="w-full h-96 relative ">
      <div className="absolute bottom-6 left-6">
        <div className="space-x-3">
          <a
            className="bg-purple-900 hover:bg-purple-800 px-6 py-1 rounded text-white font-medium text-lg duration-500 cursor-pointer"
            href={linkGithub} target="_blank"
          >
            Github
          </a>
          <a
            className="bg-purple-900 hover:bg-purple-800 px-6 py-1 rounded text-white font-medium text-lg duration-500 hover:scale-110 cursor-pointer"
            href={linkSite} target="_blank"
          >
            Site
          </a>
        </div>
      </div>
      <img className="cursor-pointer" src={imagem} alt={projeto} />
    </div>
  );
}
