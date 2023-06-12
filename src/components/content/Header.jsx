function Header({likedProducts, getLikedProduct, getLikedProducts}) {
    return (
        <>
            <h2 className="font-medium md:text-2xl text-base text-black">Content title goes here</h2>
            <div className="flex items-center mt-4 sm:mt-0">
                <div className="like mr-4">
                    <span className='flex items-center'>{likedProducts.length === 0 ?
                        <> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg> {likedProducts.length} ÜRÜN </>
                        :
                        <> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444" className="w-6 h-6 mr-2">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg> {likedProducts.length} ÜRÜN </>
                    }</span>
                </div>
                <button style={getLikedProduct ? { backgroundColor: 'transparent', border: '1px solid #0059BC', color: '#0059BC' } : { backgroundColor: '#0059BC', border: '1px solid white', color: 'white' }} className="bg-[#0059BC] text-white rounded py-1 px-2 border border-solid border-white" onClick={getLikedProducts}>{getLikedProduct ? 'Tüm Ürünler' : 'Beğenilenler'}</button>
            </div>
        </>
    )
}

export default Header;