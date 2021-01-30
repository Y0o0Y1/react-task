import React from 'react'
import "./Form.scss"
const Form = () => {
    return (
        <form>
            <button> Clear</button>
            <button> Apply</button>
            <input type="text" className="input-field"></input>
            <select name="area_id" id="area_id" className="input-field "><option value="">Choose Your Area</option><option value="1">Cairo - Giza</option></select>        </form>
    )
}

export default Form
