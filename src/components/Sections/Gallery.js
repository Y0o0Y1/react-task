import React from 'react'
import "./gallery.scss"
import ImgCard from "./ImgCard"
import data from "../DummyData.json"
const Gallery = () => {
    const arrayOfPics = data.slice(0,20)
    return (
       <section className="gallery ">
            {arrayOfPics.map((item)=>{
                return <ImgCard imgSrc={item.thumbnailUrl} imgId={item.id} imgTitle={item.title}/>
            })}
            
            </section>
    )
}

export default Gallery
