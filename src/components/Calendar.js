import React from 'react';
import './Calendar.css';

const Calendar = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=zeroxleashgaming%40gmail.com&ctz=Asia%2FJakarta"
        className="calendar-iframe"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default Calendar;
