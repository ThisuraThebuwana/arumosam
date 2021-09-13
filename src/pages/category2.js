import React from 'react';
import Products from "../components/Products";
import {productDataThree} from "../components/Products/data";

const Category2 = () => {
    return (
        <div>
            <Products heading='Anniversary Gifts' data={productDataThree}/>
        </div>
    );
};

export default Category2;