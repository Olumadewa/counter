import { Link, NavLink } from "react-router-dom";

const Header = () => {
  let links = [
    { to: "*", text: "404" },
    { to: "/boundary", text: "Error Boundary" },
  ];
  return (
    <div className="flex justify-between w-screen px-4 md:px-6 lg:px-9 items-center sticky left-0 right-0 top-0">
      <Link to={"/"}>
        <h3 className="text-white poor-story text-2xl md:text-4xl lg:text-6xl">
          Olu's counter
        </h3>
      </Link>
      <nav>
        <ul className="flex space-x-5">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-white border-b-2 border-b-white inline-block"
                    : "text-white"
                }
              >
                <h3 className="poor-story text-xl md:text-3xl lg:text-5xl hover:text-white hover:opacity-7">
                  {link.text}
                </h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
