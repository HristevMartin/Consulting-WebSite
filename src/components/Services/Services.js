import React from 'react';
import './Services.css';

export const Services = () => {

    console.log('here')

    return (
        <>

<div class="advisor_section_2 layout_padding">
    <div class="container">
        <div class="box_section">
            <div class="row">
                <div class="col-lg-4 col-sm-12">
                    <div class="box_main">
                        <div class="image_3"></div>
                        <h4 class="consultative_text">Strategy & Planning</h4>
                        <p class="readable_text">We'll help you create a clear roadmap for success by analyzing your business, identifying opportunities for growth, and developing actionable strategies.</p>
                    </div>
                </div>
                {/* <div class="col-lg-4 col-sm-12">
                    <div class="box_main active">
                        <div class="image_4 active"></div>
                        <h4 class="consultative_text active">Strategy & Planning</h4>
                        <p class="readable_text active">Readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the readable</p>
                    </div>
                </div> */}
                <div class="col-lg-4 col-sm-12">
                    <div class="box_main">
                        <div class="image_5"></div>
                        <h4 class="consultative_text">Digital Transformation</h4>
                        <p class="readable_text">Stay ahead of the competition with our digital transformation services, designed to streamline processes, improve customer experiences, and increase efficiency.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <div class="box_main">
                        <div class="image_5"></div>
                        <h4 class="consultative_text">Marketing & Branding</h4>
                        <p class="readable_text">
                        Enhance your brand image, engage customers, and drive sales with our comprehensive marketing and branding solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




      </>
    )
}

export default Services;
