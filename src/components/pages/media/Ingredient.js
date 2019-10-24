import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import pic1 from "./ingredientfolder/0.jpg"
import pic2 from "./ingredientfolder/1.jpg"
import pic3 from "./ingredientfolder/2.jpg"
import pic4 from "./ingredientfolder/3.jpg"
import pic5 from "./ingredientfolder/4.jpg"
import pic6 from "./ingredientfolder/5.jpg"
import pic7 from "./ingredientfolder/6.jpg"
import pic8 from "./ingredientfolder/7.jpg"
import pic9 from "./ingredientfolder/8.jpg"
import pic10 from "./ingredientfolder/9.jpg"
import pic11 from "./ingredientfolder/10.jpg"
import pic12 from "./ingredientfolder/11.jpg"
import pic13 from "./ingredientfolder/12.jpg"

const tileData = [
    {   
        img: pic1,
        title: 'Image',
        author: 'author',
        cols: 2,
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
        cols: 1,
    },
    {   
        img: pic11,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {   
        img: pic12,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {   
        img: pic13,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
]
class Ingredient extends Component {
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

export default Ingredient;