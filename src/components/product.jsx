import React from "react"
import { gridItem, gridImg } from './../styles/layout.css'

const Product = ({ product }) => {
    const { id, name, price, description, image } = product
    return (
        <div id={id} key={id} className={gridItem}>
            <span>{name}</span>
            <img src="../public/logo.jpg" className={gridImg} />
            <span>{price}</span>
        </div>

    )
}

export default Product