import React, { Component } from 'react';
import background from '../images/bk_content.png';
import { FormControl, TextField, Select, InputLabel, MenuItem, FormHelperText} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Form from 'react-material-ui-form';
import { textAlign } from '@material-ui/system';

class ContactUs extends Component {
    constructor (props) {
        super();
        this.state = {
            form: {
                name: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                email: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                subject: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                inquiry: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                feedback: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                }
            }
        };
        this.handleChange = this.handleChange.bind(this);

        this.GeneralInquiry = this.GeneralInquiry.bind(this);
        this.Feedback = this.Feedback.bind(this);
    }
     
    handleChange (evt) {
        this.setState({ 
            form: {
                ...this.state.form, 
                [evt.target.name]: {
                    value: evt.target.value,
                    isInvalid: false,
                    errorMessage: '',
                }
            }
        });
        console.log(evt.target.value);
        console.log(evt.target.name);
        console.log(this.state.form);
    }

    GeneralInquiry() {
        return(
            <div style={rowStyle}>
                <TextField
                    label="General Inquiry"
                    name="inquiry"
                    multiline
                    rows="4"
                    rowsMax="4"
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    helperText={this.state.form.inquiry.errorMessage}
                    error={this.state.form.inquiry.isInvalid}
                    required
                    style={{width: 430}}
                />
            </div>
        )
    }

    Feedback() { 
        return(
            <div style={rowStyle}>
                <TextField
                    label="Feedback and Suggestions"
                    name="feedback"
                    multiline
                    rows="4"
                    rowsMax="4"
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    helperText={this.state.form.feedback.errorMessage}
                    error={this.state.form.feedback.isInvalid}
                    required
                    style={{width: 430}}
                />
            </div>
        )
    }

    render() {
        const { form } = this.state;
        let subform;

        if (form.subject.value === 1)  {
            subform = this.GeneralInquiry();
        } else if (form.subject.value === 2) {
            subform = this.Feedback();
        }

        return (
            <div style={backgroundStyle}>
                <div style={titleStyle}> 
                    CONTACT US
                </div>
                <Form style={boxStyle}>
                    <div style={textStyle}>
                        Please use the form below to contact us.
                    </div>
                    <div style={rowStyle}>
                        <TextField
                            label="Name"
                            name="name"                    
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            helperText={form.name.errorMessage}
                            error={form.name.isInvalid}
                            required
                        />
                        {" "}
                        <TextField
                            label="Email"
                            name="email"                    
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            helperText={form.email.errorMessage}
                            error={form.email.isInvalid}
                            required
                            style={{width: 230}}
                        />
                    </div>
                    <div style={rowStyle}>
                        <FormControl required variant="outlined" error={form.subject.isInvalid}>
                            <InputLabel>Subject</InputLabel>
                            <Select
                                name="subject"
                                value={form.subject.value}
                                onChange={this.handleChange}
                                labelWidth={65}
                                style={{width: 430}}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>General Inquiry</MenuItem>
                                <MenuItem value={2}>Suggestions and Feedbacks</MenuItem>
                                <MenuItem value={3}>Catering</MenuItem>
                            </Select>
                            <FormHelperText>{form.subject.errorMessage}</FormHelperText>
                        </FormControl>
                    </div>  
                    {subform}
                    <Button
                        label="Submit" 
                        type="submit"
                        style={submitButtonStyle}> Submit 
                    </Button>                  
                </Form>
            </div>
        );
    }
}

const backgroundStyle = {
    height: 700,
    backgroundPosition: 'center',
    backgroundColor: '#22498a',
    backgroundImage: "url(" + background + ")",
    backgroundRepeat: 'no-repeat',
    resizeMode: "stretch"
}

const titleStyle = {
    fontSize: 30,
    fontFamily: 'CenturyGothic',
    textAlign: 'center',
    color: '#fff'
}

const textStyle = {
    fontSize: 22,
    fontFamily: 'CenturyGothic',
    margin: 10,
    paddingTop: 15,
    textAlign: 'center'
}

const boxStyle = {
    //width: '80%',
    width: '480px',
    //height: '800px',
    paddingTop: 10,
    panddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    resizeMode: "stretch",
    borderRadius: 10,
    margin: "auto"
}

const rowStyle = {
    float: 'left', 
    marginLeft: 20,
}

const submitButtonStyle = {
    color: '#fff',
    backgroundColor: 'rgba(34,73,138, 0.8)',
}

export default ContactUs;