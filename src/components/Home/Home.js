import './Home.css';

export const Home = () => {
  return (
<div className="banner_section">
  <div className="container-fluid padding_0">
    <div className="row">
      <div className="col-md-6">
        <div className="padding_left_0">
          <h1 className="retailer_text">We Provide Professional Consulting</h1>
          <p className="search_text">It is a long established fact that a reader will be distracted by the readable content of a page </p>
          <div className="btn_main">
            <div className="more_bt"><a href="/portfolio">Read More </a></div>
            <div className="contact_bt"><a href="/contact">Get A Quote</a></div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div id="my_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="3000">
              <img src="images/img-1.png" className="image_1" />
            </div>
            <div className="carousel-item" data-interval="3000">
              <img src="images/img-2.png" className="image_1" />
            </div>
            <div className="carousel-item" data-interval="3000">
              <img src="images/img-8.png" className="image_1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




  )
}

export default Home;
