import 'swiper/swiper-bundle.css';
import styles from './ReviewsSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ReviewCard } from '../ReviewCard';
import { reviews } from '../../constants/reviewsData';

export const ReviewsSlider = () => {
  return (
    <div className={styles.swiper}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              name={review.name}
              rating={review.rating}
              text={review.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
