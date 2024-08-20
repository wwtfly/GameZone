import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  // 如果将来有需要传递 props，可以定义类型
}

const Navbar = ({}: NavbarProps): JSX.Element => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Game Resource Sharing</div>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Categories
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Upload Resource
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            My Resources
          </a>
        </li>
      </ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
