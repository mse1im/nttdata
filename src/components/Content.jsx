import { useEffect, useCallback,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct, setLoad, setLike, getLike } from '../redux/productReducer';
import Header from './content/Header';
import Product from './content/Product';
import MobileProduct from './content/MobileProduct';

function Content() {
    const [screenVisible,setScreenVisible] = useState('web');
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

    const changeScreen = () => {
        if(window.innerWidth <= 768){
            setScreenVisible('mobile');
        }else {
            setScreenVisible('web');
        }
    }

    useEffect(() => {
        dispatch(getProduct(loadNumber));
    }, [dispatch, loadNumber]);

    useEffect(() => {
        window.addEventListener("resize",changeScreen);
        window.addEventListener("load",changeScreen);

        return () => {
            window.removeEventListener("resize",changeScreen);
            window.removeEventListener("load",changeScreen);
        }
    },[screenVisible])

    return (
        <div className="container">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <Header getLikedProduct={getLikedProduct} getLikedProducts={getLikedProducts} likedProducts={likedProducts} />
            </div>
            <div className="flex flex-col mt-[32px]">
                {
                    screenVisible === 'web' ?
                    <Product getLikedProduct={getLikedProduct} likedProducts={likedProducts} error={error} goToPage={goToPage} loading={loading} product={product} toggleLike={toggleLike} />
                    :
                    <MobileProduct getLikedProduct={getLikedProduct} allProducts={allProducts} likedProducts={likedProducts} error={error} goToPage={goToPage} loading={loading} product={product} toggleLike={toggleLike} />
                }
                {!finished && !getLikedProduct && <button className='bg-[#0059BC] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white hidden md:flex mt-16 py-4 px-6 rounded items-center self-center' onClick={loadMore}>Daha fazla <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 w-5 h-5">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg></button>}
            </div>
        </div>
    )
}

export default Content;