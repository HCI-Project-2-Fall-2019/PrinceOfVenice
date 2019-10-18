import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (  
            <div style={backgroundStyle}>
                <ul style={navStyle}>
                    <li style={menuStyle}> <a href="#" style={linkStyle}> ABOUT US </a> </li>
                    <li style={menuStyle}> <a href="#" style={linkStyle}> OUR MENU </a> </li>
                    <li style={menuStyle}> <a href="#" style={linkStyle}> FIND OUR TRUCKS </a> </li>
                    <li style={menuStyle}> <a href="#" style={linkStyle}> PHOTOGALLERY </a> </li>
                    <li style={menuStyle}> <a href="#" style={linkStyle}> PRESS/NEWS </a> </li>
                    <li style={menuStyle}> <a href="#" style={linkStyle}> CATERING </a> </li>
                    <li style={menuStyle}> <a href="#" style={linkStyle}> LICENSE TERMS </a> </li>
                    <li style={menuStyle}> <a href="#" style={linkStyle}> CONTACT US </a> </li>
                </ul>
            </div>         
        );
    }
}

const backgroundStyle = {
    height: 54,
    backgroundColor: '#007ac3',
    borderTop: '6px solid #a5915f',
    resizeMode: 'stretch'
}

const navStyle = {
    listStyleType: 'none',
    //borderTop: 8,
    fontSize: 15,
    fontFamily: 'sans-serif',
    //float: 'left',
}

const menuStyle = {
    display: 'inline',
    //float: 'left',
    marginRight: 10,
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
}
export default Navbar;