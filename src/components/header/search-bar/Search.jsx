import Dropdown from "../dropdown-category/Dropdown";

function Search() {
    return (
        <>
            <div className="relative w-full md:w-2/3">
                <input type="search" placeholder="Search..." className="placeholder:text-[#74777A] placeholder:text-base w-full bg-white text-black px-6 py-2 rounded border-solid border border-[#89919A] outline-0" />
                <Dropdown />
            </div>
            <button className="rounded text-white bg-[#0059BC] ml-3 py-2 px-10 border border-solid border-[#0059BC]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </button>
        </>
    )
}

export default Search;