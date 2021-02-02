import React from 'react'
import "./Form.scss"
const Form = () => {
    return (
        <div className="form">
        <form>
            <div className="buttonWrapper">
                <button className="clear-btn"> Clear</button>
                <button className="apply-btn"> Apply</button>
            </div>
            <div>
                <input type="text" className="input-field"></input>
                <select className="input-field ">
                <option value="">Choose Your Area</option>
                <option value="1">Cairo - Giza</option>
                </select>       
            </div>
        </form>
        </div>
    )
}

export default Form
