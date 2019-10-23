import React, { Component } from 'react';
import {AppBar, Tabs, Tab} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Food from './media/Food';

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
                <div>
                    <a 
                        href="https://www.facebook.com/PrinceOfVeniceFoodTruck/" 
                        target="_blank"
                        rel="noopener noreferrer">
                            <FacebookIcon style={{ fontSize: 100, color:"#3b5998" }}/>
                    </a>
                    <a href="https://twitter.com/povfoodtruck" 
                        target="_blank"
                        rel="noopener noreferrer">
                            <TwitterIcon style={{ fontSize: 100, color:"#1B95E0" }}/>
                    </a>
                    <a 
                        href="https://www.instagram.com/princeofvenicefoodtruck/" 
                        target="_blank"
                        rel="noopener noreferrer">
                            <InstagramIcon style={{ fontSize: 100, color:"#383838" }}/>
                    </a>
                </div>
                <div>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        value={value}
                        onChange={this.handleChange}
                        aria-label="Vertical tabs example"
                        //className={classes.tabs}
                        style={{backgroundColor:"lightblue", height: 402, width: "25%", float:"left"}}
                    >
                        <Tab label="Gallery One" component={Link} to="/Media/GalleryOne"/>
                        <Tab label="Gallery Two" component={Link} to="/Media/GalleryTwo"/>
                        <Tab label="Foods" component={Link} to="/Media/GalleryThree"/>
                        <Tab label="Ingredients" component={Link} to="/Media/GalleryFour"/>
                        <Tab label="Truck" component={Link} to="/Media/GalleryFive"/>
                        <Tab label="Cooking" component={Link} to="/Media/GallerySix"/>
                    </Tabs>
                    <Switch style={{width: "50%"}}>
                        <Route path="/Media/GalleryOne" component={FacebookIcon} />
                        <Route path="/Media/GalleryTwo" component={TwitterIcon} />
                        <Route path="/Media/GalleryThree" component={Food} />
                        <Route path="/Media/GalleryFour" component={TwitterIcon} />
                        <Route path="/Media/GalleryFive" component={TwitterIcon} />
                        <Route path="/Media/GallerySix" component={TwitterIcon} />
                    </Switch>
                </div>
            </div>       
        );
    }
}

const boxStyle = {
    maxWidth: '100%',
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: 'rgba(255, 255, 255,1)',
    borderRadius: 10,
    margin: "auto",
};

export default Media;