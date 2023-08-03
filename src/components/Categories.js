import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sports from "../Images/sports.jpg"
import mans from "../Images/mans.jpg"
import woman from "../Images/woman.jpg"
import kids from "../Images/kids.jpg"
import Apliance from "../Images/HomeAplliance.jpg"
import mobiles from "../Images/mobiles.jpg"
import mobilesacc from "../Images/mobile-acc.jpg"
import lap from "../Images/laptop.jpg"
import {AiOutlineArrowRight} from "react-icons/ai"
import { NavLink } from 'react-router-dom';
const categories = (theme , setTheme) => {
    return (
        <>


            <h1 className='text-center mt-5 pt-5'>Categories</h1>


            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >

                <section >
                <SwiperSlide className='cat-swiper' >
                    <Card >
                        <Card.Img className='img-card' variant="top" src={sports} />
                        <Card.Body >
                            <Card.Title>Sports Wear</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum 
                            </Card.Text>
                            <NavLink to="/Shop">
                             <Button variant="danger">Discover <AiOutlineArrowRight style={{scale:"1.3"}} /></Button>
                            </NavLink> 
                        </Card.Body>
                    </Card>
                </SwiperSlide>


                <SwiperSlide className='cat-swiper' >
                    <Card >
                        <Card.Img className='img-card' variant="top" src={mans} />
                        <Card.Body >
                            <Card.Title>Mans Clothes</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum 
                            </Card.Text>
                            <NavLink to="/Shop">
                             <Button variant="danger">Discover <AiOutlineArrowRight style={{scale:"1.3"}} /></Button>
                            </NavLink> 
                        </Card.Body>
                    </Card>
                </SwiperSlide>


                <SwiperSlide className='cat-swiper' >
                    <Card >
                        <Card.Img className='img-card' variant="top" src={woman} />
                        <Card.Body >
                            <Card.Title>Woman Clothes</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum 
                            </Card.Text>
                            <NavLink to="/Shop">
                             <Button variant="danger">Discover <AiOutlineArrowRight style={{scale:"1.3"}} /></Button>
                            </NavLink> 
                        </Card.Body>
                    </Card>
                </SwiperSlide>


                <SwiperSlide className='cat-swiper' >
                    <Card >
                        <Card.Img className='img-card' variant="top" src={kids} />
                        <Card.Body >
                            <Card.Title>Kids Clothes</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum 
                            </Card.Text>
                            <NavLink to="/Shop">
                             <Button variant="danger">Discover <AiOutlineArrowRight style={{scale:"1.3"}} /></Button>
                            </NavLink> 
                        </Card.Body>
                    </Card>
                </SwiperSlide>

                <SwiperSlide className='cat-swiper' >
                    <Card >
                        <Card.Img className='img-card' variant="top" src={Apliance} />
                        <Card.Body >
                            <Card.Title>Home Aplliance</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum 
                            </Card.Text>
                            <NavLink to="/Shop">
                             <Button variant="danger">Discover <AiOutlineArrowRight style={{scale:"1.3"}} /></Button>
                            </NavLink> 
                        </Card.Body>
                    </Card>
                </SwiperSlide>

                <SwiperSlide className='cat-swiper' >
                    <Card >
                        <Card.Img className='img-card' variant="top" src={mobiles} />
                        <Card.Body >
                            <Card.Title>Mobile Phones</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum 
                            </Card.Text>
                            <NavLink to="/Shop">
                             <Button variant="danger">Discover <AiOutlineArrowRight style={{scale:"1.3"}} /></Button>
                            </NavLink> 
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                
                <SwiperSlide className='cat-swiper' >
                    <Card >
                        <Card.Img className='img-card' variant="top" src={mobilesacc} />
                        <Card.Body >
                            <Card.Title>mobiles accesorries</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum 
                            </Card.Text>
                            <NavLink to="/Shop">
                             <Button variant="danger">Discover <AiOutlineArrowRight style={{scale:"1.3"}} /></Button>
                            </NavLink> 
                        </Card.Body>
                    </Card>
                </SwiperSlide>

                <SwiperSlide className='cat-swiper' >
                    <Card >
                        <Card.Img className='img-card' variant="top" src={lap} />
                        <Card.Body >
                            <Card.Title>laptop And Pc</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum 
                            </Card.Text>
                           <NavLink to="/Shop">
                             <Button variant="danger">Discover <AiOutlineArrowRight style={{scale:"1.3"}} /></Button>
                            </NavLink> 
                        </Card.Body>
                    </Card>
                </SwiperSlide>

              
                </section>
               
            </Swiper>


        </>
    )
}

export default categories