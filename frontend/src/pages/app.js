import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Css/App.css'; 
import image1 from './Css/images/image1.png';

function App() {
  return (
    <div class="body">
    <div className="app-container">
      <div className="page1" style={{ 
      backgroundImage:` url(${image1})`,
      backgroundSize: 'cover', // Adjust background size to cover the entire element
      backgroundRepeat: 'no-repeat', // Prevent background image from repeating
      backgroundPosition: 'center', // Center the background image
      minHeight: '100vh', // Set minimum height to fill the viewport
      justifyContent: 'center',
    }}>
        <div class="logo">
          <img src="https://img.freepik.com/premium-photo/hand-logo-different-design-with-white-background_1117469-10441.jpg?size=626&ext=jpg&ga=GA1.1.1591845039.1725801932&semt=ais_hybrid" alt="logo" class="logo"></img>
        </div>
        <div class="heading">
      <h1 className="app-title">SAHYOGI</h1>
      </div>
      <br></br>
      <nav className="navigation-bar">
  <ul className="navigation-list">
    <li><Link to="/doctorlogin" className="nav-link">Doctor Login</Link></li>
    <li><Link to="/patientlogin" className="nav-link">Patient Login</Link></li>
    <li><Link to="/register" className="nav-link">Register</Link></li>
    <li><Link to="/register" className="nav-link">About Us</Link></li>
  </ul>
</nav>
<br></br>
<br></br>
<br></br>
<br></br>
<div class="main">
<div class="typewriter-container">
<h1> Welcome! to SAHYOGI</h1>
</div>
<div class="typewriter-container">
We believe that communication should never be a <br></br>barrier to healthcare.
</div>
<br></br>
<br></br>
<div class="typewriter-container">
Looking for a consultation, <br></br>a follow-up, <br></br>or urgent medical advice, <br></br>you are at the right place.
</div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
</div>
<div class="container">
  <div class="card">
    <h3 class="card-title">•	SIGN LANGUAGE VIDEO CALL:</h3>
    <p class="card-content"> Connect with doctors who understand your needs through real-time video calls.</p>
  </div>
  <div class="card">
    <h3 class="card-title">•	SIMPLE APPOINTMENT SCHEDULING:</h3>
    <p class="card-content">Book your appointments with ease, using a unique code, number, or link to start a secure video consultation.</p>
  </div>
  <div class="card">
    <h3 class="card-title">•	ACCESSIBLE FOR ALL:</h3>
    <p class="card-content"> We strive to ensure that healthcare is accessible to everyone, no matter how you communicate.</p>
  </div>
</div>

<div>
  <iframe src="https://drive.google.com/file/d/10P94DwzGVJE8-kVcz-__Vhm6Nb1es1EE/preview" width="1200" height="400" frameborder="0" allow="autoplay" allowfullscreen></iframe>
</div>

<div class="heading1">
  <h2>OUR SPECIALIZED DOCTORS</h2>
</div>
<div className="team-container">
          <div className="team-section">
            <div className="team-member">
              <div className="team-info">
                <h5>Dr. Emily Carter</h5>
                <p className="role">Cardiologist</p>
                <p>Specializes in heart disease prevention and treatment, with a focus on cardiovascular health.</p>
                <div className="social-links">
                  <a className="social-link" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="social-link" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="social-link" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <div className="team-image1">
              <img src="https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019517_1280.png" alt="logo" class="doc"></img>
              </div>
            </div>
          </div>

          <div className="team-section">
          <div className="team-image2">
          <img src="https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019520_1280.png" alt="logo" class="doc"></img>
                </div>
            <div className="team-info">
              <h5>Dr. John Samuel</h5>
              <p className="role">Neurologist</p>
              <p>Expert in diagnosing and managing neurological disorders such as epilepsy and multiple sclerosis.</p>
              <div className="social-links">
                <a className="social-link" href="#"><i className="fab fa-twitter"></i></a>
                <a className="social-link" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="social-link" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          <div className="team-section">
            <div className="team-member">
              <div className="team-info">
                <h5>Dr. Sofia Martinez</h5>
                <p className="role">Pediatrician</p>
                <p>Provides comprehensive healthcare for children from infancy to adolescence, focusing on growth and development.</p>
                <div className="social-links">
                  <a className="social-link" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="social-link" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="social-link" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <div className="team-image3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_c7abPb2NNpj8bJFWM262jfKXYLqBtf6Gtw&s" alt="logo" class="doc"></img>
              </div>
            </div>
          </div>

          <div className="team-section">
          <div className="team-image4">
          <img src="https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019518_1280.png" alt="logo" class="doc"></img>
          </div>
            <div className="team-info">
              <h5>Dr. Derek Amio
              </h5>
              <p className="role">Dermatologist</p>
              <p>Treats skin conditions, including acne, eczema, and skin cancer, with a focus on cosmetic dermatology.</p>
              <div className="social-links">
                <a className="social-link" href="#"><i className="fab fa-twitter"></i></a>
                <a className="social-link" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="social-link" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="heading1">
        <h2>How it works!!</h2>
        </div>
        
  <br></br>
  <br></br>
  <div class="about">
<div class="container">
  <div class="card">
    <h3 class="card-title">Choose a Doctor</h3>
    <p class="card-content"> Browse our list of healthcare professionals who specialize in various fields.</p>
  </div>
  <div class="card">
    <h3 class="card-title">Book Your Appointment</h3>
    <p class="card-content">Select a date and time that suits you, and get connected with a doctor.</p>
  </div>
  <div class="card">
    <h3 class="card-title">Video Consultation</h3>
    <p class="card-content"> Use the provided link or code to enter the video call where you can communicate in sign language.</p>
  </div>
</div>
</div>
<div class="intro">

<div class="footer">
        <div class="footer-content">
            <div class="footer-column">
                <h3>Address</h3>
                <p><i class="icon map-marker"></i>123 Street, New Delhi, INDIA</p>
                <p><i class="icon phone"></i>+91 345 67890</p>
                <p><i class="icon envelope"></i>sahyogi@medical.com</p>
                <div class="social-icons">
                    <a class="social-icon" href="#"><i class="fab fa-twitter"></i></a>
                    <a class="social-icon" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a class="social-icon" href="#"><i class="fab fa-youtube"></i></a>
                    <a class="social-icon" href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="footer-column">
                <h3>Services</h3>
                <a class="footer-link" href="#">Cardiology</a>
                <a class="footer-link" href="#">Pulmonary</a>
                <a class="footer-link" href="#">Neurology</a>
                <a class="footer-link" href="#">Orthopedics</a>
                <a class="footer-link" href="#">Laboratory</a>
            </div>
            <div class="footer-column">
                <h3>Quick Links</h3>
                <a class="footer-link" href="#">About Us</a>
                <a class="footer-link" href="#">Contact Us</a>
                <a class="footer-link" href="#">Our Services</a>
                <a class="footer-link" href="#">Terms & Condition</a>
                <a class="footer-link" href="#">Support</a>
            </div>
            <div class="footer-column">
                <h3>Newsletter</h3>
                <p>Stay informed about the latest medical advancements, health tips, and wellness advice. Subscribe to our newsletter to receive expert insights and updates directly from healthcare professionals</p>
                <div class="newsletter">
                    <input class="newsletter-input" type="text" placeholder="Your email"></input>
                    <button type="button" class="newsletter-button">SignUp</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="end">
  <p>2024 &#169; Copyright SAHYOGI</p>
</div>
</div>
    </div>
   
  );
}

export default App;
