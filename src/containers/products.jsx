import React, { Component } from 'react'
import Product from '../components/product'
import { gridContainer } from './../styles/layout.css'

const Products = ({ products }) => (
    <div className={gridContainer}>{products.map(p => <Product key={p.id} product={p} />)}
    </div>
)

export default Products