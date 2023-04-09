import './App.css';
import { Dashboard } from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Culture from './components/Culture/Culture';
import Contact from './components/Contact/Contact';

import { Footer } from './components/Footer/Footer';

function App() {
  return (

    <div id="App">

      <Dashboard />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    <Footer/>

      {/* <div class="footer_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <h4 class="address_text">ADDRESS</h4>
              <p class="simply_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  </p>
            </div>
            <div class="col-lg-3 col-sm-6">
              <h4 class="address_text">QUICK LINKS</h4>
              <div class="footer_menu_main">
                <div class="footer_menu">
                  <ul>
                    <li><a href="index.html.html">Home</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="newsletter_section">
                <div class="newsletter_left">
                  <h4 class="address_text">Newsletter</h4>
                </div>
                <div class="newsletter_right">
                  <div class="social_icon">
                    <ul>
                      <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                      <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                      <li><a href="#"><img src="images/instagram-icon.png" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <input type="text" class="mail_bt" placeholder="Enter Your Email" name="Enter Your Email" />
              <input type="text" class="mail_bt" placeholder="Phone" name="Phone" />
              <div class="subscribe_bt"><a href="#">Subscribe</a></div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div class="copyright_section">
        <div class="copyright_text">Copyright 2020 All Right Reserved By <a href="https://html.design">Free html  Templates</a></div>
      </div>   */}
    </div>

  );
}

export default App;
