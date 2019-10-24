import React, { Component } from 'react';

import Paper from "@material-ui/core/Paper";
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
                borderRadius: '8px',
            }}
        >
            {children}
        </Appointments.Appointment>
    )
};

const today = new Date();

const appointments = [
    {
        title: "Autism Speaks",
        startDate: new Date(2019, 9, 23, 11, 0),
        endDate: new Date(2019, 9, 23, 14, 0),
        id: 0,
        type: "private",
    },
    {
        title: "Ignition Creative",
        startDate: new Date(2019, 9, 24, 11, 0),
        endDate: new Date(2019, 9, 24, 14, 0),
        id: 1,
        location: "12959 Coral Tree Pl, Los Angeles, CA 90066",
        type: "public"
    },
    {
        title: "Nights of the Jack",
        startDate: new Date(2019, 9, 25, 18, 0),
        endDate: new Date(2019, 9, 25, 23, 0),
        id: 2,
        location: "26800 West Mulholland Hwy, Calabasas, CA 91302",
        type: "public"
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
                <Paper style={{margin: "0 40px"}}>
                    <Scheduler data={data}>
                        <ViewState currentDate={date} />
                        <WeekView startDayHour={10.5} endDayHour={24} />
                        <Appointments testProp="yeet" appointmentComponent={Appointment} />
                    </Scheduler>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default FindOurTrucks;