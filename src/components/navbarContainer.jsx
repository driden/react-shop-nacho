import React, { Component } from 'react'


class NavbarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://develop.plataforma5.la:3000/api/categories')
            .then(response => response.json())
            .then(data => { this.setState({ data }) })
            .catch(() => console.error('No se trajo la data'))
    }

    render() {
        return (<div>
            {this.state.data.map(cat => <div key={cat.id}>{cat.name}</div>)}
        </div>)
    }
}

export default NavbarContainer