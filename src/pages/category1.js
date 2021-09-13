import React from 'react';
import Products from "../components/Products";
import {birthdayProducts} from "../data/category1";

const Category1 = () => {
    return (
        <div>
            <Products heading='Birth Day Gifts' data={birthdayProducts}/>
        </div>
    );
};

export default Category1;