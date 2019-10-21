import React, { Component } from 'react';

import contentBackground from './images/bk_content.png';
import footerBackground from './images/bk_center.png';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import OurMenu from './pages/OurMenu';
import AboutUs from './pages/AboutUs';
import FindOurTrucks from './pages/FindOurTrucks';
import Media from './pages/Media';
import LicenseTerms from './pages/LicenseTerms';
import ContactUs from './pages/ContactUs';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
    render() {
        return (  
            <Router>
                <div style={navbarBackgroundStyle}>
                    <List>
                        <Link to={'/'} style={linkStyle}><Button style={menuStyle}>FIND OUR TRUCKS</Button></Link> 
                        <Link to={'/OurMenu'} style={linkStyle}><Button style={menuStyle}>OUR MENU</Button></Link> 
                        <Link to={'/Media'} style={linkStyle}><Button style={menuStyle}>Media</Button></Link>
                        <Link to={'/AboutUs'} style={linkStyle}><Button style={menuStyle}>ABOUT US</Button></Link> 
                        <Link to={'/ContactUs'} style={linkStyle}><Button style={menuStyle}>CONTACT US</Button></Link>
                    </List>
                </div>
                <div className="Content">
                    <div className="Content-Component" style={contentBackgroundStyle}>
                        <div style={{"padding": "40px 80px 0 80px"}}>
                            <Switch>
                                <Route path='/AboutUs' component={AboutUs} />
                                <Route path='/OurMenu' component={OurMenu} />
                                <Route path='/Media' component={Media} />
                                <Route path='/LicenseTerms' component={LicenseTerms} />
                                <Route path='/ContactUs' component={ContactUs} />
                                <Route ex path='/' component={FindOurTrucks} />
                            </Switch>
                        </div>
                    </div>
                    <div className="Content-Footer" style={footerBackgroundStyle}>
                    </div>
                </div>
            </Router>      
        );
    }
}

const navbarBackgroundStyle = {
    backgroundColor: '#007ac3',
    borderTop: '6px solid #a5915f',
    resizeMode: 'stretch',
};

const contentBackgroundStyle = {
    backgroundPosition: 'center',
    backgroundColor: '#22498a',
    backgroundImage: "url(" + contentBackground + ")",
    backgroundRepeat: 'no-repeat',
    resizeMode: "stretch"
};


const footerBackgroundStyle = {
    minHeight: 170,
    backgroundPosition: 'center 20px',
    backgroundColor: '#22498a',
    backgroundImage: "url(" + footerBackground + ")",
    backgroundRepeat: 'no-repeat',
};

const menuStyle = {
    display: 'inline',
    marginRight: 5,
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    color: '#fff'
};

const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
};

export default Navbar;