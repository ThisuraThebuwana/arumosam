import React from 'react';
import Products from "../components/Products";
import {productData, productDataTwo} from "../data/data";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import CategorySection from "../components/CategorySection";
import {categories} from "../data/Categories";
import FeedbackCarousel from "../components/FeedbackCarousel";

const Home = () => {
    return (
        <div>
            <CategorySection heading='Browse by Category' data={categories}/>
            <Products heading='Most Popular Products' data={productData}/>
            <Feature/>
            <Products heading='New Arrivals' data={productDataTwo}/>
            <FeedbackCarousel heading='Customer FeedBacks'/>
            <Footer/>
        </div>
    );
};

export default Home;