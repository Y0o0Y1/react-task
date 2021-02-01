import React from 'react'

const Feature = ({title,content,linkText,imgSrc}) => {
    return (
    <div className="feature">
        <div className = "feature-icon">
            <img src={imgSrc} alt="" />
        </div>
        <div className="feature-details">
            <h4>{title}</h4>
            <span>{content}</span>
            <a href=" ">{linkText}</a>
        </div>
    </div>
    )
}

export default Feature
