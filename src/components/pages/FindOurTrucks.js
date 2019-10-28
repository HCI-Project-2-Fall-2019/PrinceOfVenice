import React, { Component } from 'react';

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography"

import { ViewState } from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    WeekView,
    Appointments
} from "@devexpress/dx-react-scheduler-material-ui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const Appointment = ({children, style, ...restProps}) => {
    const data = children[1].props.data;
    let color = '#349732';
    if (data.type) {
        if (data.type === "private") {
            color = '#DF1222'
        }
    }
    return (
        <Appointments.Appointment
            {...restProps}
            onClick={() => {
                if (data.location) {
                    window.open(`https://www.google.com/maps/place/${data.location}`, "_blank")
                }
            }}
            style={{
                ...style,
                backgroundColor: color,
                borderRadius: '10px',
            }}
        >
            {children}
        </Appointments.Appointment>
    )
};

const ColorLegend = () => {
    return (
        <div style={{display: "flex", flexDirection: "row", border: "2px ridge"}}>
            <Typography style={{lineHeight: "50px", backgroundColor: "#349732", width: "34%", color: "white"}}>Open to the Public (Click to See in Maps)</Typography>
            <Typography style={{lineHeight: "50px", backgroundColor: "#FFFFFF", width: "34%"}}>Off</Typography>
            <Typography style={{lineHeight: "50px", backgroundColor: "#DF1222", width: "34%", color: "white"}}>Private Event</Typography>
        </div>
    )
};

const today = new Date();

const appointments = [
    {
        title: "Autism Speaks",
        startDate: new Date(2019, 9, 28, 11, 0),
        endDate: new Date(2019, 9, 28, 14, 0),
        id: 0,
        type: "private",
    },
    {
        title: "Ignition Creative",
        startDate: new Date(2019, 9, 29, 11, 0),
        endDate: new Date(2019, 9, 29, 14, 0),
        id: 1,
        location: "12959 Coral Tree Pl, Los Angeles, CA 90066",
        type: "public"
    },
    {
        title: "Nights of the Jack",
        startDate: new Date(2019, 9, 30, 18, 0),
        endDate: new Date(2019, 9, 30, 23, 0),
        id: 2,
        location: "26800 West Mulholland Hwy, Calabasas, CA 91302",
        type: "public"
    },
    {
        title: "202 Main St.",
        startDate: new Date(2019, 9, 31, 11, 0),
        endDate: new Date(2019, 9, 31, 14, 0),
        id: 3,
        location: "202 Main St., Los Angeles, CA",
        type: "public"
    },
    {
        title: "LMU Playa Vista Campus",
        startDate: new Date(2019, 9, 31, 13, 0),
        endDate: new Date(2019, 9, 31, 15, 0),
        id: 6,
        location: "12105 E Waterfront Dr, Los Angeles, CA 90094",
        type: "public"
    },
    {
        title: "Group 3 Private Event",
        startDate: new Date(2019, 10, 1, 12, 0),
        endDate: new Date(2019, 10, 1, 17, 0),
        id: 4,
        location: "",
        type: "private"
    },
];

const theme = createMuiTheme({ palette: { type: "light", primary: blue } });

class FindOurTrucks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: appointments,
        };
    }

    render() {
        const { data } = this.state;
        const date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
        return (
            <MuiThemeProvider theme={theme}>
                <Paper style={{borderRadius: "10px"}}>
                    <div style={{margin: "10px 0"}}>
                        <ColorLegend/>
                    </div>
                    <Scheduler data={data}>
                        <ViewState currentDate={date} />
                        <WeekView startDayHour={10.5} endDayHour={24} />
                        <Appointments appointmentComponent={Appointment} />
                    </Scheduler>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default FindOurTrucks;