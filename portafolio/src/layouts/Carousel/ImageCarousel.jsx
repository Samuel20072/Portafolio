import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { images } from '../../assets/data.jsx';

export const ImageCarousel = () => {
    return (
      <div className="w-full max-w-2xl mx-auto p-4 h-full bg-zinc-900 m-4 border-2 rounded-lg">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="rounded-lg shadow-lg"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-84 object-cover rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  