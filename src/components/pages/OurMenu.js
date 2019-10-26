import React, { Component } from 'react';

import pasta_salad_pic from "../images/menu_images/pasta_salad.jpg"
import rucola_salad_pic from "../images/menu_images/rucola_salad.jpg"
import spaghetti_alla_puttanesca_pic from "../images/menu_images/spaghetti_alla_puttanesca.jpg"
import maccheroni_alla_carbonara_pic from "../images/menu_images/maccheroni_alla_carbonara.jpg"
import fresh_handmade_pasta_pic from "../images/menu_images/fresh_handmade_pasta.jpg"
import handmade_pasta_sauce_pic from "../images/menu_images/handmade_pasta_sauce.jpg"
import spaghetti_al_limone_pic from "../images/menu_images/spaghetti_al_limone.jpg"
import pasta_al_pollo_curry_pic from "../images/menu_images/pasta_al_pollo_curry.jpg"
import maccheroni_alla_bolognese_pic from "../images/menu_images/maccheroni_alla_bolognese.jpg"
import orecchiette_al_pomodoro_fresco_basilico_pic from "../images/menu_images/orecchiette_al_pomodoro_fresco_basilico.jpg"
import orecchiette_al_pesto_pic from "../images/menu_images/orecchiette_al_pesto.jpg"
import conchiglie_polpette_pic from "../images/menu_images/conchiglie_polpette.jpg"
import conchiglie_alla_norma_pic from "../images/menu_images/conchiglie_alla_norma.jpg"
import penne_alla_primavera_pic from "../images/menu_images/penne_alla_primavera.jpg"
import conchiglie_ai_gamberi_pomodoro_fresco_pic from "../images/menu_images/conchiglie_ai_gamberi_pomodoro_fresco.jpg"
import bucatinii_all_amatriciana_pic from "../images/menu_images/bucatinii_all_amatriciana.jpg"
import tortellini_al_ragu_di_salsiccia_pic from "../images/menu_images/tortellini_al_ragu_di_salsiccia.jpg"
import casarecce_al_salmone_pic from "../images/menu_images/casarecce_al_salmone.jpg"
import caprese_pic from "../images/menu_images/caprese.jpg"
import polpette_al_sugo_pic from "../images/menu_images/polpette_al_sugo.jpg"

import cannoli_pic from "../images/menu_images/cannoli.jpg"
import tartufo_pic from "../images/menu_images/tartufo.jpg"


