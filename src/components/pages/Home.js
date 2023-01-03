import React from "react";
import Products from "./Products";
import { Carousel } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

const Home = () => {
  return (
   <div>
   <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/shopbanner1.png"
      alt="First slide"
      style={{height: 350}}
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="./images/shopbanner2.jpg"
      alt="Second slide"
      style={{height: 350}}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/shopbanner3.jpg"
      alt="Third slide"
      style={{height: 350}}
    />
  </Carousel.Item>
</Carousel>

      <Products/>
    </div>
  );
};

export default Home;