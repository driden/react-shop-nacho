import React from 'react'
import Cat from './category'
import { category, navMenu } from './../styles/categories.css'

const categories = ({ categories }) => (
    <nav className={navMenu}>
        {
            categories.map(cat =>
                <Cat key={cat.id} text={cat.name} value={cat.id} className={category} />)
        }
    </nav>)

export default categories