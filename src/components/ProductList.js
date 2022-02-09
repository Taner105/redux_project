import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import ProductComponents from "./ProductComponents"
import { useDispatch } from 'react-redux';
import { setProducts } from "../redux/actions/productActions"

const ProductList = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    // console.log(products);

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("err", err);
            })
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    console.log("Products", products);
    return (
        <div className='ui grid container'>
            <ProductComponents />
        </div>
    )
}

export default ProductList