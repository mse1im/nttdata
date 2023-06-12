import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../slider/slider.css";
import { Pagination } from "swiper";

function MobileProduct({loading, error, product, getLikedProduct, allProducts, toggleLike, goToPage, likedProducts}) {
  return (
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
  )
}

export default MobileProduct;