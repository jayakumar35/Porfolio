import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './AppSwiper.scss';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';


// bootstrap
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


import Weatherimage from '../image/project/Weather.jpg'
import Bmiimage from '../image/project/Bmi.jpg'
import Todoimage from '../image/project/Todolist.jpg'


export default function AppSwiper() {
  const swiperRef = useRef(null);  // Ref for the Swiper instance
  return (
    <>
      <Container style={{ maxWidth: '1550px' }} >
        <h1 className="pro-h1" id="Project">Our Work</h1>

        <Row>
          <Col sm={12} md={12} lg={12}>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Save the Swiper instance in ref
              slidesPerView={3}
              freeMode={true} 
              spaceBetween={30}
              pagination={{
                type: 'fraction',
              }} 
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card style={{ width: '22rem', height: '70vh' }} className="box">
                  <Card.Img variant="top" src={Weatherimage} fluid className="box-img" />
                  <Card.Body className="card-body">
                    <Card.Text className="overlay">
                      <Card.Title className="h3">Weather</Card.Title>
                      <a href="https://devjai-weather.netlify.app">Check Live<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                      <p>Some quick example text to build on the card title and make up the
                        bulk of the card's content.</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card style={{ width: '22rem', height: '70vh' }} className="box">
                  <Card.Img variant="top" src={Bmiimage} fluid className="box-img" />
                  <Card.Body className="card-body">
                    <Card.Text className="overlay">
                      <Card.Title className="h3">Bmi Calcution</Card.Title>
                      <a href="https://jayakumar-bmi-calculator.netlify.app">Ckeck Live<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                      <p>Some quick example text to build on the card title and make up the
                        bulk of the card's content.</p>
                    </Card.Text>
                  </Card.Body>
                </Card>

              </SwiperSlide>
              <SwiperSlide>
                <Card style={{ width: '22rem', height: '70vh' }} className="box">
                  <Card.Img variant="top" src={Todoimage} fluid className="box-img" />
                  <Card.Body className="card-body">
                    <Card.Text className="overlay">
                      <Card.Title className="h3">TodoList</Card.Title>
                      <a href="https://devjai-todolist.netlify.app">Ckeck Live<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                      <p>Some quick example text to build on the card title and make up the
                        bulk of the card's content.</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card style={{ width: '22rem', height: '70vh' }} className="box">
                  <Card.Img variant="top" src={Todoimage} fluid className="box-img" />
                  <Card.Body className="card-body">
                    <Card.Text className="overlay">
                      <Card.Title className="h3">TodoList</Card.Title>
                      <a href="https://devjai-todolist.netlify.app">Ckeck Live<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                      <p>Some quick example text to build on the card title and make up the
                        bulk of the card's content.</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card style={{ width: '22rem', height: '70vh' }} className="box">
                  <Card.Img variant="top" src={Todoimage} fluid className="box-img" />
                  <Card.Body className="card-body">
                    <Card.Text className="overlay">
                      <Card.Title className="h3">TodoList</Card.Title>
                      <a href="https://devjai-todolist.netlify.app">Ckeck Live<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                      <p>Some quick example text to build on the card title and make up the
                        bulk of the card's content.</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
        <Link to={'/OurWorkPage'}><button className="morework">More Work</button></Link>

      </Container>


    </>
  );
}
