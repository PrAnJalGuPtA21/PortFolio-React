import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import portfolio from "../../img/portfolio.jpeg";
import grocery from "../../img/grocery.png";
import weather from "../../img/weather.jpg";
import movie from "../../img/movie.jpg"
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={weather} alt="weather app" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={grocery} alt="grocery bazaar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portfolio} alt="portfolio" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={movie} alt="movie site" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
