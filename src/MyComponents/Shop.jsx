import React from 'react'
import ShopContactCommon from './ShopContactCommon'
import colorPalleteOne from './Images/colorPalleteOne.svg';
import colorPalleteTwo from './Images/colorPalleteTwo.svg';
import Tags from './Tags';
import blackFriday from './Images/blackFriday.png';
import ShopData from './Data';
import Subscribe from './Subscribe';
import Footer from './Footer';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

export default function Shop() {
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState(ShopData);
  const [isFiltered, setIsFiltered] = useState(false);

  const filterProducts = (tag) => {
    if (isFiltered) {
      setProducts(ShopData);
    } else {
      let filtered;
      if (tag === "chair") {
        filtered = ShopData.filter(product => product.tag === "chair");
        setProducts(filtered);
      } else if (tag === "lamp") {
        filtered = ShopData.filter(product => product.tag === "lamp");
        setProducts(filtered);
      }
      else if (tag === "sofa") {
        filtered = ShopData.filter(product => product.tag === "sofa");
        setProducts(filtered);
      }
      else if (tag === "stool") {
        filtered = ShopData.filter(product => product.tag === "stool");
        setProducts(filtered);
      }
      else if (tag === "bulb") {
        filtered = ShopData.filter(product => product.tag === "bulb");
        setProducts(filtered);
      }
    }
    setIsFiltered(!isFiltered);
  };

  const sortProducts = (order) => {
    const sorted = [...products].sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      if (order === 'asc') {
        return priceA - priceB;
      } else if (order === 'desc') {
        return priceB - priceA;
      } else {
        return 0;
      }
    });
    setProducts(sorted);
  };

//   const handle = () =>{
//     window.scrollBy(0,-3500);
// }

  return (
    <>
      <div className="shop">
        <div className="shop_wrapper">

          {/* <div className='ved'>
            <h1>fghjkl</h1>
            {ShopData.filter(item => parseFloat(item.price) > 25).map((item, index) => (
              <div key={index}>
                <h2>{item.name}</h2>
                <p>Place: {item.place}</p>
                <p>Price: ${item.price}</p>
              </div>
            ))}

            <ul>
              {data.map(product => (
                <li key={product.name}> {product.name} - ${product.price}</li>
              ))}
            </ul>

            <button >Filter Products with Price more than $25</button>
          </div> */}

          <div className="shop_sec_one">
            <ShopContactCommon />
          </div>

          <div className="shop_sec_two pt-5">
            <div className="shop_sec_two_left">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h5>Filter By Price</h5>
                  </div>
                  <div className="col-5 mt-3">
                    <input class="form-control form-control-sm" type="text" placeholder="$0" aria-label=".form-control-sm example" />
                  </div>
                  <div className="col-2 mt-3">
                    <h4>-</h4>
                  </div>
                  <div className="col-5 mt-3">
                    <input class="form-control form-control-sm" type="text" placeholder="$2000" aria-label=".form-control-sm example" />
                  </div>
                  <div className="col-12 mt-3">
                    <input type="range" class="form-range" min="0" max="2000" step="20" id="customRange3" />
                  </div>
                  <div className="col-12 mt-5">
                    <h5>Filter By Color</h5>
                  </div>
                  <div className="col-12 mt-3">
                    <img src={colorPalleteOne} alt="" />
                  </div>
                  <div className="col-12 mt-3">
                    <img src={colorPalleteTwo} alt="" />
                  </div>

                  <Tags
                    filterProducts={filterProducts}
                  />
                </div>
              </div>

              <div className="black_friday">
                <div className="black_friday_photo">
                  <img className='black_friday_img mt-5' src={blackFriday} alt="" />
                </div>
                <div className="black_friday_text">
                  <h5 className='text-center text-light'>Make a purchase now and <br /> get 50% discount</h5>
                  <button className='mt-2 ml-auto'>Buy Now</button>
                </div>
              </div>
            </div>

            <div className="shop_sec_two_right">
              <div className="shop_sec_two_right_rowone py-3">
                <div className="col-5">
                  <div class="input-group input-group-default mb-3">
                    <input type="text" class="form-control" placeholder='Search Here...' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    {/* <span class="input-group-text" id="inputGroup-sizing-sm btn btn-dark">Search</span> */}
                    <button type="button" class="btn btn-dark search_btn">Search</button>
                  </div>
                </div>
                <div className="col-2">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Sort By</option>
                    <option onClick={() => sortProducts('asc')} value="1">Price : Low to High</option>
                    <option onClick={() => sortProducts('desc')} value="2">Price : High to Low</option>
                    <option value="3">Recommended</option>
                  </select>
                </div>
              </div>

              <div className="shop_sec_two_right_cards">
                <div className='grid_class'>
                  {
                    products.map((user) => (
                      <div className="shopCards_css">
                        <div className="posRelative">
                          <div>
                            <div className="pos_relative">
                              <img src={user.imgsrc} alt="" />
                              <div className="shop_pos_absolute">
                                <span class="badge bg-dark">{user.place}</span>
                              </div>
                            </div>

                            <div className="container">
                              <div className="row">
                                <div className="col_padding col-9 pt-2">
                                  <h5>{user.name}</h5>
                                </div>
                                <div className="col_padding_one col-3 pt-2">
                                  <h5>${user.price}</h5>
                                </div>
                                <div className="col-12">
                                  {/* <Link to="/cart"> */}
                                    <button class="btn btn-dark addToCartBtn" onClick={() => addToCart(user)}>Add to Cart</button>
                                  {/* </Link> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>

            </div>
          </div>
        </div>
        <Subscribe />
      </div >
      <Footer />

    </>
  )
}