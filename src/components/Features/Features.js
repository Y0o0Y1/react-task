import React from 'react'
import "./Features.scss"
import Feature from "./Feature"
import featuresData from "./FeaturesData.json"

const Features = () => {
    const dataOfFeatures = featuresData
    return (
    <div className="features container">
            <h3>
            WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.
            </h3>
        <div className="wedding-tools">
            {dataOfFeatures.map((feature)=><Feature title ={feature.title} content={feature.content} linkText={feature.linkText} imgSrc={feature.imgSrc} />)}
        </div>
    </div>
    )
}

export default Features