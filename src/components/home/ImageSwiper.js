import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {
	Navigation,
	Pagination,
	Scrollbar,
	A11y
} from 'swiper';

// style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const device = isMobile();

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function ImageSwiper() {
	if(device) {
		return (
			<Swiper
				className="swiper-container"
				spaceBetween={50}
				slidesPerView={1}
				loop="true"
				// onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={() => console.log("slide change")}
				autoplay={{ delay: 3000 }}
				>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
			</Swiper>
		)
	} else {
		return (
			<Swiper
				className="swiper-container"
				spaceBetween={50}
				slidesPerView={4}
				loop="true"
				// onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={() => console.log("slide change")}
				autoplay={{ delay: 3000 }}
				>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
				<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
			</Swiper>
		)
	}
}

export default ImageSwiper;