import { useState } from "react";

const ListGroup = ({ categories, onCategorySelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index) => {
    setSelectedIndex(index);
    onCategorySelect(categories[index]);
  };

  return (
    <div>
      {categories.length === 0 ? "No hay elementos" : null}
      <ul className="list-group">
        {categories.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={`${item}-${index}`}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
