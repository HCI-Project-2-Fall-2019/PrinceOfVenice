import React, { Component } from 'react';
import background from '../images/bk_content.png';
import TextField from '@material-ui/core/TextField';
import MuiPhoneNumber from "material-ui-phone-number";
import { RegionDropdown } from 'react-country-region-selector';
import Button from '@material-ui/core/Button';

class ContactUs extends Component {
    constructor (props) {
        super(props);
        this.state = {region: '', phone: ''};
    }
     
    selectRegion (val) {
        this.setState({ region: val });
    }

    setPhoneNumber(val) {
        this.setState({ phone: val });
    }

    render() {
        const { region, phone } = this.state;  
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
                                            style={textBoxStyle}
                                            required/> 
                            </div>
                        </div>
                        <div style={rowStyle}> 
                            <div style={columnStyle}> State: </div> 
                            <div style={columnStyle}> 
                                <RegionDropdown     country='United States' 
                                                    value={region}
                                                    onChange={(val) => this.selectRegion(val)}
                                                    style={selectStyle}
                                                    required/> 
                            </div>
                        </div>
                        <div style={rowStyle}> 
                            <div style={columnStyle}> City: </div> 
                            <div style={columnStyle}> 
                                <TextField  floatingLabelText="ID Number" 
                                            InputProps={{disableUnderline: true,}} 
                                            style={textBoxStyle}
                                            required/> 
                            </div>
                        </div>
                        <div style={rowStyle}> 
                            <div style={columnStyle}> Email: </div> 
                            <div style={columnStyle}> 
                                <TextField  floatingLabelText="ID Number" 
                                            InputProps={{disableUnderline: true,}} 
                                            style={textBoxStyle}
                                            required/> 
                            </div>
                        </div>
                        <div style={rowStyle}> 
                            <div style={columnStyle}> Phone: </div> 
                            <div style={columnStyle}> 
                                <MuiPhoneNumber defaultCountry={'us'}
                                                value={phone}
                                                onChange={(val) => this.setPhoneNumber(val)}
                                                InputProps={{disableUnderline: true,}} 
                                                style={textBoxStyle}
                                                required/>
                            </div>
                        </div>
                        <div style={rowStyle}> 
                            <div style={columnStyle}> Message: </div> 
                            <div style={columnStyle}> 
                                <TextField  floatingLabelText="ID Number" 
                                            InputProps={{disableUnderline: true,}} 
                                            style={textAreaStyle}
                                            multiline={true}
                                            rows={4}
                                            rowsMax={4}
                                            required/> 
                            </div>
                        </div>
                        <div style={rowStyle}> 
                            <div style={columnStyle}> </div> 
                            <div style={columnStyle}> 
                                <Button label="Submit" 
                                        type="submit"
                                        style={submitButtonStyle}> Submit </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>         
        );
    }
}

const backgroundStyle = {
    height: 600,
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
    height: 900,
    //width: '80%',
    width: '480px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backgroundRepeat: 'no-repeat',
    resizeMode: "stretch",
    borderRadius: 10,
    margin: "auto"
}

const formStyle = {
    //margin: 'auto',
    float: 'left',
    marginLeft: 40,
    textAlign: 'left'
}

const rowStyle = {
    textAlign: 'left',
    margin: 'auto',
    display: 'table',
    paddingBottom: 10,
    height: '40px'
}

const columnStyle = {
    display: 'table-cell',
    paddingLeft: 20,
    width: '80px',
}

const textBoxStyle = {
    width: 280,
    height: 30,
    border: "0.5px solid black",
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 5
}

const textAreaStyle = {
    width: 280,
    height: 100,
    border: "0.5px solid black",
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 5
}

const selectStyle = {
    width: 285,
    height: 30
}

const submitButtonStyle = {
    color: '#fff',
    backgroundColor: 'rgba(34,73,138, 0.8)',
}

export default ContactUs;