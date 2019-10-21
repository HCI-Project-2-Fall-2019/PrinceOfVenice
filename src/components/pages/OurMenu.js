import React, { Component } from 'react';

import background from '../images/bk_content.png';
import pasta_salad_pic from "../images/menu_images/pasta_salad.jpg"
import rucola_salad_pic from "../images/menu_images/rucola_salad.jpg"
import spaghetti_alla_puttanesca_pic from "../images/menu_images/spaghetti_alla_puttanesca.jpg"
import maccheroni_alla_carbonara_pic from "../images/menu_images/maccheroni_alla_carbonara.jpg"

import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const DATA = [
    {
        name: "Salads",
        items: [
            {
                name: "Pasta Salad",
                ingredients: "Pasta, Arugula Salad, Tomatoes , Mozzarella",
                price: "$8",
                img: pasta_salad_pic,
                itemIndex: 1
            },
            {
                name: "Rucola Salad",
                ingredients: "Arugola salad, Fennel. Olive and Orange",
                price: "$8",
                img: rucola_salad_pic,
                itemIndex: 2
            }
        ]
    },
    {
        name: "Pastas",
        items: [
            {
                name: "Spaghetti alla Puttanesca",
                ingredients: "tomatoes, olive oil, anchovies, olives, capers",
                price: "$13",
                img: spaghetti_alla_puttanesca_pic,
                itemIndex: 3
            },
            {
                name: "Maccheroni alla Carbonara",
                ingredients: "Cured Pork Guanciale, Eggs, Pecorino Romano Cheese, Black",
                price: "$14",
                img: maccheroni_alla_carbonara_pic,
                itemIndex: 4
            }
        ]
    }
    // "Dessert": {
    //
    // },
    // "Fresh Handmade Pastas (8oz)": {
    //
    // },
    // "Handmade Pasta Sauces" : {
    //
    // }
];


class OurMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item1: false,
            item2: false,
            item3: false,
            item4: false,
        }
    }

    handleChange = (item) => {
        this.setState({
            ...this.state,
            [item]: !this.state[item]
        })
    };

    render() {

        return (
            <div style={backgroundStyle}>
                <div style={{"padding": "40px 80px 0 80px"}}>
                    <Paper>
                        {DATA.map((category, index) => {
                            return (
                                <div key={index}>
                                    <Typography style={{margin: "10px"}} align="left" variant="h3">{category.name}</Typography>
                                    {Object.keys(category.items).map((itemIndex) => {
                                        const item = category.items[itemIndex];
                                        const booleanMapping = "item" + item.itemIndex;
                                        return (
                                            <ExpansionPanel key={itemIndex} expanded={this.state[booleanMapping]} onChange={() => this.handleChange(booleanMapping)}>
                                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                                    <Typography>{item.name}</Typography>
                                                    <Typography>{item.price}</Typography>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <Typography>{"Ingredients: "+ item.ingredients}</Typography>
                                                    <img src={item.img} height="100" width="100" alt={item.name}/>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </Paper>
                </div>
            </div>         
        );
    }
}

const backgroundStyle = {
    height: 500,
    backgroundPosition: 'center',
    backgroundColor: '#22498a',
    backgroundImage: "url(" + background + ")",
    backgroundRepeat: 'no-repeat',
    resizeMode: "stretch"
}

export default OurMenu;