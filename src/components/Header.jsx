import Hamburger from "./header/hamburger/Hamburger";
import Nav from "./header/menu/nav/Nav";
import Search from "./header/search-bar/Search";
import logo from "./logo/logo.png";
function Header() {

    return (
        <header>
            <div className="border-b border-solid border-[#89919A]">
                <div className="container flex items-center h-20 justify-between md:justify-normal">
                    <a className="logo mr-4" href="/">
                        <figure>
                            <img src={logo} alt="NTTDATA" width="183" height="24" />
                            <figcaption className="hidden">NTTDATA</figcaption>
                        </figure>
                    </a>
                    <div className='search-bar w-full hidden md:flex w-100 items-center pl-20'>
                        <Search />
                    </div>
                    <div className="hamburger-menu md:hidden cursor-pointer">
                        <Hamburger />
                    </div>
                </div>
                <div className="container flex md:hidden mb-5">
                    <Search />
                </div>
            </div>
            <nav className="container py-6 hidden md:flex">
                <Nav />
            </nav>
        </header>
    )
}

export default Header;
