import logo from "./logo/logo.png";

function Header() {
  return (
    <header>
        <div className="border-b border-solid border-[#89919A]">
            <div className="container flex items-center h-20 justify-between md:justify-normal">
                <a className="logo mr-4" href="/"><figure><img src={logo} alt="NTTDATA" width="183" height="24" /> <figcaption className="hidden">NTTDATA</figcaption></figure></a>
                <div className="search-bar hidden md:flex">search</div>
                <div className="hamburger-menu md:hidden">
                    hamburgermenu
                </div>
            </div>
            <div className="container flex md:hidden">
                <div className="search-bar w-full">search</div>
            </div>
        </div>
        <nav className="container py-6 hidden md:flex">
            <ul className="flex flex-row gap-4 xl:gap-6 text-sm font-medium cursor-pointer">
                <li>Menu Item</li>
                <li>Menu Item</li>
                <li>Menu Item</li>
                <li>Menu Item</li>
                <li>Menu Item</li>
                <li>Menu Item</li>
                <li>Menu Item</li>
                <li>Menu Item</li>
                <li className="md:hidden lg:flex">Menu Item</li>
                <li className="md:hidden lg:flex">Menu Item</li>
                <li className="md:hidden lg:flex">Menu Item</li>
                <li className="md:hidden lg:flex">Menu Item</li>
                <li className="hidden md:flex lg:hidden">More
                    <ul className="hidden">
                        <li>Menu Item</li>
                        <li>Menu Item</li>
                        <li>Menu Item</li>
                        <li>Menu Item</li>
                        <li>Menu Item</li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;