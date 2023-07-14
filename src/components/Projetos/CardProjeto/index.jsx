import Logo from "../../../assets/logo.png";
export function CardProjeto({ image, title, client, tec1, tec2, link }) {
  return (
    <a
      target="_blank"
      href={link}
      className="text-white sm:w-80 bg-white bg-opacity-5 rounded-xl overflow-hidden cursor-pointer hover:scale-105 duration-300 border"
    >
      <div className="p-4">
        <div className="flex justify-end gap-4 pb-4 text-sm">
          <p className="bg-gray-300 px-4 py-1 rounded-full text-black font-medium">
            {tec1}
          </p>
          <p className="bg-gray-300 px-4 py-1 rounded-full text-black font-medium">
            {tec2}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <img src={Logo} alt={client} className="w-8" />
          <p>{client}</p>
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          amet labore recusandae enim, sed laboriosam.
        </p>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
    </a>
  );
}
