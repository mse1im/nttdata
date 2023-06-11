import { useState, useEffect, useRef } from "react";
import menubg from "../bg.png";
import { navMenu, subNavMenu } from './menu';
import "./Nav.scss";

function Menu() {
    const [selectedItem, setSelectedItem] = useState(null);
    const menuRef = useRef(null);
    const navMd = navMenu.slice(0, 6);
    const restNav = navMenu.slice(6);

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setSelectedItem(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <ul ref={menuRef} className="flex flex-row flex-auto gap-4 lg:gap-3 xl:gap-6 text-sm font-medium cursor-pointer relative menu-container">
            {navMenu.map(item => (
                <li key={item.id}
                    className={`${selectedItem === item ? 'show' : ''} hidden lg:flex menu-item`}
                    onClick={() => handleItemClick(item)}><span>{item.name}</span></li>
            ))}
            {navMd.map(item => (
                <li key={item.id}
                    className={`${selectedItem === item ? 'show' : ''} hidden md:flex lg:hidden menu-item`}
                    onClick={() => handleItemClick(item)}><span>{item.name}</span></li>
            ))}
            <li className="hidden md:flex items-center lg:hidden" onClick={handleToggle} >
                More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${isOpen ? 'transform rotate-180 transition' : ''} ml-2 w-4 h-4 transition`}>
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                </svg>
                {isOpen && (
                    <ul className="flex flex-col absolute top-[30px] bg-[#F4F5F6] p-3 color-[#6A6D70] z-10 gap-3">
                        {restNav.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                )}
            </li>
            {selectedItem &&
                <ul className="flex mt-[2px] absolute left-0 bg-[#F4F5F6] rounded-sm py-8 w-full z-10 top-[30px] flex-row justify-around">
                    <li className="gap-3 flex flex-col text-black font-bold text-sm">
                        Header
                        {subNavMenu.map(subItem => (
                            <ul className="font-normal" key={subItem.id}>
                                <li><span>{subItem.name}</span></li>
                            </ul>
                        ))}
                    </li>
                    <li className="gap-3 flex flex-col text-black font-bold text-sm">
                        Header
                        {subNavMenu.map(subItem => (
                            <ul className="font-normal" key={subItem.id}>
                                <li><span>{subItem.name}</span></li>
                            </ul>
                        ))}
                    </li>
                    <li className="hidden lg:flex">
                        <figure>
                            <img src={menubg} alt="" />
                        </figure>
                    </li>
                </ul>
            }
        </ul>
    )
}

export default Menu;
