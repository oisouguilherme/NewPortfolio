export function Slide({projeto,linkGithub,linkSite,imagem}) {
  return (
    <div className="w-full h-96 relative">
      <div className="absolute bottom-6 left-6">
        <p className="font-black text-3xl text-white mb-4">{projeto}</p>
        <div className="space-x-3">
          <a
            className="bg-purple-950 hover:bg-purple-800 px-6 py-1 rounded text-white font-medium text-lg"
            href={linkGithub}
          >
            Github
          </a>
          <a
            className="bg-purple-950 hover:bg-purple-800 px-6 py-1 rounded text-white font-medium text-lg"
            href={linkSite}
          >
            Site
          </a>
        </div>
      </div>
      <img className="h-full object-cover" src={imagem} alt={projeto} />
    </div>
  );
}
