
//         <Swiper
//   spaceBetween={50}
//   speed={1200}
//   breakpoints={{
//     576: {
//       width: 576,
//       slidesPerView: 1,
//     },
//     768: {
//       width: 768,
//       slidesPerView: 2,
//     },
//     1024: {
//       width: 1024,
//       slidesPerView: 3,
//     },
//     1536: {
//       width: 1536,
//       slidesPerView: 4,
//     },
//   }}
//   pagination={{ clickable: true }}
//   autoplay={{ delay: 5000 }} // Add autoplay configuration here (5 seconds delay)
//   onSwiper={(swiper) => {}}
//   onSlideChange={() => {}}
// >
//           {ShopList.map((item: detailsType) => {
//             return (
//               <SwiperSlide key={item.id} className="pb-20 cursor-default">
//                 <Shop details={item} />
//               </SwiperSlide>
//             );
//           })}
//           <SwiperSlide className="w-full min-h-[250px]"></SwiperSlide>
//         </Swiper>

// Import Swiper React components
//   modules={[Navigation, Pagination, A11y, Autoplay]} // Add Autoplay module here

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Navigation, Pagination , A11y} from 'swiper/modules';

export default () => {
    return (
        <Swiper
            modules={[Navigation , Pagination , Autoplay, A11y]}
            spaceBetween={50}
            pagination={{clickable : true}}
            autoplay={{delay : 1000}}
            slidesPerView={3}
            speed={1200}
            onSlideChange={() => console.log('slide change')}
            // loop={true}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
        </Swiper>
    );
};