import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const DATA = [
    {
        name: "Starter",
        items: [
            {
                name: "Caprese",
                ingredients: "Tomateos, Mozzarella, Basil",
                price: "$8",
                img: caprese_pic,
                itemIndex: 1 
            },
            {
                name: "Polpette al Sugo",
                ingredients: "Beef Meatballs, Celery, Carrot, Onion, Tomato Sauce, Parmesan Cheese",
                price: "$12",
                img: polpette_al_sugo_pic,
                itemIndex: 2
            }
        ]
    },
    {
        name: "Salads",
        items: [
            {
                name: "Pasta Salad",
                ingredients: "Pasta, Arugula Salad, Tomatoes , Mozzarella",
                price: "$8",
                img: pasta_salad_pic,
                itemIndex: 3
            },
            {
                name: "Rucola Salad",
                ingredients: "Arugola salad, Fennel. Olive and Orange",
                price: "$8",
                img: rucola_salad_pic,
                itemIndex: 4
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
                itemIndex: 5
            },
            {
                name: "Spaghetti al Limone",
                ingredients: " ",
                price: "$10",
                img: spaghetti_al_limone_pic,
                itemIndex: 6

            },
            {
                name: "Pasta al Pollo & Curry",
                ingredients: "Organic Chicken, Light Cream, Curry, Chives",
                price: "$11",
                img: pasta_al_pollo_curry_pic,
                itemIndex: 7
            },
            {
                name: "Maccheroni alla Carbonara",
                ingredients: "Cured Pork Guanciale, Eggs, Pecorino Romano Cheese, Black Pepper",
                price: "$14",
                img: maccheroni_alla_carbonara_pic,
                itemIndex: 8
            },
            {
                name: "Maccheroni alla Bolognese",
                ingredients: "100% Beef Ground Bolognese Sauce, Parmesan",
                price: "$15",
                img: maccheroni_alla_bolognese_pic,
                itemIndex: 9
            },
            {
                name: "Orecchiette al Pomodoro Fresco & Basilico",
                ingredients: "Fresh Tomato, Extra Virgin Olive Oli, Garlic, Basil",
                price: "$8",
                img: orecchiette_al_pomodoro_fresco_basilico_pic,
                itemIndex: 10
            },
            {
                name: "Orecchiette al Pesto",
                ingredients: "Basil, Parmigiano Cheese, Pecorino Cheese, Almonds, Parsley, Extra Virgin Olive Oil",
                price: "$12",
                img: orecchiette_al_pesto_pic,
                itemIndex: 11
            },
            {
                name: "Conchiglie & Polpette",
                ingredients: "Beef meatballs, Celery, Carrot, Onion, Tomato sauce, Parmesan Cheese",
                price: "$12",
                img: conchiglie_polpette_pic,
                itemIndex: 12
            },
            {
                name: "Conchiglie alla Norma",
                ingredients: "Eggplant, Tomatoes, Basil, Dried Ricotta Cheese",
                price: "$13",
                img: conchiglie_alla_norma_pic,
                itemIndex: 13
            },
            {
                name: "Conchiglie ai Gamberi & Pomodoro Fresco",
                ingredients: "Shrimp, Chopped Fresh Tomatoes, Olive Oil, Garlic, Basil",
                price: "$14",
                img: conchiglie_ai_gamberi_pomodoro_fresco_pic,
                itemIndex: 14
            },
            {
                name: "Penne alla Primavera",
                ingredients: "Penne, Eggplant, Zucchini, Tomateos",
                price: "$13",
                img: penne_alla_primavera_pic,
                itemIndex: 15
            },
            {
                name: "Bucatinii all' Amatriciana",
                ingredients: "Cured Pork Guanciale, Tomatoes, Crushed Red Pepper, Pecorino Romano Cheese, Parsley",
                price: "$14",
                img: bucatinii_all_amatriciana_pic,
                itemIndex: 16
            },
            {
                name: "Tortellini al ragù di salsiccia",
                ingredients: "",
                price: "$15",
                img: tortellini_al_ragu_di_salsiccia_pic,
                itemIndex: 17
            },
            {
                name: "Casarecce al Salmone",
                ingredients: "Smoked Salmon, Summer Squash, Light Cream Sauce, Chive",
                price: "$16",
                img: casarecce_al_salmone_pic,
                itemIndex: 18
            },
            {
                name: "Freash Handmade Pasta",
                ingredients: "pasta",
                price: "$5",
                img: fresh_handmade_pasta_pic,
                itemIndex: 19
            },
             {
                name: "Handmade Pasta Sauce",
                ingredients: "Bolognese, Amatriciana, Norma, Spicy Pork Ragu, Bell Peppers",
                price: "$6",
                img: handmade_pasta_sauce_pic,
                itemIndex: 20
            },
        ]
    },
     {
        name: "Dessert",
        items: [
            {
                name: "Cannoli",
                ingredients: "",
                price: "",
                img: cannoli_pic,
                itemIndex: 21
            },
             {
                name: "Tartufo",
                ingredients: "Fresh Black Truffle, House Made Truffle Butter, Light Cream Sauce, Chives",
                price: "$20",
                img: tartufo_pic,
                itemIndex: 22
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
            <Paper>
                {DATA.map((category, index) => {
                    return (
                        <div key={index}>
                            <Typography style={{margin: "0px 10px 10px 10px"}} align="left" variant="h3">{category.name}</Typography>
                            {Object.keys(category.items).map((itemIndex) => {
                                const item = category.items[itemIndex];
                                const booleanMapping = "item" + item.itemIndex;
                                return (
                                    <ExpansionPanel key={itemIndex} expanded={this.state[booleanMapping]} onChange={() => this.handleChange(booleanMapping)}>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                            <Typography style={{width:"65%", textAlign:"left"}}>{item.name}</Typography>
                                            <Typography>{item.price}</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <img src={item.img} height="100" width="100" alt={item.name}/>
                                            <Typography style={{marginLeft: 20, textAlign:"left"}}>{"Ingredients: "+ item.ingredients}</Typography>

                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                )
                            })}
                        </div>
                    )
                })}
            </Paper>
        );
    }
}

export default OurMenu;