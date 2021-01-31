import React from 'react'
import "./ItemDescription.scss"
import data from "../DummyData.json"
import {useRouteMatch} from "react-router-dom"
const ItemDescription = () => {
  const arrayOFpics = data.slice(0,20)
  let {url}=useRouteMatch()
  const currentImg = arrayOFpics[url.slice(1)-1]
  return (
        <div className = "container itemDescription">
        <img src={currentImg.url} alt = ".. "/>
        <section className="description">
        <h1 className="container">{currentImg.title}</h1>
        <h1 className="container">{currentImg.title}</h1>

        </section>
        </div>
    )
}
export default ItemDescription
