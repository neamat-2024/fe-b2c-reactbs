import './Testimonial.css'
import reviewicon from '../../assets/review icon.png'
import reviewimg1 from '../../assets/review image 1.png'
import reviewimg2 from '../../assets/review image 2.png'
import reviewimg3 from '../../assets/review image 3.png'
import smallline from '../../assets/small line.png'

const Testimonial = () => {
  return (
    <div>
        <div className="testimonial mt-5 pt-5 id='testimonial">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center"> 
            <div className="d-flex align-items-center align-content-between justify-content-center">
              <img src={smallline} alt="" className="img-fluid"/>
              <span className="px-3"><h2 className="fs-18 fw-700 primary-color">Testimonial</h2></span>
            </div> 
            <h2 className='grey-900 fs-36 fw-700 pt-2'>What Flight Expert users are saying</h2>
            <p className="fs-18 fw-400 grey-color lh-24 mt-3 mt-2 mb-5">Dignissim purus morbi vitae, quis nibh molestie quam enim. Elit erat <br/> mattis faucibus non morbi vel sed nulla aliquet.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 pb-4 pb-md-0">
            <div className="card m-md-2 bg-white p-3 rounded-3">
              <div className="card-body ">
                <div className="review-img" >
                  <img src={reviewicon} alt=""/>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <div className="ratings">
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star ratings"></i>
                  </div>
                  <div className="deals-price text-end">
                    <h2 className="fs-18 fw-400 grey-400">4.8/5</h2>
                  </div>
                </div>
                <p className="fs-16 fw-400 grey-700 pt-3">Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>

                <div className="user d-flex justify-content-start mt-3">
                  <div className="image">
                    <img src={reviewimg1} alt=""/>
                  </div>
                  <div className="name-title ms-3">
                    <h4 className="fs-16 fw-700 grey-900">Tasnima</h4>
                    <p className="grey-700 fs-14 fw-400">Dhaka, Bangladesh | April 2020</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>

          <div className="col-md-4 pb-4 pb-md-0">
            <div className="card m-md-2 bg-white p-3 rounded-3">
              <div className="card-body ">
                <div className="review-img" >
                  <img src={reviewicon} alt=""/>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <div className="ratings">
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star ratings"></i>
                  </div>
                  <div className="deals-price text-end">
                    <h2 className="fs-18 fw-400 grey-400">4.8/5</h2>
                  </div>
                </div>
                <p className="fs-16 fw-400 grey-700 pt-3">Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>

                <div className="user d-flex justify-content-start mt-3">
                  <div className="image">
                    <img src={reviewimg2} alt=""/>
                  </div>
                  <div className="name-title ms-3">
                    <h4 className="fs-16 fw-700 grey-900">Tasnima</h4>
                    <p className="grey-700 fs-14 fw-400">Dhaka, Bangladesh | April 2020</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>

          <div className="col-md-4 pb-4 pb-md-0">
            <div className="card m-md-2 bg-white p-3 rounded-3">
              <div className="card-body ">
                <div className="review-img" >
                  <img src={reviewicon} alt=""/>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <div className="ratings">
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star ratings"></i>
                  </div>
                  <div className="deals-price text-end">
                    <h2 className="fs-18 fw-400 grey-400">4.8/5</h2>
                  </div>
                </div>
                <p className="fs-16 fw-400 grey-700 pt-3">Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>

                <div className="user d-flex justify-content-start mt-3">
                  <div className="image">
                    <img src={reviewimg3} alt=""/>
                  </div>
                  <div className="name-title ms-3">
                    <h4 className="fs-16 fw-700 grey-900">Tasnima</h4>
                    <p className="grey-700 fs-14 fw-400">Dhaka, Bangladesh | April 2020</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonial