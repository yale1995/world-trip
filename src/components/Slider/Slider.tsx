import { ReactNode } from "react";
import { Swiper, SwiperProps} from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

interface SliderProps {
  children: ReactNode;
  settings: SwiperProps;
}

export function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...settings}>
      {children}
    </Swiper>
  );
}
