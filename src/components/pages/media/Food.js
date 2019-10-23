import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import pic1 from "./foodimages/0.jpg"
import pic2 from "./foodimages/1.jpg"
import pic3 from "./foodimages/2.jpg"
import pic4 from "./foodimages/3.jpg"
import pic5 from "./foodimages/4.jpg"
import pic6 from "./foodimages/5.jpg"
import pic7 from "./foodimages/6.jpg"
import pic8 from "./foodimages/7.jpg"
import pic9 from "./foodimages/8.jpg"
import pic10 from "./foodimages/9.jpg"
import pic11 from "./foodimages/10.jpg"
import pic12 from "./foodimages/12.jpg"
import pic13 from "./foodimages/13.jpg"
import pic14 from "./foodimages/14.jpg"

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
}));

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
    {   
        img: pic14,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
]
class Food extends Component {
    render() {
        return (  
                <GridList cellHeight={250} className={useStyles} cols={4} style={{width: "74%", height: 400, border: "1px gray solid "}}>
                    {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                    ))}
                </GridList>  
        );
    }
}

export default Food;