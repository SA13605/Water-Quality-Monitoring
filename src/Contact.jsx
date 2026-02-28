import Navbar from './Navbar'
import './contact.css'

function Contact() {
  return (
    <>
      <Navbar />
      {/* <h1 className='heding'>Contact Us</h1>
      <p className='contact-p'>You can reach us at contact@wqms.com Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem vero ut ipsa quaerat, aperiam saepe magnam accusantium, perspiciatis voluptates, ducimus vitae laborum eaque mollitia aliquam perferendis! Eaque distinctio amet eos!</p>
      <div className='stdiv'>

        <div>
          <img src="../public/icons8-home-64.png" alt="Home" className='imgadd' />
          <div style={{ display: 'inline-block', marginLeft: "15px" }}>
            <p>Our Address</p>
            <p>123 Main Street, City, Country</p>
          </div>
        </div>

        <div>
          <img src="../public/icons8-phone-64.png" alt="Phone" className='imgph' />
          <div style={{ display: 'inline-block', marginLeft: "15px" }}>
            <p>Phone:</p>
            <p>+1 234 567 890</p>
          </div>
        </div>

        <div>
          <img src="../public/icons8-mail-50.png" alt="Email" className='imgmail' />
          <div style={{ display: 'inline-block', marginLeft: "15px" }}>
            <p >Email: </p>
            <p>info@wqms.com</p>
          </div>
        </div>
      </div>

      <div className='nddiv'>
        <p className='nddiv_p'>Send Message</p><br />
        <label>Name:</label>
        <input type="text" placeholder='Name' /><br />

        <label>Email:</label>
        <input type="email" placeholder='Email' /><br />

    <br />
        <label>Message:</label>
        <textarea placeholder='Message' style={{width:"80%",marginLeft:"20px",height:"40%"}}></textarea><br />
        
        <button className='sbmitbtn'>Submit</button>
      </div> */}

      <div className="hero">
        <h1>Contact Us</h1>
        <p>Have questions about our IoT-based Water Quality Monitoring System? Reach out to us.</p>
      </div>

      <div className="section">
        <h2>Get In Touch</h2>

        <div className="contact-container">

          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>📍 Address:</strong> 123 Smart City Road, Tech Park</p>
            <p><strong>📧 Email:</strong> info@watermonitoring.com</p>
            <p><strong>📱 Phone:</strong> +91 98765 43210</p>
            <p><strong>🌐 Website:</strong> www.watermonitoring.com</p>
          </div>

          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Subject" />
              <textarea rows="5" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

              </div>
          </div>

          <div className="footer">
            © 2026 IoT Water Quality Monitoring System | All Rights Reserved
          </div>


        </>
        )
}

        export default Contact