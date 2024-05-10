import { useState } from 'react'
import './AppointmentForm.css'

const AppointmentForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorNumber, setErrorNumber] = useState("");
    const [dateAppointment, setDateAppointment] = useState('');
    const [timeAppointment, setTimeAppointment] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
    };

    const validatePhoneNumber = function (phone) {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phone);
    }; 

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validatePhoneNumber(phoneNumber)) {
            setErrorNumber("Phone Number Should Be 10 Digits.");
            return;
        }

        const appointmentData = {
            name,
            phoneNumber,
            dateAppointment,
            timeAppointment,
            selectedSlot
        }

        onSubmit(appointmentData);
        setName('');
        setPhoneNumber('');
        setDateAppointment('');
        setTimeAppointment('');
        setSelectedSlot(null)
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                {errorNumber && <div style={{"color": "red"}}>{errorNumber}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="dateAppointment">Date of appointment:</label>
                <input
                    type="date"
                    id="dateAppointment"
                    value={dateAppointment}
                    onChange={(e) => setDateAppointment(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="timeAppointment">Book time slot:</label>
                {/* <input
                    type="time"
                    id="timeAppointment"
                    value={timeAppointment}
                    onChange={(e) => setTimeAppointment(e.target.value)}
                    required
                /> */}
                 <select
                    name="time"
                    id="time"
                    onChange={(e) => handleSlotSelection(e.target.value)}
                    defaultValue="Select a time slot"
                    required
                >
                    <option disabled>Select a time slot</option>
                    <option value="9.00 AM">9.00 AM</option>
                    <option value="20.00 PM">20.00 PM</option>
                </select>
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default AppointmentForm