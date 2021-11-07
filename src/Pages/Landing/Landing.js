import React from 'react'
import './Landing.css' 
import Gallery from '../../Components/Gallery/Gallery'
import NavBar from './Nav';
import { Grid } from '@mui/material';

import Card from '../../Components/Card/Card'

import one from '../../assets/images/1.jpeg'
import two from '../../assets/images/2.jpeg'
import three from '../../assets/images/3.jpg'
import four from '../../assets/images/4.jpg'

const CardList = [
    {index:1, title:"Sushi is a traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety of ingredients, such as seafood ....", url:one},
    {index:2, title:"The bottom of the pizza, called the crust, may vary widely according to style – thin as in a typical hand-tossed Neapolitan pizza or thick as in a deep-dish ...", url:two},
    {index:3, title:"Masala pasta recipe made in Indian style with Indian spices, herbs, mix veggies & pasta.This super delicious dish is kids' friendly & can be ...", url:three},
    {index:4, title:"These super moist chocolate cupcakes pack TONS of chocolate flavor in each cupcake wrapper! Made from simple everyday ingredients, this easy cupcake recipe will be your new favorite. ", url:four},
]


function Landing() {
    return (
        <div className="landing-container">
            <NavBar/>
            <Gallery />
            <Grid container>
                {
                    CardList.map(i => (
                        <Grid item xs={12} md={3}>
                            <Card key={i.index} about={i.title} image={i.url} />
                        </Grid>  
                    ))
                } 
            </Grid>
        </div>
    )
}

export default Landing
