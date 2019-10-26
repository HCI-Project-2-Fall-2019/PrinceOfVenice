import React, { Component } from 'react';
import {Tabs, Tab} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GalleryOne from './media/GalleryOne';
import GalleryTwo from './media/GalleryTwo';
import Food from './media/Food';
import Ingredient from './media/Ingredient';
import Truck from './media/Truck';
import Cooking from './media/Cooking';

class Media extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 2
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, newValue) {
        this.setState({
            value: newValue
        })
    }

    render() {
        const {value} = this.state;
        return (  
            <div style={boxStyle}>
                <div style={{textAlign:"left"}}>
                    <a 
                        href="https://www.facebook.com/PrinceOfVeniceFoodTruck/" 
                        target="_blank"
                        rel="noopener noreferrer">
                            <FacebookIcon style={{ fontSize: 85, color:"#3b5998" }}/>
                    </a>
                    <a href="https://twitter.com/povfoodtruck" 
                        target="_blank"
                        rel="noopener noreferrer">
                            <TwitterIcon style={{ fontSize: 85, color:"#1B95E0" }}/>
                    </a>
                    <a 
                        href="https://www.instagram.com/princeofvenicefoodtruck/" 
                        target="_blank"
                        rel="noopener noreferrer">
                            <InstagramIcon style={{ fontSize: 85, color:"#383838" }}/>
                    </a>
                </div>
                <div>
                    <Router>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            //scrollButtons="on"
                            indicatorColor="secondary"
                            value={value}
                            onChange={this.handleChange}
                            aria-label="Vertical tabs example"
                            //className={classes.tabs}
                            style={{backgroundColor:"white", height: 602, width: "20%", float:"left", 
                                borderRadius: "0px 0px 0px 5px"}}
                        >
                            <Tab label="Gallery One" component={Link} to="/Media/GalleryOne"
                                style={{border:"1px grey solid", backgroundColor:"#007ac3", marginBottom:"2px", borderRadius: "10px"}}/>
                            <Tab label="Gallery Two" component={Link} to="/Media/GalleryTwo"
                                style={{border:"1px grey solid", backgroundColor:"#007ac3", marginBottom:"2px", borderRadius: "10px"}}/>
                            <Tab label="Foods" component={Link} to="/Media/Foods"
                                style={{border:"1px grey solid", backgroundColor:"#007ac3", marginBottom:"2px", borderRadius: "10px"}}/>
                            <Tab label="Ingredients" component={Link} to="/Media/Ingredient"
                                style={{border:"1px grey solid", backgroundColor:"#007ac3", marginBottom:"2px", borderRadius: "10px"}}/>
                            <Tab label="Truck" component={Link} to="/Media/Truck"
                                style={{border:"1px grey solid", backgroundColor:"#007ac3", marginBottom:"2px", borderRadius: "10px"}}/>
                            <Tab label="Cooking" component={Link} to="/Media/Cooking"
                                style={{border:"1px grey solid", backgroundColor:"#007ac3", marginBottom:"2px", borderRadius: "10px"}}/>
                        </Tabs>
                        <Switch style={{width: "50%"}}>
                            <Route path="/Media/GalleryOne" component={GalleryOne} />
                            <Route path="/Media/GalleryTwo" component={GalleryTwo} />
                            <Route path="/Media/Food" component={Food} />
                            <Route path="/Media/Ingredient" component={Ingredient} />
                            <Route path="/Media/Truck" component={Truck} />
                            <Route path="/Media/Cooking" component={Cooking} />
                            <Route path="/Media" component={Food} />
                        </Switch>
                    </Router>
                </div>
            </div>       
        );
    }
}

const boxStyle = {
    maxWidth: '100%',
    //paddingTop: 10,
    //paddingBottom: 20,
    backgroundColor: 'rgba(255, 255, 255,1)',
    borderRadius: 5,
    margin: "auto",
};

export default Media;