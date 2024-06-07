import React from 'react';
import Layout from '../layout/Layout';
import './contact.css';

const Contact = ({setRoute}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    alert('Form submitted');
  };

  return (
    <Layout setRoute={setRoute}>
      <div className="container">
        <div className="contact-content">
          <div className="contact-container">
            <h1>Contact Us</h1>
            <p>
              Whether you have a question about our products, pricing, or anything else, we ready to answer all your questions.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your Message" required />
              </div>
              <button type="submit">Submit</button>
            </form>
            <div className="contact-info">
              <p>Email: <a href="mailto:info@test.com">info@ayla.com</a></p>
              <p>Phone: +994 (055)-123-45-67</p>
              <p>Address: Baku, Azerbaijan</p>
            </div>
          </div>
          <div className="image-container">
            <img className='image2'
              src="https://cdn-icons-png.flaticon.com/512/3157/3157945.png"
              alt="Business Statistics"
          
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

