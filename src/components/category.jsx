import React, { Component } from 'react'
import { category } from './../styles/categories.css'

const cat = ({value, text}) => (
    <a href="#" id={value} className={category}><span>{text}</span></a>
)

export default cat;