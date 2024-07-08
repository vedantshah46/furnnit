import React from 'react'
import { useState } from 'react';

const FilterArrayComponents = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 20 },
        { id: 2, name: 'Product 2', price: 30 },
        { id: 3, name: 'Product 3', price: 25 }
      ]);
    
      // Function to filter products with price > 25
      const filterProducts = () => {
        const filtered = products.filter(product => product.price > 25);
        setProducts(filtered);
      };
    
      return (
        <div>
          <h1>Products</h1>
          <ul>
            {products.map(product => (
              <li key={product.id}>{product.name} - ${product.price}</li>
            ))}
          </ul>
          <button onClick={filterProducts}>Filter Products with Price more than $25</button>
        </div>
      );
    };
    

export default FilterArrayComponents
