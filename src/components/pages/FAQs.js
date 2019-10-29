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
                name: "Is he really the Prince of Venice?",
                answer:
                    <span>
                        Yes, but technically no. You can read about it more on our <a href="./AboutUs">About Us</a> page.
                    </span>,
                itemIndex: 1},
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
                name: "I had a bad experience. What can I do?",
                answer: 
                    <span>
                        We're sorry you didn't have the best experience. We are committed to customer service so please tell us how we can make it better via <a href="./ContactUs">Contact Us</a> page and choosing "Feedback and Suggestions" on the Subject option.
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
        name: "Franchise Opportunity",
        items: [
        	{
        		name: "Can I own a Prince of Venice Food Truck?",
        		answer: <span>
                    Yes! A copy of our license terms can be found <a href='LicenseTerms'>here</a>.
                </span>,
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
            <Paper style={{borderRadius: "10px"}}>
                {DATA.map((category, index) => {
                    return (
                        <div key={index}>
                            <Typography style={{padding: "10px", marginTop: "20px"}} align="left" variant="h3">{category.name}</Typography>
                            {Object.keys(category.items).map((itemIndex) => {
                                const item = category.items[itemIndex];
                                const booleanMapping = "item" + item.itemIndex;

                                return (
                                    <ExpansionPanel key={itemIndex} expanded={this.state[booleanMapping]} onChange={() => this.handleChange(booleanMapping)}>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                            <Typography style={{textAlign:"left", fontWeight:750, fontStyle:"italic"}}>{item.name}</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography style={{textAlign:"left"}}>{item.answer}</Typography>
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