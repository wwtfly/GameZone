interface SidebarProps {
  categories: string[];
  gameTypes: string[];
  sortOptions: string[];
}

const Sidebar = ({
  categories,
  gameTypes,
  sortOptions,
}: SidebarProps): JSX.Element => {
  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h3 className="font-bold text-lg mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <a href="#" className="text-blue-500 hover:underline">
              {category}
            </a>
          </li>
        ))}
      </ul>

      <h3 className="font-bold text-lg mt-8 mb-4">Game Types</h3>
      <ul className="space-y-2">
        {gameTypes.map((type) => (
          <li key={type}>
            <a href="#" className="text-blue-500 hover:underline">
              {type}
            </a>
          </li>
        ))}
      </ul>

      <h3 className="font-bold text-lg mt-8 mb-4">Sort By</h3>
      <ul className="space-y-2">
        {sortOptions.map((option) => (
          <li key={option}>
            <a href="#" className="text-blue-500 hover:underline">
              {option}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
