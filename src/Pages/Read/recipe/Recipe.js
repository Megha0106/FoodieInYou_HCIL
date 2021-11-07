import React,{useState} from "react";
import {IconButton,Avatar,List,ListItemText,ListItemButton,Collapse,ListItemIcon} from '@mui/material'
import { FavoriteBorder,Share,ExpandLess,ExpandMore} from "@material-ui/icons";
import {CircleRounded,Label} from '@mui/icons-material'



import cupcake from '../recipe/cake2.jpg'

import './recipe.css'
export default function Recipe()
{
    const [iopen, setIOpen] = useState(true);
    const[sopen,setSOpen] = useState(false);

    const handleClickI = () => {
        setIOpen(!iopen);
    };
    const handleClickS = ()=>{
        setSOpen(!sopen)
    }

    const ingredientsList = [
        {text:"3/4 cup (94g) all-purpose flour (spoon & leveled)"},
        {text:"1/2 cup (41g) unsweetened natural cocoa powder"},
        {text:"3/4 teaspoon baking powder"},
        {text:"1/2 teaspoon baking soda"},
        {text:"1/4 teaspoon salt"},
        {text:"2 large eggs, at room temperature"},
        {text:"1/2 cup (100g) granulated sugar"},
        {text:"1/2 cup (100g) packed light brown sugar"},
        
    ]
    const stepsList = [
       {text:"Preheat the oven to 350°F (177°C). Line a 12-cup muffin pan with cupcake liners. Line a second pan with 2 liners – this recipe makes about 14 cupcakes. Set aside."},
       {text:"Whisk the flour, cocoa powder, baking powder, baking soda, and salt together in a large bowl until thoroughly combined. Set aside. In a medium bowl, whisk the eggs, granulated sugar, brown sugar, oil, and vanilla together until combined. Pour half of the wet ingredients into the dry ingredients. Then half of the buttermilk. Gently whisk for a few seconds. Repeat with the remaining wet ingredients and buttermilk. Stir until *just* combined; do not overmix. The batter will be thin."},
       {text:"Pour or spoon the batter into the liners. Fill only halfway (this is imperative! only halfway!) to avoid spilling over the sides or sinking."},
       {text:"Bake for 18-21 minutes, or until a toothpick inserted in the center comes out clean. Allow to cool completely before frosting. I usually let them cool in the pan."},
       {text:"Frost cooled cupcakes however you’d like. I used chocolate buttercream and Wilton 1M piping tip for these pictured cupcakes. Top with sprinkles, if desired. Store leftovers in the refrigerator for up to 5 days"}
    ]
    return(
        <div className = "recipeContainer">
            <div className = "recipeName">
                <h1 className="name">Super moist chocolate cupcakes</h1>
                <IconButton aria-label="like" size="large" sx={{ color: "rgb(245, 60, 60)" }}>
                    <FavoriteBorder/>
                </IconButton>
                <IconButton aria-label="share" size="large" sx={{ color: "rgb(245, 60, 60)" }}>
                    <Share />
                </IconButton>
            </div>
            <div className="image">
                <Avatar
                alt = "image"
                src = {cupcake}
                variant = "square"
                sx={{ width:800, height: 450 }}
                />
            </div>
            <div className = 'recipe'>
                <div className="ingredients">
                    <List>
                        <ListItemButton onClick={handleClickI}>
                            <ListItemIcon>
                            <Label sx={{ color: "rgb(245, 60, 60)" }}/>
                            </ListItemIcon>
                            <ListItemText primary="Ingredients"
                                primaryTypographyProps={{
                                fontSize: 25,
                                fontWeight:'high',
                                letterSpacing: 0,
                                fontFamily:'revert'
                                }}
                            />
                            {iopen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={iopen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            {ingredientsList.map(item=>(
                            <ListItemButton>
                                    <ListItemIcon >
                                        <CircleRounded color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText primary={item.text}
                                        primaryTypographyProps={{
                                        fontSize: 15,
                                        fontWeight:'high',
                                        letterSpacing: 0,
                                        fontFamily:'revert'
                                        }}
                                    />
                            </ListItemButton>
                            ))}
                            </List>
                        </Collapse>

                        <ListItemButton onClick={handleClickS}>
                            <ListItemIcon>
                            <Label sx={{ color: "rgb(245, 60, 60)" }}/>
                            </ListItemIcon>
                            <ListItemText primary="Steps"
                                primaryTypographyProps={{
                                fontSize: 25,
                                fontWeight:'high',
                                letterSpacing: 0,
                                fontFamily:'revert'
                                }}
                            />
                            {sopen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={sopen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            {stepsList.map(item=>(
                            <ListItemButton>
                                    <ListItemIcon >
                                        <CircleRounded color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText primary={item.text}
                                        primaryTypographyProps={{
                                        fontSize: 15,
                                        fontWeight:'high',
                                        letterSpacing: 0,
                                        fontFamily:'revert'
                                        }}
                                    />
                            </ListItemButton>
                            ))}
                            </List>
                        </Collapse>
                    </List>
                
                </div>
                
               
            </div>
            
        </div>
    )
}