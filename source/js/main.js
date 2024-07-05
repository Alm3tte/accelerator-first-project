// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/scss/navigation';
import { initSwiper } from './swiper.js';

initSwiper(Swiper, Navigation);
