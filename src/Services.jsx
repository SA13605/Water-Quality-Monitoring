import React from 'react'
import Navbar from './Navbar'
import './services.css'
import { Link } from 'react-router-dom'

function Services() {
    return (
        <>
            <Navbar />
                <div className="hero">
                    <h1>Our Services</h1>
                    <p>Smart IoT solutions for monitoring and managing water quality in real-time.</p>
                </div>

                <div className="section">
                    <h2>Core Services</h2>
                    <div className="services">
                        <div className="service-card">
                            <h3>Real-Time Monitoring</h3>
                            <p>Continuous tracking of pH, turbidity, temperature, and TDS levels.</p>
                        </div>
                        <div className="service-card">
                            <h3>Cloud Integration</h3>
                            <p>Secure storage and visualization of water data through cloud platforms.</p>
                        </div>
                        <div className="service-card">
                            <h3>Automated Alerts</h3>
                            <p>Instant SMS or email alerts when water parameters exceed safe limits.</p>
                        </div>
                        <div className="service-card">
                            <h3>Industrial Monitoring</h3>
                            <p>Custom solutions for factories and wastewater treatment plants.</p>
                        </div>
                        <div className="service-card">
                            <h3>Smart City Solutions</h3>
                            <p>IoT integration for public water distribution systems.</p>
                        </div>
                        <div className="service-card">
                            <h3>Maintenance & Support</h3>
                            <p>Regular calibration, system upgrades, and technical assistance.</p>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2>Our Process</h2>
                    <div className="process">
                        <div className="process-step">1️⃣ Site Assessment</div>
                        <div className="process-step">2️⃣ Sensor Installation</div>
                        <div className="process-step">3️⃣ IoT Configuration</div>
                        <div className="process-step">4️⃣ Dashboard Setup</div>
                        <div className="process-step">5️⃣ Ongoing Support</div>
                    </div>
                </div>

                <div className="cta">
                    <h2>Need a Custom Water Monitoring Solution?</h2>
                    <p>Contact us today to implement smart IoT-based water monitoring for your organization.</p>
                    <button><Link to="/contact">Contact Us</Link></button>
                </div>

                <div className="footer">
                    © 2026 IoT Water Quality Monitoring System | All Rights Reserved
                </div>
        </>
    )
}

export default Services