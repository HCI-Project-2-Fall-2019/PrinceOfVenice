import React, { Component } from 'react';
import background from './images/bk_center.png';

class Footer extends Component {
    render() {
        return (
            <div style={backgroundStyle}>
            </div>                
        );
    }
}

const backgroundStyle = {
    height: 170,
    backgroundPosition: 'center 20px',
    backgroundColor: '#22498a',
    backgroundImage: "url(" + background + ")",
    backgroundRepeat: 'no-repeat',
    resizeMode: "stretch",
    paddingBottom: 170
}

export default Footer;