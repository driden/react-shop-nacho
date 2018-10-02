import React from 'react'
import Category from './category'

const categories = ({ categories }) => (
    <nav>
        {
            categories.map(cat =>
                <Category key={cat.id} text={cat.name} value={cat.id} />)
        }
    </nav>)

export default categories