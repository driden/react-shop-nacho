import React, { Component } from 'react'
import Product from '../components/product'

const Products = ({ products }) => (
    <div className="grid-container">{products.map(p => <Product key={p.id} product={p} />)}
    </div>
)

export default Products