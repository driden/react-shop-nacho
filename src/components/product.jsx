import React from "react"

const Product = ({ product }) => {
    const { id, name, price, description, image } = product
    return (
            <div id={id} key={id} className="grid-item">
                <span>{name}</span>
                <img src="../public/logo.jpg" />
                <span>{price}</span>
            </div>
        
    )
}

export default Product