import React,{useState} from 'react'
import Slider from 'react-touch-drag-slider'
import SimpleImageSlider from 'react-simple-image-slider'
import './gallery.css'

import {Carousel} from '3d-react-carousal';
let slides = [
    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYTD1UcSKu7zRmh-ZkZjMhaB6FFevKMuhGw&usqp=CAU" alt="1" />,
    <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
    <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
    <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
    <img src="https://picsum.photos/800/304/?random" alt="5" />   ];

    const images = [
        { url: "https://wallpaperaccess.com/full/2882814.jpg" },
        { url: "https://media.istockphoto.com/photos/ramen-noodles-in-soy-sauce-flavored-soup-picture-id1144177675?b=1&k=20&m=1144177675&s=170667a&w=0&h=V9L3BAYk-Vg0QmXzTmyHTwfZKPstKHJi19AOn-9pKCg=" },
        { url: "https://media.istockphoto.com/photos/sushi-picture-id135849804?b=1&k=20&m=135849804&s=170667a&w=0&h=ssJ24AIse0ExehHxPRlM_eSP_b5oEAtNYd8McXXY-Yo=" },
        { url: "https://wallpaperaccess.com/full/2882814.jpg" },
        { url: "https://media.istockphoto.com/photos/ramen-noodles-in-soy-sauce-flavored-soup-picture-id1144177675?b=1&k=20&m=1144177675&s=170667a&w=0&h=V9L3BAYk-Vg0QmXzTmyHTwfZKPstKHJi19AOn-9pKCg=" },
        { url: "https://media.istockphoto.com/photos/sushi-picture-id135849804?b=1&k=20&m=135849804&s=170667a&w=0&h=ssJ24AIse0ExehHxPRlM_eSP_b5oEAtNYd8McXXY-Yo=" },
    
      ];

 
function Gallery() {

  return (
    <div style={{alignSelf:"center",marginTop:20}}>
    <SimpleImageSlider
        width={1000}
        height={400}
        images={images}
        autoPlay = {true}
        showBullets={true}
        showNavs={true}
      />
   </div>  
  )
}

export default Gallery