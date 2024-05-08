import './places.css'
import line from '../../assets/line.png'
import cardimg1 from '../../assets/unsplash_1NEJkiTTuLU.jpg'
import cardimg2 from '../../assets/unsplash_CZHimCWZFzs.jpg'
import cardimg3 from '../../assets/unsplash_m4Sx5lh3B1E.jpg'

const Places = () => {
  return (
    <div>

    <section className="explore mt-5 pt-5 mb-3">
      <div className="container d-flex align-items-center align-content-between">
            <img src={line} alt="" className="img-fluid"/>
            <span className="px-4"><h2 className="fs-32 fw-700 grey-color">Explore Unique
              <span className="primary-color"> Places to Stay</span> </h2></span>
            
              <span className="all text-end ms-auto"><a href="#" className="fs-24 fw-400 lh-24 grey-400 text-decoration-none">All</a>
              </span>
              <i className="fa-solid fa-arrow-right px-2 grey-color"></i>
               
      </div>
    </section>

      <section className="explore-places mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="card-group">
              <div className="col-md-4 pb-4 pb-md-0">
                <div className="card m-md-2 border-white bg-white p-3 bg-white">
                  <img src={cardimg2} className="card-img-top" alt="..." />
                  <div className="card-body ">
                    <h5 className="card-title pt-2 fs-24 fw-700 grey-400">
                      Dhaka <i className="fa-solid fa-arrow-right-arrow-left m-3 fs-16"></i>Sajek Valey
                    </h5>
                    <p className="fs-14 sw-400 grey-400 lh-24">
                      Are you looking for the flights from Dhaka to Sajek
                      Valley? Do you want cheap and comfortable flights at the
                      same time...
                    </p>

                    <a href="#"className="pt-3 text-decoration-none fs-18 fw-600 grey-400">
                      Learn More
                      <i className="fa-solid fa-arrow-right ms-3 grey-400"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 pb-4 pb-md-0 ">
                <div className="card m-md-2 border-white bg-white p-3 bg-white">
                  <img src={cardimg3} className="card-img-top" alt="..." />
                  <div className="card-body ">
                    <h5 className="card-title pt-2 fs-24 fw-700 grey-400">
                      Dhaka <i className="fa-solid fa-arrow-right-arrow-left m-3 fs-16"></i>Agra
                    </h5>
                    <p className="fs-14 sw-400 grey-400 lh-24">
                      Are you looking for the flights from Dhaka to Sajek
                      Valley? Do you want cheap and comfortable flights at the
                      same time...
                    </p>
                    <a href="#" className="pt-3 text-decoration-none fs-18 fw-600 grey-400">
                      Learn More <i className="fa-solid fa-arrow-right ms-3 grey-400"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 pb-4 pb-md-0 ">
                <div className="card m-md-2 border-white bg-white p-3 bg-white">
                  <img src={cardimg1} className="card-img-top" alt="..." />
                  <div className="card-body ">
                    <h5 className="card-title pt-2 fs-24 fw-700 grey-400">Dhaka <i className="fa-solid fa-arrow-right-arrow-left m-3 fs-16"></i>Cox's Bazar</h5>
                    <p className="fs-14 sw-400 grey-400 lh-24">
                      Are you looking for the flights from Dhaka to Sajek
                      Valley? Do you want cheap and comfortable flights at the
                      same time...
                    </p>
                    <a href="#" className=" pt-3 text-decoration-none fs-18 fw-600 grey-400">
                      Learn More <i className="fa-solid fa-arrow-right ms-3 grey-400"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Places