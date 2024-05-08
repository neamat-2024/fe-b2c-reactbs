import './Explore.css'
import cardimg1 from '../../assets/unsplash_dB2KMeg-5jk.jpg'
import cardimg2 from '../../assets/unsplash_N0WNH53CBN0.jpg'
import cardimg3 from '../../assets/unsplash_ZOG7Zj7cfR8.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from 'react-bootstrap/Card';
import line from '../../assets/Line 5.png'

const Explore = () => {
  return (
    <div className='container mt-5 flightdeals'>
        <div className="d-flex align-items-center align-content-between">
            <img src={line} alt="" className="img-fluid"/>
            <span className="px-4"><h2 className="fs-32 fw-700 grey-color">Find your adventure with these <br/>
            <span className="primary-color">flight deals</span> </h2></span>
            <span className="all text-end ms-auto"><a href="#flight-Deals-Page" className="fs-24 fw-400 lh-24 grey-400 text-decoration-none">All</a></span>
            <i className="fa-solid fa-arrow-right px-2 grey-color"></i>
        </div>

        <Row className='mt-4'>
            <Col xs={12} md={4} className='mb-4 dealscard'>
                <Card className='border-0 bg-Light' >
                    <Card.Img variant="top" src={cardimg1} style={{padding:'16px'}}/>
                    <Card.Body>
                        <div className='ratings mb-3'>
                            <div className="mt-1 d-flex justify-content-between align-items-center">
                                <div className="small-ratings">
                                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <h4 className="review-stat grey-700 fs-24 fw-700">$145</h4>
                            </div>
                        </div>
                        <Card.Title className='mb-3 fs-24 fw-700 grey-700'>New York City Lake Sunset</Card.Title>
                        <Card.Text className='mb-2'>
                            <p className='grey-400 fs-16'>
                                <i className="fa-solid fa-location-dot me-2"></i> 35 Whitefriars St, London
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={12} md={4} className='mb-4'>
                <Card className='bg-Light' >
                    <Card.Img variant="top" src={cardimg2} style={{padding:'16px'}}/>
                    <Card.Body>
                        <div className='ratings mb-3'>
                            <div className="mt-1 d-flex justify-content-between align-items-center">
                                <div className="small-ratings">
                                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <h4 className="review-stat grey-700 fs-24 fw-700">$145</h4>
                            </div>
                        </div>
                        <Card.Title className='mb-3 fs-24 fw-700 grey-700'>New York City Lake Sunset</Card.Title>
                        <Card.Text className='mb-2'>
                        <p className='grey-400 fs-16'>
                                <i className="fa-solid fa-location-dot me-2"></i> 35 Whitefriars St, London
                        </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                    <Card className='bg-Light' >
                        <Card.Img variant="top" src={cardimg3} style={{padding:'16px'}}/>
                        <Card.Body>
                            <div className='ratings mb-3'>
                                <div className="mt-1 d-flex justify-content-between align-items-center">
                                    <div className="small-ratings">
                                        <i className="fa fa-star rating-color"></i>
                                        <i className="fa fa-star rating-color"></i>
                                        <i className="fa fa-star rating-color"></i>
                                        <i className="fa fa-star rating-color"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <h4 className="review-stat grey-700 fs-24 fw-700">$145</h4>
                                </div>
                            </div>
                            <Card.Title className='mb-3 fs-24 fw-700 grey-700'>New York City Lake Sunset</Card.Title>
                            <Card.Text className='mb-2'>
                            <p className='grey-400 fs-16'>
                                <i className="fa-solid fa-location-dot me-2"></i> 35 Whitefriars St, London
                            </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
        </Row>
       
    </div>
  )
}

export default Explore