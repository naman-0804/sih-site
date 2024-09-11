import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../pages/Css/Patientpanel.css'; 
import { API_URL } from '../helper';
import image from './Css/images/3.png';

function PatientPanel() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [issue, setIssue] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [departments] = useState([
    { value: 'medicine', label: 'Medicine' },
    { value: 'orthopaedic', label: 'Orthopaedic' },
    { value: 'ent', label: 'ENT' },
    { value: 'general', label: 'General' }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(`${API_URL}/auth/get_user_data`);
        setUserData(userResponse.data);

        const doctorResponse = await axios.get(`${API_URL}/patients/doctors`, { withCredentials: true });
        setDoctors(doctorResponse.data);

        const appointmentResponse = await axios.get(`${API_URL}/patients/appointments`, { withCredentials: true });
        setAppointments(appointmentResponse.data);

        const prescriptionResponse = await axios.get(`${API_URL}/patients/medicines`, { withCredentials: true });
        setPrescriptions(prescriptionResponse.data);
      } catch (error) {
        setError('Error fetching data.');
      }
    };

    fetchData();
  }, []); 

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/patients/appointments`, {
        doctor_username: selectedDoctor,
        appointment_time: appointmentDate,
        description: issue
      }, { withCredentials: true });
      alert('Appointment scheduled successfully');
      setSelectedDoctor('');
      setAppointmentDate('');
      setIssue('');

      const response = await axios.get(`${API_URL}/patients/appointments`, { withCredentials: true });
      setAppointments(response.data);
    } catch (error) {
      setError('Error scheduling appointment.');
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
      window.location.href = '/';
    } catch (error) {
      setError('Error logging out.');
    }
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  const filteredDoctors = selectedDepartment
    ? doctors.filter(doctor => doctor.department.toLowerCase() === selectedDepartment.toLowerCase())
    : doctors;

  return (
    <div className="entire">
      <div className="img" style={{ backgroundImage: `url(${image})`,
    backgroundSize: 'cover', // Adjust background size to cover the entire element
    backgroundRepeat: 'no-repeat', // Prevent background image from repeating
    backgroundPosition: 'center', // Center the background image
    minHeight: '90vh', // Set minimum height to fill the viewport
    justifyContent: 'center',
    
     }}>
        {error && <p id="error-message">{error}</p>}
        {userData && (
          <>
            <h1 id="welcome-message" style={{ fontSize: '40px' }}>Welcome, {userData.username}!</h1>
            <h2 id="schedule-appointment-header" style={{ fontSize: '28px' }}>Schedule Appointment</h2>
          </>
        )}
        <br />
        <div className="patient-panel-container">
          <form onSubmit={handleAppointmentSubmit} id="appointment-form" style={{ textAlign: 'center' }}>
            <table style={{ backgroundColor: 'rgba(255,255,255,0.5)', border: '1px solid black', padding: '20px', margin: '0 auto', textAlign: 'left', height: '400px', width: '500px', fontSize: '20px' }}>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="department">Select Department:</label>
                  </td>
                  <td style={{ paddingLeft: '20px', fontSize: '20px' }}>
                    <select 
                      id="department" 
                      value={selectedDepartment} 
                      onChange={(e) => setSelectedDepartment(e.target.value)} 
                      required 
                      style={{ fontSize: '16px' }}
                    >
                      <option value="">--Select Department--</option>
                      {departments.map(dept => (
                        <option key={dept.value} value={dept.value}>{dept.label}</option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="doctor">Select Doctor:</label>
                  </td>
                  <td style={{ paddingLeft: '20px' }}>
                    <select 
                      id="doctor" 
                      value={selectedDoctor} 
                      onChange={(e) => setSelectedDoctor(e.target.value)} 
                      required 
                      style={{ fontSize: '16px' }}
                    >
                      <option value="">--Select Doctor--</option>
                      {filteredDoctors.map(doctor => (
                        <option key={doctor.username} value={doctor.username}>{doctor.username}</option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="appointment-date-input">Appointment Date:</label>
                  </td>
                  <td style={{ paddingLeft: '20px' }}>
                    <input
                      id="appointment-date-input"
                      type="datetime-local"
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      required
                      style={{ fontSize: '16px' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="issue">Issue:</label>
                  </td>
                  <td style={{ paddingLeft: '20px' }}>
                    <textarea 
                      id="issue"
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                      required
                      style={{ fontSize: '16px' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ textAlign: 'center', paddingTop: '20px' }}>
                    <button type="submit" id="schedule-button">Schedule Appointment</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        </div>
        <br />
        <h2 id="appointments-header">Your Appointments</h2>
        <table id="appointments-table" className="styled-table">
          <thead>
            <tr>
              <th>Doctor Username</th>
              <th>Appointment Time</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={`${appointment.doctor_username}-${appointment.appointment_time}`}>
                <td>{appointment.doctor_username}</td>
                <td>{appointment.appointment_time}</td>
                <td>{appointment.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => window.location.href = 'https://sl-health.vercel.app'}>Video-Call</button>
        <h2 id="medicines-header">Your Medicines</h2>
        <table id="medicines-table" className="styled-table">
          <thead>
            <tr>
              <th>Doctor Username</th>
              <th>Prescription Details</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map(prescription => (
              <tr key={`${prescription.doctor_username}-${prescription.patient_username}`}>
                <td>{prescription.doctor_username}</td>
                <td>{prescription.prescription_details}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleLogout} id="logout-button">Log Out</button>
    </div>
  );
}

export default PatientPanel;
