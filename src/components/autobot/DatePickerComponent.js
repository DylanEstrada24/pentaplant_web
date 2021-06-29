import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';

registerLocale("ko", ko);

function DatePickerComponent() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const ExampleCustomInput = ({ value, onClick }) => (
        <div>
            <button className="example-custom-input" onClick={onClick}>
                {value}
            </button>
        </div>
    );
    return (
        <div>
            <DatePicker
                locale="ko"
                dateFormat="yyyy-MM-dd"
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={date => setStartDate(date)}
                customInput={<ExampleCustomInput />}
            />
            <div>-</div>
            <DatePicker
                locale="ko"
                dateFormat="yyyy-MM-dd"
                selected={endDate}
                selectsEnd
                onChange={date => setEndDate(date)}
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                customInput={<ExampleCustomInput />}
            />
        </div>
    );
};

export default DatePickerComponent;
