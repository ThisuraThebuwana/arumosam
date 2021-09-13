import React from 'react';
import Products from "../components/Products";
import {productData, productDataTwo} from "../data/data";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Products heading='Most Popular Products' data={productData}/>
            <Feature />
            <Products heading='New Arrivals' data={productDataTwo}/>
            <Footer />
        </div>
    );
};

export default Home;