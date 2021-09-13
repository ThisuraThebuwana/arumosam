import React from 'react';
import Products from "../components/Products";
import {productData, productDataTwo} from "../data/data";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import CategorySection from "../components/CategorySection";
import {categories} from "../data/Categories";

const Home = () => {
    return (
        <div>
            <CategorySection heading='Categories' data={categories}/>
            <Products heading='Most Popular Products' data={productData}/>
            <Feature />
            <Products heading='New Arrivals' data={productDataTwo}/>
            <Footer />
        </div>
    );
};

export default Home;