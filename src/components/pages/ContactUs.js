import React, { Component } from 'react';
import background from '../images/bk_content.png';

class ContactUs extends Component {
    render() {
        return (  
            <div style={backgroundStyle}>
                Contact Us
            </div>         
        );
    }
}

const backgroundStyle = {
    height: 500,
    backgroundPosition: 'center',
    backgroundColor: '#22498a',
    backgroundImage: "url(" + background + ")",
    backgroundRepeat: 'no-repeat',
    resizeMode: "stretch"
}

export default ContactUs;