import React from 'react'
import products from '../Data/products.js';
import ProductCard from"./ProductCard.js";
import "./productList.css";

const ProductList=()=>{
    return(
            <div style={{display:"flex", flexWrap:"wrap"}}>
                {products.map((item)=>(
                    <ProductCard key={item.id} product={item}/>
                ))}
            </div>
    );
};

export default ProductList;