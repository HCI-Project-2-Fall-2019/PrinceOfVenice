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

class Navbar extends Component {
    render() {
        return (  
            <Router>
                <div style={backgroundStyle}>
                    <ul style={navStyle}>
                        <li style={menuStyle}> <Link to={'/AboutUs'} style={linkStyle}> ABOUT US  </Link> </li>
                        <li style={menuStyle}> <Link to={'/OurMenu'} style={linkStyle}> OUR MENU  </Link> </li>
                        <li style={menuStyle}> <Link to={'/'} style={linkStyle}> FIND OUR TRUCKS </Link> </li>
                        <li style={menuStyle}> <Link to={'/PhotoGallery'} style={linkStyle}> PHOTOGALLERY </Link> </li>
                        <li style={menuStyle}> <Link to={'/NewsPress'} style={linkStyle}> PRESS/NEWS </Link> </li>
                        <li style={menuStyle}> <Link to={'/Catering'} style={linkStyle}> CATERING </Link> </li>
                        <li style={menuStyle}> <Link to={'/LicenseTerms'} style={linkStyle}> LICENSE TERMS </Link> </li>
                        <li style={menuStyle}> <Link to={'/ContactUs'} style={linkStyle}> CONTACT US </Link> </li>
                    </ul>
                </div> 
                <Switch> 
                    <Route path='/AboutUs' component={AboutUs} />
                    <Route path='/OurMenu' component={OurMenu} />
                    <Route path='/PhotoGallery' component={PhotoGallery} />
                    <Route path='/NewsPress' component={NewsPress} />
                    <Route path='/Catering' component={Catering} />
                    <Route path='/LicenseTerms' component={LicenseTerms} />
                    <Route path='/ContactUs' component={ContactUs} />
                    <Route path='/' component={FindOurTrucks} />
                </Switch>  
            </Router>      
        );
    }
}

const backgroundStyle = {
    height: 54,
    backgroundColor: '#007ac3',
    borderTop: '6px solid #a5915f',
    resizeMode: 'stretch',
}

const navStyle = {
    listStyleType: 'none',
    fontSize: 15,
    fontFamily: 'sans-serif',
    
    //remove
    display: "table",
    width: "90%",
    minWidth: 900,

}

const menuStyle = {
    display: 'inline',
    marginRight: 5,
    
    //remove
    display: "table-cell"
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
}
export default Navbar;