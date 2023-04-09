
import React from 'react';
import './About.css';

export const About = () => {

    return (
        <>
        <div class="about_section layout_padding">
    	<div class="container">
    		<div class="row">
    			<div class="col-sm-6">
    				<div><img src="images/img-8.png" class="image_8"/></div>
    			</div>
    			<div class="col-sm-6">
    				<h1 class="about_taital">About Us</h1>
    				<p class="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
    				<div class="more_bt"><a href="/portfolio">Read More</a></div>
    			</div>
    		</div>
    	</div>
    </div>


    {/* <div class="advisor_section">
        <div class="container">
          <h1 class="what_text">What We Do</h1>
        </div>
      </div>

      <div class="image_main">
        <div class="container-fluid">
          <div class="image_2">
            <div class="image_0">
              <div><a href="#"><img src="images/play-icon.png" class="play_icon" /></a></div>
            </div>
            <h2 class="see_text">SEE <span style={{"color": "#470005"}}>Consulting</span> VIDEOS</h2>
          </div>
        </div>
      </div> */}

    </>
    )
};

export default About;

