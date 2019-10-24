import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import pic1 from "./gallery1/0.jpeg"
import pic2 from "./gallery1/1.jpeg"
import pic3 from "./gallery1/2.jpeg"
import pic4 from "./gallery1/3.jpeg"
import pic5 from "./gallery1/4.jpeg"
import pic6 from "./gallery1/5.jpeg"
import pic7 from "./gallery1/6.jpeg"
import pic8 from "./gallery1/7.jpeg"
import pic9 from "./gallery1/8.jpeg"
import pic10 from "./gallery1/9.jpeg"
import pic11 from "./gallery1/10.jpeg"
import pic12 from "./gallery1/11.jpeg"

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
    {   
        img: pic11,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {   
        img: pic12,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
]
class GalleryOne extends Component {
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

export default GalleryOne;