import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../components/views/HomePage";
import ProductDetailsPage from "../components/views/ProductDetailsPage";
import CartCheckOutPage from "../components/views/CartCheckOutPage";
import ContactUsPage from "../components/views/ContactUsPage";
import NotFoundPage from "../components/views/NotFoundPage";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/products" element={<HomePage/>}/>
                <Route path="/product/:id" element={<ProductDetailsPage/>}/>
                <Route path="/cart" element={<CartCheckOutPage/>}/>
                <Route path="/contact" element={<ContactUsPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}

export default Router;
