import React from 'react'
import Navbar from './Navbar'
import './about.css'

function About() {
  return (
    <>
    <Navbar />
    <div className="hero">
    <h1>Smart Water Quality Monitoring</h1>
    <p>Using IoT technology to monitor water parameters in real-time and ensure safe, clean water for communities.</p>
</div>

<div className="section">
    <h2>About the System</h2>
    <p>
        Our IoT-based Water Quality Monitoring System continuously monitors key water parameters such as pH, temperature,
        turbidity, and dissolved solids. The system sends real-time data to a cloud dashboard, allowing users to monitor
        water quality remotely and receive instant alerts.
    </p>
</div>

<div className="section">
    <h2>Key Features</h2>
    <div className="features">
        <div className="card">
            <h3>Real-Time Monitoring</h3>
            <p>Live tracking of water parameters using IoT sensors.</p>
        </div>
        <div className="card">
            <h3>Cloud Integration</h3>
            <p>Data stored and visualized securely on cloud platforms.</p>
        </div>
        <div className="card">
            <h3>Instant Alerts</h3>
            <p>Automated notifications when water quality exceeds safe limits.</p>
        </div>
    </div>
</div>

<div className="section">
    <h2>How It Works</h2>
    <div className="steps">
        <div className="step">1️⃣ Sensors collect data</div>
        <div className="step">2️⃣ Microcontroller processes it</div>
        <div className="step">3️⃣ Data sent to cloud</div>
        <div className="step">4️⃣ Dashboard displays results</div>
    </div>
</div>

<div className="footer">
    © 2026 IoT Water Quality Monitoring System | All Rights Reserved
</div>

    </>
)
}

export default About