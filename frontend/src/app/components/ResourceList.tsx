"use client"; // 添加这个指令，指定为客户端组件

import { useState } from "react";

interface ResourceListProps {
  categories: string[];
}

const ResourceList = ({ categories }: ResourceListProps) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="text-center mt-4">
      <div className="flex justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-white border-b-2 ${
              activeCategory === category
                ? "border-blue-500"
                : "border-transparent"
            } hover:border-blue-500`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 text-white">
        {activeCategory === "PC Games" && <p>Displaying PC Games Content</p>}
        {activeCategory === "Console Games" && (
          <p>Displaying Console Games Content</p>
        )}
        {activeCategory === "Mobile Games" && (
          <p>Displaying Mobile Games Content</p>
        )}
      </div>
    </div>
  );
};

export default ResourceList;
