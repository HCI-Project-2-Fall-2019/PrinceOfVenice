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
                answer: "We open on Wednesdays from 11 am - 2 pm, and Saturdays from 6 pm - 11 pm.",
                itemIndex: 1
            },
            {
                name: "Does Prince of Venice offer catering?",
                answer: "Yes, please visit CONTACT US page for more information.",
                itemIndex: 2
            },
            {
                name: "Holiday Hours?",
                answer: "We close on all holidays.",
                itemIndex: 3
            },
            {
                name: "Where do I fill out a survey of my visit?",
                answer: "You may send us a feedback under CONTACT US page.",
                itemIndex: 4
            },
        ]
    },
    {
        name: "Menu",
        items: [
        	{
        		name: "Does the Prince of Venice offer vegetarian dishes?",
        		answer: "Yes!",
        		itemIndex: 5,
        	},
        	{
        		name: "I am allergic to Dairy, Egg, Peanut, Seafood, Seasame, etc. Does your food contain those?",
        		answer: "Most of our dishes contain cheese, some contain seafood. Please ask employee for more details.",
        		itemIndex: 6,
        	},
            {
                name: "Is your pastas available for purchase?",
                answer: "Yes!",
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
        name: "ToGo",
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
        		answer: "Yes!",
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
            <div>
                <h1> FAQ </h1>
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
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography style={{marginLeft: 20, textAlign:"left"}}>{item.answer}</Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                )
                            })}
                        </div>
                    )
                })}
            </div> 
        );
    }
}

export default FAQs;