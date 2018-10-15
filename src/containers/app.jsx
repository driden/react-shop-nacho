import React, { Component } from 'react'
import Products from './products'
import Categories from './../components/categories'
import { layout } from './../styles/layout.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            categories: []
        }
    }

    componentDidMount() {
        this.getProducts()
        this.getCategories()
    }

    getProducts() {
        fetch('http://develop.plataforma5.la:3000/api/products')
            .then(response => response.json())
            .then(products => { this.setState({ products }) })
            .catch(() => console.error('No se trajo products'))
    }

    getCategories() {
        fetch('http://develop.plataforma5.la:3000/api/categories')
            .then(response => response.json())
            .then(categories => { this.setState({ categories }) })
            .catch(() => console.error('No se trajo la data'))
    }
    render() {
        return (
            <div id="layout" className={layout}>
                <Categories categories={this.state.categories} />
                <Products products={this.state.products} />
            </div>)
    }
}

export default App
