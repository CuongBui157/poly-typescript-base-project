import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center py-4">
          <a href="#" className="text-xl font-bold">
            Logo
          </a>
          <div>
            <input
              className=" w-[400px] h-[30px] text-[12px] text-black p-[10px] rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
          <Link
            to={"/signin"}
            className="text-sm rounded-full bg-gray-700 py-2 px-4 hover:bg-gray-600">
            Login
          </Link>
          <div className="md:hidden">
            <button>
              <svg
                className="fill-current text-white h-8 w-8"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
