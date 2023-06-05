
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper';

const BreadCarousel = ({ item }) => {
    // SwiperCore.use([Autoplay, EffectFade]);

    return (
        <Swiper 
        className="bread-carousel" 
        slidesPerView={4}
        modules={[Autoplay, EffectFade]}
        // spaceBetween={}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
            {item.map((loaf, index) => {
                return <SwiperSlide key={index}>
                    <img src={loaf} alt="baker's_inn_loaf" className='loaf-img' />
                </SwiperSlide>
            })}
           
        </Swiper>
    );
};

export default BreadCarousel;