// import { Swiper} from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider_imgs from "./../mocks/slider.json";
import styled from "styled-components";
import { cls } from "../lib/utils";

export default function Slider({ className = "" }) {
    return (
        <SliderCSS className={cls(" rounded-md overflow-hidden ", className)}>
            <Swiper
                className="w-full h-full"
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 5000 }}
                speed={1000}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={3}
                draggable={true}
            >
                {slider_imgs.map((img, index) => (
                    <SwiperSlide className=" w-full h-full " key={index}>
                        <img className=" w-full h-full object-cover object-center " src={img.src} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SliderCSS>
    );
}

const SliderCSS = styled.div`
    :hover {
        & .swiper-button-prev,
        & .swiper-button-next {
            opacity: 0.7;
        }
        & .swiper-button-prev {
            left: 30px;
        }
        & .swiper-button-next {
            right: 30px;
        }
    }

    & .swiper-button-prev,
    & .swiper-button-next {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        color: var(--c3);
        border: 2px solid var(--c3);
        opacity: 0;
        transition: all 0.3s ease;
    }

    & .swiper-button-prev:after,
    & .swiper-button-next:after {
        font-size: 18px;
        font-weight: bold;
    }

    & .swiper-button-prev:hover,
    & .swiper-button-next:hover {
        opacity: 1;
        background-color: var(--c3);
        color: var(--c3-txt2);
    }

    & .swiper-button-prev {
        left: 100px;
    }

    & .swiper-button-next {
        right: 100px;
    }

    & .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--c3);
    }
`;
