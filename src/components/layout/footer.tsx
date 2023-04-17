const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white my-[30px]">
        <div className="container mx-auto flex justify-between items-center py-4">
          <p>&copy; 2023 My Website</p>
          <ul className="flex justify-between items-center">
            <li className="mr-6">
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
