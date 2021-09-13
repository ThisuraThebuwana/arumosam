import React from 'react';
import {productDataThree} from "../components/Products/data";
import Products from "../components/Products";

const Category1 = () => {
    return (
        <div>
            <Products heading='Birth Day Gifts' data={productDataThree}/>
        </div>
    );
};

export default Category1;