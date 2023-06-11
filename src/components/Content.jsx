import { useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./slider/slider.css";
import { Pagination } from "swiper";
import { useSelector, useDispatch } from 'react-redux';
import { getProduct, setLoad, setLike, getLike } from '../redux/productReducer';

function Content() {
    const dispatch = useDispatch();
    const { loading, error, product,allProducts, loadNumber, likedProducts, getLikedProduct, finished } = useSelector(state => state);

    const goToPage = useCallback(() => {
        window.open("https://www.google.com.tr", "_blank");
    }, []);

    const toggleLike = (e, product) => {
        e.stopPropagation();
        dispatch(setLike(product));
    }

    const getLikedProducts = () => {
        if (!getLikedProduct) {
            dispatch(getLike(true));
        } else {
            dispatch(getLike(false));
        }
    }

    const loadMore = useCallback(() => {
        dispatch(setLoad(loadNumber));
    }, [dispatch, loadNumber])

    useEffect(() => {
        dispatch(getProduct(loadNumber));
    }, [dispatch, loadNumber])

    return (
        <div className="container">
            <div className="flex justify-between items-center">
                <h2 className="font-medium md:text-2xl text-base text-black">Content title goes here</h2>
                <div className="flex items-center">
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
            </div>
            <div className="flex flex-col mt-[32px]">
                <div className="products hidden md:grid gap-3 grid-cols-4">
                    {loading &&
                        <div role="status"><svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg><span className="sr-only">Loading...</span>
                        </div>}
                    {!loading && error === "" && product.length > 0 && !getLikedProduct && product?.map((product) => (
                        <div key={product.id} onClick={goToPage} className="product cursor-pointer flex flex-col border justify-between items-start border-solid border-[#E6E6E6] rounded-[4px] p-[10px] text-[#00254F]">
                            <figure className="relative h-[208px] md:h-[111px] lg:h-[179px] w-full">
                                <img className="h-full rounded-t-[3px] w-full object-cover" src={product.imageUrl} alt="" />
                                <figcaption className="absolute border top-[11px] right-[11px] p-2 rounded-full bg-white flex items-center justify-center">
                                    <span onClick={(e) => toggleLike(e, product)}>
                                        {!product.like ?
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#D1D1D1" className="w-6 h-6 transition ease-in-out delay-150 hover:stroke-red-500 duration-250">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444" className="w-6 h-6 hover:animate-pulse transition ease-in-out delay-150 hover:fill-red-500 duration-250">
                                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                            </svg>
                                        }
                                    </span>
                                </figcaption>
                            </figure>
                            <h3 className="font-semibold text-base line-clamp-1 py-2">{product.name}</h3>
                            <div className="price bg-[#E6EEF8] py-1 px-2 my-1 w-full">
                                <span className="font-bold text-sm">{product.price} TL</span>
                            </div>
                            <div className="description">
                                <span className="text-xs font-medium">Description</span>
                                <p className="text-xs font-normal line-clamp-3 h-[49px] mb-2">{product.description}</p>
                            </div>
                            <span className="delivery text-[10px] font-normal text-black">{product.shippingMethod}</span>
                        </div>
                    ))
                    }
                    {!loading && error === "" && likedProducts.length > 0 && getLikedProduct && likedProducts?.map((product) => (
                        <div key={product.id} onClick={goToPage} className="product cursor-pointer flex flex-col border justify-between items-start border-solid border-[#E6E6E6] rounded-[4px] p-[10px] text-[#00254F]">
                            <figure className="relative h-[208px] md:h-[111px] lg:h-[179px] w-full">
                                <img className="h-full rounded-t-[3px] w-full object-cover" src={product.imageUrl} alt="" />
                                <figcaption className="absolute border top-[11px] right-[11px] p-2 rounded-full bg-white flex items-center justify-center">
                                    <span onClick={(e) => toggleLike(e, product)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444" className="w-6 h-6 hover:animate-pulse transition ease-in-out delay-150 hover:fill-red-500 duration-250">
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                        </svg>
                                    </span>
                                </figcaption>
                            </figure>
                            <h3 className="font-semibold text-base line-clamp-1 py-2">{product.name}</h3>
                            <div className="price bg-[#E6EEF8] py-1 px-2 my-1 w-full">
                                <span className="font-bold text-sm">{product.price} TL</span>
                            </div>
                            <div className="description">
                                <span className="text-xs font-medium">Description</span>
                                <p className="text-xs font-normal line-clamp-3 h-[49px] mb-2">{product.description}</p>
                            </div>
                            <span className="delivery text-[10px] font-normal text-black">{product.shippingMethod}</span>
                        </div>
                    ))
                    }
                    {likedProducts.length === 0 && getLikedProduct && <span>Beğenilen ürün bulunamadı..</span>}
                </div>
                <div className="mobile-products md:hidden">
                    <Swiper
                        pagination={true}
                        modules={[Pagination]}
                        className="product-slider"
                        style={{
                            "--swiper-pagination-bullet-size": "12px",
                            "--swiper-pagination-bullet-horizontal-gap": "6px",
                            "--swiper-pagination-bottom": "-6px",
                        }}
                    >
                        {!loading && error === "" && product.length > 0 && !getLikedProduct && allProducts?.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div onClick={goToPage} className="mb-6 product cursor-pointer flex flex-col border justify-between items-start border-solid border-[#E6E6E6] rounded-[4px] p-[10px] text-[#00254F]">
                                    <figure className="relative h-[208px] md:h-[111px] lg:h-[179px] w-full">
                                        <img className="h-full rounded-t-[3px] w-full object-cover" src={product.imageUrl} alt="" />
                                        <figcaption className="absolute border top-[11px] right-[11px] p-2 rounded-full bg-white flex items-center justify-center">
                                            <span onClick={(e) => toggleLike(e, product)}>
                                                {!product.like ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#D1D1D1" className="w-6 h-6 transition ease-in-out delay-150 hover:stroke-red-500 duration-250">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444" className="w-6 h-6 hover:animate-pulse transition ease-in-out delay-150 hover:fill-red-500 duration-250">
                                                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                    </svg>
                                                }
                                            </span>
                                        </figcaption>
                                    </figure>
                                    <h3 className="font-semibold text-base line-clamp-1 py-2">{product.name}</h3>
                                    <div className="price bg-[#E6EEF8] py-1 px-2 my-1 w-full">
                                        <span className="font-bold text-sm">{product.price} TL</span>
                                    </div>
                                    <div className="description text-left">
                                        <span className="text-xs font-medium">Description</span>
                                        <p className="text-xs font-normal line-clamp-3 h-[49px] mb-2">{product.description}</p>
                                    </div>
                                    <span className="delivery text-[10px] font-normal text-black">{product.shippingMethod}</span>
                                </div>
                            </SwiperSlide>
                        ))
                        }
                        {!loading && error === "" && likedProducts.length > 0 && getLikedProduct && likedProducts?.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div onClick={goToPage} className="mb-6 product cursor-pointer flex flex-col border justify-between items-start border-solid border-[#E6E6E6] rounded-[4px] p-[10px] text-[#00254F]">
                                    <figure className="relative h-[208px] md:h-[111px] lg:h-[179px] w-full">
                                        <img className="h-full rounded-t-[3px] w-full object-cover" src={product.imageUrl} alt="" />
                                        <figcaption className="absolute border top-[11px] right-[11px] p-2 rounded-full bg-white flex items-center justify-center">
                                            <span onClick={(e) => toggleLike(e, product)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444" className="w-6 h-6 hover:animate-pulse transition ease-in-out delay-150 hover:fill-red-500 duration-250">
                                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                </svg>
                                            </span>
                                        </figcaption>
                                    </figure>
                                    <h3 className="font-semibold text-base line-clamp-1 py-2">{product.name}</h3>
                                    <div className="price bg-[#E6EEF8] py-1 px-2 my-1 w-full">
                                        <span className="font-bold text-sm">{product.price} TL</span>
                                    </div>
                                    <div className="description text-left">
                                        <span className="text-xs font-medium">Description</span>
                                        <p className="text-xs font-normal line-clamp-3 h-[49px] mb-2">{product.description}</p>
                                    </div>
                                    <span className="delivery text-[10px] font-normal text-black">{product.shippingMethod}</span>
                                </div>
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
                {!finished && !getLikedProduct && <button className='bg-[#0059BC] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white hidden md:flex mt-16 py-4 px-6 rounded items-center self-center' onClick={loadMore}>Daha fazla <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 w-5 h-5">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg></button>}
            </div>
        </div>
    )
}

export default Content;