import React, { useState, useEffect, useRef } from 'react';
const options = ['Data', 'Category Name', 'Category Name', 'Category Name', 'Category Name'];

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="dropdown hidden md:flex" ref={dropdownRef}>
            <button className={`${isOpen ? 'ring-2 ring-[#0059BC]' : ''} flex dropdown-toggle items-center bg-[#F4F5F6] rounded right-[2px] min-w-[132px] top-[1px] px-6 py-2 absolute`} onClick={toggleDropdown}>
                {selectedOption ? selectedOption : 'Dropdown Menü'}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${isOpen ? 'transform rotate-180 transition' : ''} ml-2 w-4 h-4 transition`}>
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                </svg>
            </button>
            {isOpen && (
                <ul className="dropdown-menu absolute right-0 top-[60px] background rounded bg-[#00254F] z-10 text-white cursor-pointer w-[180px] flex flex-col p-4">
                    {options.map((option, index) => (
                        <li className='transition ease-in-out delay-150 rounded hover:bg-[#0059BC] duration-300 py-3 px-[1rem]' key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown;