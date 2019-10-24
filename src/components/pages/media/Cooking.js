import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import pic1 from "./cookingimages/0.jpg"
import pic2 from "./cookingimages/1.jpg"
import pic3 from "./cookingimages/2.jpg"
import pic4 from "./cookingimages/3.jpg"
import pic5 from "./cookingimages/4.jpg"
import pic6 from "./cookingimages/5.jpg"
import pic7 from "./cookingimages/6.jpg"
import pic8 from "./cookingimages/7.jpg"
import pic9 from "./cookingimages/8.jpg"
import pic10 from "./cookingimages/9.jpg"

const tileData = [
    {   
        img: pic1,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {   
        img: pic2,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {   
        img: pic3,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {   
        img: pic4,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {   
        img: pic5,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {   
        img: pic6,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {   
        img: pic7,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {   
        img: pic8,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {   
        img: pic9,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {   
        img: pic10,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
]
class Cooking extends Component {
    render() {
        return (  
                <GridList cellHeight={250} cols={4} style={{width: "79%", height: 400, border: "1px gray solid "}}>
                    {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                    ))}
                </GridList>  
        );
    }
}

export default Cooking;