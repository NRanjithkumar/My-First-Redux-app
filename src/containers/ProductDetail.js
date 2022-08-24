import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import {fetchProduct, removedSelectedProducts} from '../redux/actions/productActions';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const ProductDetail = () => {
  const product=useSelector((state) => state.product);
  const {image,title,price,category,description}=product;
  const {productid}=useParams();
  //console.log(productid);
  const dispatch= useDispatch();
  console.log(product);

  /*const fetchProductDetail = async () => {
    //console.log(productid);
    //console.log(`https://fakestoreapi.com/products/${productid}`);
    const response = await axios.get(`https://fakestoreapi.com/products/${productid}`).catch((err) => {
      console.log("Error:",err);
    });
    console.log(response.data);
    dispatch(selectedProducts(response.data));
  };*/

  useEffect(() => {
    if(productid && productid!=="") dispatch(fetchProduct(productid));
    return () => {
      dispatch(removedSelectedProducts()); // return will render once the product id destroyed which means 
      //once we go back from product page, then it will update the state as empty.
      //if(productid && productid!=="") fetchProductDetail();
    }
  },[productid]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail