import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import OurMenu from './pages/OurMenu';
import AboutUs from './pages/AboutUs';
import FindOurTrucks from './pages/FindOurTrucks';
import Media from './pages/Media';
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
                        <Link to={'/Media'} style={linkStyle}><Button style={menuStyle}>Media</Button></Link>
                        <Link to={'/AboutUs'} style={linkStyle}><Button style={menuStyle}>ABOUT US</Button></Link> 
                        <Link to={'/ContactUs'} style={linkStyle}><Button style={menuStyle}>CONTACT US</Button></Link>
                    </List>
                </div> 
                <Switch> 
                    <Route path='/AboutUs' component={AboutUs} />
                    <Route path='/OurMenu' component={OurMenu} />
                    <Route path='/Media' component={Media} />
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