import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarWidget.css';
const CalendarWidget = () => {
    return (
        <div className="calendar-widget">
        <h3>Calendar</h3>
        <Calendar className="custom-calendar" />
    </div>
    );
};

export default CalendarWidget;
