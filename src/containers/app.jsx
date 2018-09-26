import React, { Component } from 'react'
import Products from './products'
import NavbarContainer from './../components/navbarContainer'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Guille'
        }
    }

    render() {
        return (
            <div>
                <NavbarContainer/>
                <Products />
            </div>)
    }
}

export default App