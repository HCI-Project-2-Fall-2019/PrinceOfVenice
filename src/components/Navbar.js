import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import OurMenu from './pages/OurMenu';
import AboutUs from './pages/AboutUs';
import FindOurTrucks from './pages/FindOurTrucks';
import PhotoGallery from './pages/PhotoGallery';
import NewsPress from './pages/NewsPress';
import Catering from './pages/Catering';
import LicenseTerms from './pages/LicenseTerms';
import ContactUs from './pages/ContactUs';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
    render() {
        return (  
            <Router>
                <div style={backgroundStyle}>
                    <List>
                        <Link to={'/'} style={linkStyle}><Button style={menuStyle}>FIND OUR TRUCKS</Button></Link> 
                        <Link to={'/OurMenu'} style={linkStyle}><Button style={menuStyle}>OUR MENU</Button></Link> 
                        <Link to={'/PhotoGallery'} style={linkStyle}><Button style={menuStyle}>PHOTOGALLERY MENU</Button></Link> 
                        <Link to={'/NewsPress'} style={linkStyle}><Button style={menuStyle}>PRESS/NEWS</Button></Link> 
                        <Link to={'/AboutUs'} style={linkStyle}><Button style={menuStyle}>ABOUT US</Button></Link> 
                        {/* <Button style={menuStyle}> <Link to={'/LicenseTerms'} style={linkStyle}> LICENSE TERMS </Link> </Button> */}
                        <Link to={'/ContactUs'} style={linkStyle}><Button style={menuStyle}>CONTACT US</Button></Link> 
                    </List>
                </div> 
                <Switch> 
                    <Route path='/AboutUs' component={AboutUs} />
                    <Route path='/OurMenu' component={OurMenu} />
                    <Route path='/PhotoGallery' component={PhotoGallery} />
                    <Route path='/NewsPress' component={NewsPress} />
                    <Route path='/Catering' component={Catering} />
                    <Route path='/LicenseTerms' component={LicenseTerms} />
                    <Route path='/ContactUs' component={ContactUs} />
                    <Route ex path='/' component={FindOurTrucks} />
                </Switch>  
            </Router>      
        );
    }
}

const backgroundStyle = {
    //height: 54,
    backgroundColor: '#007ac3',
    borderTop: '6px solid #a5915f',
    resizeMode: 'stretch',
}

/*const navStyle = {
    listStyleType: 'none',
    fontSize: 15,
    fontFamily: 'sans-serif',
    
    //remove
    display: "table",
    width: "90%",
    minWidth: 900,

}*/

const menuStyle = {
    display: 'inline',
    marginRight: 5,
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    color: '#fff'
    //remove
    //display: "table-cell"
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
}
export default Navbar;