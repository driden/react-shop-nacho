import React, { Component } from 'react'

const category = ({value, text}) => (
    <a href="#" id={value}><span>{text}</span></a>
)

export default category;