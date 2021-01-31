import React from 'react'

const Dropdown = ({listItems}) => {
    return (
       <ul>
           {listItems.map(item =>{
               return <li className = "dropDownItem">item</li>
           })}
       </ul>
    )
}

export default Dropdown
