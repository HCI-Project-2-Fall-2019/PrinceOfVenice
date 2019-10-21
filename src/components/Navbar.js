import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import OurMenu from './pages/OurMenu';
import AboutUs from './pages/AboutUs';
import FindOurTrucks from './pages/FindOurTrucks';
import Media from './pages/Media';
import LicenseTerms from './pages/LicenseTerms';
import ContactUs from './pages/ContactUs';
import FAQs from './pages/FAQs';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Navbar extends Component {
    render() {
        return (  
            <Router>
                <div style={backgroundStyle}>
                    <List>
                        <ButtonGroup variant="text" color="primary" size="large" aria-label="large contained secondary button group">
                        <Link to={'/LocateUs'} style={linkStyle}><Button style={menuStyle}>LOCATE Us</Button></Link> 
                        <Link to={'/Menu'} style={linkStyle}><Button style={menuStyle}>MENU</Button></Link> 
                        <Link to={'/Media'} style={linkStyle}><Button style={menuStyle}>MEDIA</Button></Link>
                        <Link to={'/AboutUs'} style={linkStyle}><Button style={menuStyle}>ABOUT US</Button></Link> 
                        <Link to={'/ContactUs'} style={linkStyle}><Button style={menuStyle}>CONTACT US</Button></Link>
                        <Link to={'/FAQs'} style={linkStyle}><Button style={menuStyle}>FAQs</Button></Link> 
                        </ButtonGroup>
                    </List>
                </div> 
                <Switch> 
                    <Route ex path='/LocateUs' component={FindOurTrucks} />
                    <Route path='/AboutUs' component={AboutUs} />
                    <Route path='/Menu' component={OurMenu} />
                    <Route path='/Media' component={Media} />
                    <Route path='/LicenseTerms' component={LicenseTerms} />
                    <Route path='/ContactUs' component={ContactUs} />
                    <Route path='/FAQs' component={FAQs} />
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