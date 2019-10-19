import React, { Component } from 'react';
import background from '../images/bk_content.png';
import TextField from '@material-ui/core/TextField';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Button from '@material-ui/core/Button';
import { relative } from 'path';
import { textAlign } from '@material-ui/system';

class ContactUs extends Component {
    constructor (props) {
        super(props);
        this.state = {region: '' };
      }
     
      selectRegion (val) {
        this.setState({ region: val });
      }

    render() {
        const { region } = this.state;  
        return (
            <div style={backgroundStyle}>
                Contact Us
                <form onSubmit={this.handleSubmit} style={boxStyle}>
                    <div style={textStyle}> If you need any information, or if you want our food trucks for some event, 
                        please contact us by using the form below and you will be contacted as soon as possible. 
                        You can also contact us by calling (310) 614-5443. 
                    </div>
                    <div style={formStyle}>
                        <div style={rowStyle}> 
                            <div style={columnStyle}> Name: </div> 
                            <div style={columnStyle}> 
                                <TextField  floatingLabelText="ID Number" 
                                            InputProps={{disableUnderline: true,}} 
                                            style={textBoxStyle}/> 
                            </div>
                        </div>
                        <div style={rowStyle}> 
                            <div style={columnStyle}> State: </div> 
                            <div style={columnStyle}> 
                                <RegionDropdown     country='United States' 
                                                    value={region}
                                                    onChange={(val) => this.selectRegion(val)}
                                                    style={selectStyle}/> </div>
                        </div>
                        <div style={rowStyle}> 
                            <div style={columnStyle}> Email: </div> 
                            <div style={columnStyle}> 
                                <TextField  floatingLabelText="ID Number" 
                                            InputProps={{disableUnderline: true,}} 
                                            style={textBoxStyle}/> 
                            </div>
                        </div>
                    </div>
                </form>
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

const textStyle = {
    fontSize: 16,
    fontFamily: 'Arial',
    textAlign: 'left',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 15
}

const boxStyle = {
    height: 800,
    //width: 950,
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backgroundRepeat: 'no-repeat',
    resizeMode: "stretch",
    borderRadius: 10,
    margin: "auto",
}

const formStyle = {
    //margin: 'auto',
    //float: 'left',
    //marginLeft: 40,
    //textAlign: 'left'
}

const rowStyle = {
    textAlign: 'left',
    margin: 'auto',
    display: 'table',
    paddingBottom: 10,
}

const columnStyle = {
    display: 'table-cell',
    paddingLeft: 20
}

const textBoxStyle = {
    width: 180,
    height: 30,
    border: "0.5px solid black",
    backgroundColor: '#fff',
    borderRadius: 5,
}

const selectStyle = {
    width: 185,
    height: 30
}
export default ContactUs;