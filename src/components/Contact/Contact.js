
import React from 'react';
import './Contact.css';


export const Contact = () => {

    return (
      
<div className="Contact_section layout_padding" style={{ padding: '30px 0' }}>
  <div className="container">
    <h1 className="categories_text" style={{ fontSize: '1.2rem', textAlign: 'center' }}>Request a call back</h1>
    <p className="dummy_text" style={{ fontSize: '1.2rem', textAlign: 'center' }}></p>
    <div className="email_box">
      <div className="input_main" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <form action="/action_page.php">
          <div className="form-group">
            <input type="text" className="email-bt" placeholder="Name" name="Name" style={{ width: '100%' }} />
          </div>
          <div className="form-group">
            <input type="text" className="email-bt" placeholder="Phone Number" name="Phone Number" style={{ width: '100%' }} />
          </div>
          <div className="form-group">
            <input type="text" className="email-bt" placeholder="Email Address" name="Email Address" style={{ width: '100%' }} />
          </div>
          <div className="form-group">
            <textarea className="massage-bt" placeholder="Message" rows="5" id="comment" name="Message" style={{ width: '100%' }}></textarea>
          </div>
          <div className="send_bt" style={{ textAlign: 'center' }}><a href="#" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#1a3b5c', color: 'white', textDecoration: 'none', marginTop: '15px' }}>SEND</a></div>
        </form>
      </div>
    </div>
  </div>
</div>


    )
}

export default Contact;