/* eslint-disable react/no-unescaped-entities */
import carReview from "../../assets/img/car-review.webp";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import "./reviews.css";
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

const Reviews = () => {
  return (
    <>
      <section className="reviews">
        <div className="reviews__wrapper">
          <p className="reviews__crumb">reviews</p>
          <h2 className="reviews__title">What our clients say</h2>
          <div className="swiper__wrapper">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              // freeMode={true}
              // loop={true}
              breakpoints={
                {1240: {slidesPerView: 3}}
              }
              nested
              hashNavigation={{
                watchState: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, HashNavigation]}
              className="mySwiper2"
            >
              <SwiperSlide data-hash="slide1">
                <div className="slide__text-wrapper">
                  <h3>I'll definitely be a returning customer!</h3>
                  <p className="slide__text">Renting a premium car from Top Level Car was an absolute delight! The seamless delivery to my hotel made my trip so convenient. The car was spotless and performed flawlessly. I'll definitely be a returning customer!</p>
                  <p className="slide__user">John D.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide data-hash="slide2">
                <div className="slide__img">
                  <img src={carReview} alt="Top level" />
                </div>
              </SwiperSlide>
              <SwiperSlide data-hash="slide3">
                <div className="slide__text-wrapper">
                  <h3>The car was a dream</h3>
                  <p className="slide__text">I couldn't have asked for a better experience. The team at Top Level Car went above and beyond to ensure my rental went smoothly. The car was a dream to drive and added an extra layer of luxury to my Dubai trip. Highly recommended!</p>
                  <p className="slide__user">Sara L.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide data-hash="slide4">
                <div className="slide__img">
                  <img src={carReview} alt="Top level" />
                </div>
              </SwiperSlide>
              <SwiperSlide data-hash="slide5">
                <div className="slide__text-wrapper">
                  <h3>I'll definitely be a returning customer!</h3>
                  <p className="slide__text">Renting a premium car from Top Level Car was an absolute delight! The seamless delivery to my hotel made my trip so convenient. The car was spotless and performed flawlessly. I'll definitely be a returning customer!</p>
                  <p className="slide__user">John D.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide data-hash="slide6">
                <div className="slide__img">
                  <img src={carReview} alt="Top level" />
                </div>
              </SwiperSlide>
              <SwiperSlide data-hash="slide7">
                <div className="slide__text-wrapper">
                  <h3>The car was a dream</h3>
                  <p className="slide__text">I couldn't have asked for a better experience. The team at Top Level Car went above and beyond to ensure my rental went smoothly. The car was a dream to drive and added an extra layer of luxury to my Dubai trip. Highly recommended!</p>
                  <p className="slide__user">Sara L.</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews