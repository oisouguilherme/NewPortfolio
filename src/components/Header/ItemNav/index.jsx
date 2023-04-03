import { Link } from "react-scroll";

export function ItemNav({ text, nav }) {
  return (
    <li>
      <Link
        smooth={true}
        duration={500}
        to={nav}
        className="text-white font-medium hover:text-purple-800 cursor-pointer"
      >
        {text}
      </Link>
    </li>
  );
}
