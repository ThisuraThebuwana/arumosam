import React from 'react';
import Products from "../components/Products";
import {anniversaryProducts} from "../data/category2";

const Category2 = () => {
    return (
        <div>
            <Products heading='Anniversary Gifts' data={anniversaryProducts}/>
        </div>
    );
};

export default Category2;