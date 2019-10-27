import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import Typography from "@material-ui/core/Typography"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const DATA = [
	{
        name: "Restaurant Info",
        items: [
        	{
                name: "What are the hours of operation for Prince of Venice?",
                answer: 
                    <span>
                        Our operation hours vary weekly.
                        Please check <a href="./LocateUs">Locate Us</a> page for information regarding our operation hours.
                    </span>,
                itemIndex: 1
            },
            {
                name: "Does Prince of Venice open during Holiday Hours?",
                answer: "We close on all holidays.",
                itemIndex: 2
            },
            {
                name: "Does Prince of Venice offer catering?",
                answer: 
                    <span>
                        Yes we do!
                        Please check the <a href="./ContactUs">Contact Us</a> page and select "Catering" on Subject for information regarding caterings.
                    </span>,
                itemIndex: 3
            },
            {
                name: "Where do I fill out a survey of my visit?",
                answer: 
                    <span>
                        You may also send us a feedback under the <a href="./ContactUs">Contact Us</a> page and selecting "Suggestions and feedbacks" on the Subject option.
                    </span>,
                itemIndex: 4
            },
        ]
    },
    {
        name: "Menu",
        items: [
        	{
        		name: "Does the Prince of Venice offer vegetarian dishes?",
        		answer: "Yes, we do!",
        		itemIndex: 5,
        	},
        	{
        		name: "I am allergic to Dairy, Egg, Peanut, Seafood, Seasame, etc. Does your food contain those?",
        		answer: "Most of our dishes contain cheese, and some contain seafood. Please ask employee for more details.",
        		itemIndex: 6,
        	},
            {
                name: "Is your pastas available for purchase?",
                answer: 
                    <span>
                        Yes, we do sell our freshly handmade pasta and pasta sauce. Please check the <a href="./Menu">Menu</a> page for pricing information.
                    </span>,
                itemIndex: 7,
            },
            {
                name: "Are Prince of Venice recipes available?",
                answer: "Sorry, we keep it secret.",
                itemIndex: 8,
            },
        ]
    },
    {
        name: "To Go",
        items: [
        	{
        		name: "Does Prince of Venice offer ToGo ordering online?",
        		answer: "We do not offer online ordering.",
        		itemIndex: 9,
        	},
        ]
    },
     {
        name: "License",
        items: [
        	{
        		name: "Does Price of Venice have a food license?",
        		answer: "Yes! <ADD LINK TO LICENSE/TERMS PAGE LATER> ",
        		itemIndex: 10,
        	},
        ]
    },
];

class FAQs extends Component {
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
                            <Typography style={{padding: "10px", backgroundColor: "lightgrey"}} align="left" variant="h3">{category.name}</Typography>
                            {Object.keys(category.items).map((itemIndex) => {
                                const item = category.items[itemIndex];
                                const booleanMapping = "item" + item.itemIndex;

                                return (
                                    <ExpansionPanel key={itemIndex} expanded={this.state[booleanMapping]} onChange={() => this.handleChange(booleanMapping)}>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                            <Typography style={{textAlign:"left", fontWeight:750, fontStyle:"italic"}}>{item.name}</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography style={{textAlign:"left"}}> {item.answer}</Typography>
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

export default FAQs;