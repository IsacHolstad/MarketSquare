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
            {singleProduct &&  <span> {singleProduct.brand}
                <span>
                    <h3>{singleProduct.brand}</h3>
                    <img src={singleProduct.thumbnail} className="w-1/2 mx-auto"/>
                    <button className="border-2 rounded-xl border-green-500 bg-green-600 text-white text-sm w-32 h-8 col mt-3">ADD TO CART</button>

                </span>

            </span>}


        </>
);
};

export default ProductDetailsPage;
