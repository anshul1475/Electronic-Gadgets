import React from 'react';

const ProductCard=({product})=>{
  return (
    <div style={{
       border:"1px solid #ccc",
       padding:"10px",
       margin:"25px",
       borderRadius:"8px",
      width:"150px",
      height:"250px",
      textAlign:"center"
      
    }}>
        <img src={product.image} alt="hello" width={130} height={110} style={{marginLeft :"5~px", marginTop:"10px",padding:""}}/>
        <h3>{product.name}</h3>
        <p>Price:${product.price}</p>
        <p>Category:{product.category}</p>
    </div>
  );
};

export default ProductCard;