import React, { useState } from "react";

const Navb = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = {
    "New & Event": ["One", "Two", "errw", "ffes", "tdf", "Three", "ali"],
    Mulimedia: ["the", "Two", "Three", "asd", "kj", "Three", "df"],
  };

  return (
    <div className="flex flex-row-reverse justify-between items-center bg-black text-white p-4">
      <div>
        <nav>
          <ul className="lg:flex text-amber-100 lg:gap-4 lg:items-center">
            {Object.entries(menuItems).map(([title, items], index) => (
              <li
                key={index}
                className="relative flex items-center gap-1 cursor-pointer"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <p>{title}</p>
                <img
                  src="https://i.imgur.com/56jmgcY.png"
                  className="h-3"
                  alt="ArrowIcon"
                />
                {openDropdown === index && (
                  <div className="absolute z-[999] top-full left-0 bg-black text-white p-2 shadow-lg rounded w-52 -translate-x-20">
                    <p className="pb-4 pl-2">
                      {title}
                      <img
                        src="https://i.imgur.com/84wcKyU.png"
                        className="h-4 inline-block lg:h-6 hover:text-gray-900"
                        alt="Arrow icon"
                      />
                    </p>
                    <ul>
                      {items.map((item, idx) => (
                        <li key={idx} className="py-1 px-2 hover:bg-amber-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}

            <li className="flex gap-2 items-center cursor-pointer">
              <p>NASA +</p>
              <img
                src="https://i.imgur.com/56jmgcY.png"
                className="h-3"
                alt="ArrowIcon"
              />
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <img
          className="h-15"
          src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg"
          alt="NASA Logo"
        />
      </div>

      <div className="flex text-amber-50 gap-2">
        <h6>Explore</h6>
        <div>
          <input
            placeholder="Search..."
            type="text"
            className="border pl-2 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Navb;
