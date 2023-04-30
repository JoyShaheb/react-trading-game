import React, { FC, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface IOption {
  label: string;
  value: string;
}

interface IDropdown {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  selectedValue?: string;
  options: IOption[];
}

const Dropdown: FC<IDropdown> = ({
  label,
  onChange,
  className,
  selectedValue,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (option: IOption) => {
    onChange({
      target: { value: option.value }, // simulate the select element's onChange event
    } as React.ChangeEvent<HTMLSelectElement>);
    setIsOpen(false); // close the dropdown
  };

  return (
    <div className={`${className} relative`}>
      <select
        id="dropdownDefaultButton"
        className={`text-white cursor-pointer focus:outline-none font-medium rounded-lg mb-1 text-sm text-center inline-flex items-center dark:bg-transparent`}
        onChange={onChange}
        style={{ display: "none" }} // hide the select element, we'll use a div instead
        value={selectedValue} // set the value of the select element to the selected value
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <div
        id="dropdown"
        className={`z-10 absolute right-0 ${
          !isOpen && "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <div
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer ${
                option.value === selectedValue && "bg-blue-400 text-white"
              }`} // add bg-blue-400 class to selected item
              onClick={() => handleClick(option)}
            >
              {option.label} - {option.value}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`text-white cursor-pointer focus:outline-none font-medium rounded-lg mb-1 text-sm text-center inline-flex items-center dark:bg-transparent ${
          isOpen && "opacity-0 pointer-events-none"
        }`} // hide the select button when dropdown is open
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{label}</h3>
        <ChevronDownIcon className="w-6" />
      </div>
    </div>
  );
};

export default Dropdown;
