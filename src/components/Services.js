import React from 'react'
import "./Services.scss"
import Form from "./Side-bar/Form"
import Gallery from "./Sections/Gallery"
import { BrowserRouter as Router , Switch,Route} from "react-router-dom"
import Header from "./Header/Header"

const Services = () => {
    return (
        <div className="services container">
            <Form/>
            <Gallery/>
        </div>
    )
}

export default Services
