import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchProductById} from '../../store/modules/productsSlice';

const ProductDetailsPage = () => {
    const dispatch = useDispatch();
    const {singleProduct} = useSelector(state => state.products);
    let {id} = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchProductById(id));
        }
    }, [dispatch, id]);
    return (
        <>
            {singleProduct && <span> {singleProduct.brand}
                <span className="text-center mx-auto">
                    <img src={singleProduct.thumbnail} className="w-1/2 mx-auto"/>
                    <div>{singleProduct.brand}</div>
                    <div>{singleProduct.price}NOK</div>
                    <div>{singleProduct.description}</div>
                    <button type="button" className="rounded-md bg-indigo-200 mt-4 ml-44 py-2.5 px-3.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">ADD TO CART</button>
                </span>

            </span>}


        </>
    );
};

export default ProductDetailsPage;
