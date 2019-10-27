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
import FAQs from './pages/FAQs';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { SnackbarProvider } from 'notistack';

class Navbar extends Component {
    render() {
        return (  
            <Router>
                <div style={navbarBackgroundStyle}>
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
                <SnackbarProvider>
                <div className="Content">
                    <div className="Content-Component" style={contentBackgroundStyle}>
                        <div style={{padding: "40px 80px 0 80px"}}>
                            <Switch>
                                <Route path='/AboutUs' component={AboutUs} />
                                <Route path='/Menu' component={OurMenu} />
                                <Route path='/Media' component={Media} />
                                <Route path='/LicenseTerms' component={LicenseTerms} />
                                <Route path='/FAQs' component={FAQs}/>
                                <Route path='/ContactUs' component={ContactUs} />
                                <Route path='/LocateUs' component={FindOurTrucks} />
                                <Route ex path='/' component={FindOurTrucks} />
                            </Switch>
                        </div>
                    </div>
                    <div className="Content-Footer" style={footerBackgroundStyle}>
                    </div>
                </div>
                </SnackbarProvider>
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
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    color: '#fff'
};

const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
};

export default Navbar;