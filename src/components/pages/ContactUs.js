import React, { Component } from 'react';
import background from '../images/bk_content.png';
import { FormControl, TextField, Select, InputLabel, MenuItem, FormHelperText} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from "@material-ui/pickers";
import Button from '@material-ui/core/Button';
import MomentUtils from "@date-io/moment";

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
                },
                instruction: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                city: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                states: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                budget: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                food: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                servings: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                time: null,
                date: null
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.GeneralInquiry = this.GeneralInquiry.bind(this);
        this.Feedback = this.Feedback.bind(this);
        this.Catering = this.Catering.bind(this);
        this.validate = this.validate.bind(this);
        this.clearForm = this.clearForm.bind(this);

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
    }

    validate (evt) {
        alert("Validating");
    }

    clearForm (evt) {
        this.setState({ 
            form: {
                ...this.state.form,
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
                inquiry: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                feedback: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                instruction: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                city: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                states: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                budget: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                food: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                servings: {
                    value: '',
                    isInvalid: false,
                    errorMessage: ''
                },
                time: null,
                date: null
            }
        })
    }

    handleSubmit (evt) {
        //Function to validate (inside will modify isInvalid and errorMessage)
        //Function to clear state if validated success
        //Function to produce snackbar if validated success
        evt.preventDefault();
        this.validate();
        this.clearForm();
        alert("Submitted!"); 
    }

    handleDateChange(val) {
        this.setState({ 
            form: {
                ...this.state.form,
                date: val 
            }
        });
    }

    handleTimeChange(val) {
        this.setState({ 
            form: {
                ...this.state.form,
                time: val 
            }
        });
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
                    value={this.state.form.inquiry.value}
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

    Catering () {
        return(
            <div>
            <div style={rowStyle}>
                <TextField
                    label="City"
                    name="city"        
                    value={this.state.form.city.value}            
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    helperText={this.state.form.city.errorMessage}
                    error={this.state.form.city.isInvalid}
                    required
                    style={{bottom: 16, width:213}}
                />
                {" "}
                <FormControl required variant="outlined" error={this.state.form.states.isInvalid}>
                    <InputLabel>State</InputLabel>
                    <Select
                        name="states"
                        value={this.state.form.states.value}
                        onChange={this.handleChange}
                        labelWidth={50}
                        style={{width: 213}}
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value={1}>Alabama</MenuItem>
                        <MenuItem value={2}>Alaska</MenuItem>
                        <MenuItem value={3}>Arizona</MenuItem>
                        <MenuItem value={4}>Arkansas</MenuItem>
                        <MenuItem value={5}>California</MenuItem>
                        <MenuItem value={6}>Colorado</MenuItem>
                        <MenuItem value={7}>Connecticut</MenuItem>
                        <MenuItem value={8}>Delaware</MenuItem>
                        <MenuItem value={9}>Florida</MenuItem>
                        <MenuItem value={10}>Georgia</MenuItem>
                        <MenuItem value={11}>Hawaii</MenuItem>
                        <MenuItem value={12}>Idaho</MenuItem>
                        <MenuItem value={13}>Illinois</MenuItem>
                        <MenuItem value={14}>Indiana</MenuItem>
                        <MenuItem value={15}>Iowa</MenuItem>
                        <MenuItem value={16}>Kansas</MenuItem>
                        <MenuItem value={17}>Kentucky</MenuItem>
                        <MenuItem value={18}>Louisiana</MenuItem>
                        <MenuItem value={19}>Maine</MenuItem>
                        <MenuItem value={20}>Maryland</MenuItem>
                        <MenuItem value={21}>Massachusetts</MenuItem>
                        <MenuItem value={22}>Michigan</MenuItem>
                        <MenuItem value={23}>Minnesota</MenuItem>
                        <MenuItem value={24}>Mississippi</MenuItem>
                        <MenuItem value={25}>Missouri</MenuItem>
                        <MenuItem value={26}>Montana</MenuItem>
                        <MenuItem value={27}>Nebraska</MenuItem>
                        <MenuItem value={28}>Nevada</MenuItem>
                        <MenuItem value={29}>New Hampshire</MenuItem>
                        <MenuItem value={30}>New Jersey</MenuItem>
                        <MenuItem value={31}>New Mexico</MenuItem>
                        <MenuItem value={32}>New York</MenuItem>
                        <MenuItem value={33}>North Carolina</MenuItem>
                        <MenuItem value={34}>North Dakota</MenuItem>
                        <MenuItem value={35}>Ohio</MenuItem>
                        <MenuItem value={36}>Oklahoma</MenuItem>
                        <MenuItem value={37}>Oregon</MenuItem>
                        <MenuItem value={38}>Pennsylvania</MenuItem>
                        <MenuItem value={39}>Rhode Island</MenuItem>
                        <MenuItem value={40}>South Carolina</MenuItem>
                        <MenuItem value={41}>South Dakota</MenuItem>
                        <MenuItem value={42}>Tennessee</MenuItem>
                        <MenuItem value={43}>Texas</MenuItem>
                        <MenuItem value={44}>Utah</MenuItem>
                        <MenuItem value={45}>Vermont</MenuItem>
                        <MenuItem value={46}>Virginia</MenuItem>
                        <MenuItem value={47}>Washington</MenuItem>
                        <MenuItem value={48}>West Virginia</MenuItem>
                        <MenuItem value={49}>Wisconsis</MenuItem>
                        <MenuItem value={50}>Wyoming</MenuItem>
                    </Select>
                    <FormHelperText>{this.state.form.states.errorMessage}</FormHelperText>
                </FormControl>
            </div>
            <div style={rowStyle}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDatePicker
                        name="date"
                        placeholder="MM/DD/YYYY"
                        format={"MM/DD/YYYY"}
                        value={this.state.form.date}
                        onChange={(val) => this.handleDateChange(val)}
                        animateYearScrolling={false}
                        autoOk={true}
                        style={{width: 195, paddingBottom:20}}
                    />
                </MuiPickersUtilsProvider>
                {' '}
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardTimePicker                      
                        placeholder="02:00 PM"                                                                    
                        value={this.state.form.time}
                        onChange={(val) => this.handleTimeChange(val)}
                        style={{width: 230, paddingBottom:20}}
                    />
                </MuiPickersUtilsProvider>
            </div>
            <div style={rowStyle}>
                <TextField
                    label="Budget ($)"
                    name="budget"
                    type="number"
                    inputProps={{ min: "50", max: "2500", step: "1" }}
                    value={this.state.form.budget.value}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    //helperText={this.state.form.budget.errorMessage}
                    //error={this.state.form.budget.isInvalid}
                    //required
                    style={{width: 130, bottom: 16}}
                />
                {' '}                
                <FormControl variant="outlined" error={this.state.form.servings.isInvalid}>
                    <InputLabel>Servings</InputLabel>
                    <Select
                        name="servings"
                        value={this.state.form.servings.value}
                        onChange={this.handleChange}
                        labelWidth={60}
                        style={{width: 130}}
                    >
                        <MenuItem value="">
                            <em></em>
                        </MenuItem>
                        <MenuItem value={1}>1 to 10</MenuItem>
                        <MenuItem value={2}>11 to 50</MenuItem>
                        <MenuItem value={3}>50+</MenuItem>
                        <MenuItem value={4}>Other</MenuItem>
                    </Select>
                    <FormHelperText>{this.state.form.servings.errorMessage}</FormHelperText>
                </FormControl>
                {' '}
                <FormControl variant="outlined" error={this.state.form.food.isInvalid}>
                    <InputLabel>Food Choice</InputLabel>
                    <Select
                        name="food"
                        value={this.state.form.food.value}
                        onChange={this.handleChange}
                        labelWidth={100}
                        style={{width: 160}}
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value={1}>Pasta Only</MenuItem>
                        <MenuItem value={2}>Pasta + Salad + Dessert</MenuItem>
                        <MenuItem value={3}>Other</MenuItem>
                    </Select>
                    <FormHelperText>{this.state.form.food.errorMessage}</FormHelperText>
                </FormControl>
            </div>
            <div style={rowStyle}>
                <TextField
                    label="Special Instruction(s)"
                    name="instruction"
                    multiline
                    rows="4"
                    rowsMax="4"
                    onChange={this.handleChange}
                    value={this.state.form.instruction.value}
                    margin="normal"
                    variant="outlined"
                    helperText={this.state.form.instruction.errorMessage}
                    error={this.state.form.feedback.isInvalid}
                    style={{width: 430}}
                />
            </div>
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
                    value={this.state.form.feedback.value}
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
        console.log(form);

        if (form.subject.value === 1)  {
            subform = this.GeneralInquiry();
        } else if (form.subject.value === 2) {
            subform = this.Feedback();
        } else if (form.subject.value === 3) {
            subform = this.Catering();
        }

        return (
            <div style={backgroundStyle}>
                <div style={titleStyle}> 
                    CONTACT US
                </div>
                <form style={boxStyle} onSubmit={this.handleSubmit}>
                    <div style={textStyle}>
                        Please use the form below to contact us.
                    </div>
                    <div style={rowStyle}>
                        <TextField
                            label="Name"
                            name="name"   
                            value={form.name.value}                 
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            helperText={form.name.errorMessage}
                            error={form.name.isInvalid}
                            required
                            style={{float: 'none', width: 213}}
                        />
                        {" "}
                        <TextField
                            label="Email"
                            name="email"   
                            value={form.email.value}                                  
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            helperText={form.email.errorMessage}
                            error={form.email.isInvalid}
                            required
                            style={{float: 'none', width: 213}}
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
                </form>
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
    //fontFamily: 'CenturyGothic',
    textAlign: 'center',
    color: '#fff',
    paddingTop: 20,
    paddingBottom: 10
}

const textStyle = {
    fontSize: 22,
    //fontFamily: 'CenturyGothic',
    margin: 10,
    paddingTop: 15,
    textAlign: 'center'
}

const boxStyle = {
    //width: '80%',
    width: '500px',
    //height: '800px',
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    resizeMode: "stretch",
    borderRadius: 10,
    margin: "auto"
}

const rowStyle = {
    //float: 'left', 
    marginLeft: 20,
}

const submitButtonStyle = {
    color: '#fff',
    backgroundColor: 'rgba(34,73,138, 0.8)',
}

export default ContactUs;