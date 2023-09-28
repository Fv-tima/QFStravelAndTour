import React from "react";
import serviceVector from "../../assets/svg/serVector.svg";
import com1 from "../../assets/images/Ellipse 4.png";
import com2 from "../../assets/images/Ellipse 1.png";
import com3 from "../../assets/images/Ellipse 2.png";
import com4 from "../../assets/images/Ellipse 3.png";
import com5 from "../../assets/images/Ellipse 5.png";
import com6 from "../../assets/images/Ellipse 6.png";
import testimony1 from "../../assets/images/Picture1.png";
import testimony2 from "../../assets/images/Picture2.png";
import testimony3 from "../../assets/images/Picture3.png";
import testimony4 from "../../assets/images/Picture4.png";
import testimony5 from "../../assets/images/Picture5.png";
import testimony6 from "../../assets/images/Picture6.png";
import swiper from "../../assets/images/swiper.png";
import star from "../../assets/images/star.png";
import {
  FeedbackContainer,
  ImgCon,
  FeedComment,
  MobileImageView,
  NextFeed,
} from "./Feedback.styled";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";

export default function Feedback() {
  return (
    <div>
      <FeedbackContainer>
        <img src={serviceVector} />
        <h1>Client Testimonials</h1>
        <p>
          Take a look at what our customer’s are saying. At Nature we not only
          provide you with services but also we provide you with valuable
          experiences for your valuable time.
        </p>
          <ImgCon>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
              navigation
            >
              {testdata.map((item) => (
                <SwiperSlide className="testimonial">
                  <img className="testImg" src={item.img} />
                  <h1>{item.name}</h1>
                  <p>{item.info}</p>
                  <div className="rate">
                    <h1>
                      5.0<span>/5.0 rating</span>
                    </h1>
                    <div className="stars">
                      <img src={star} />
                      <img src={star} />
                      <img src={star} />
                      <img src={star} />
                      <img src={star} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </ImgCon>
        <MobileImageView>
          <FeedComment>
            <img src={com1} />
            <p>
              Quickfix Travel and Tour assisted me in securing a tourist visa
            </p>
          </FeedComment>
          <NextFeed>
            <p>Through the support and guidance of Quickfix Travel and Tour, I was able to secure my tourist visa together with my wife</p>
            <img src={ com2 } />
          </NextFeed>
          <FeedComment>
            <img src={ com3 } />
            <p>
              Quickfix Travel and Tour supported and guided myself and my husband in our application to secure a tourist visa to Canada
</p>

          </FeedComment>
          <NextFeed>
            <p>Quickfix Travel and Tour supported and guided with my application for a school in Canada as well as my visa application </p>
            <img src={ com4 } />
          </NextFeed>
          <FeedComment>
            <img src={ com5 } />
            <p>Quickfix Travel and Tour helped to obtain admission for me in Canada as well as supported with my visa application</p>
          </FeedComment>
          <NextFeed>
            <p>Quickfix Travel and Tour helped me in putting together my Canada visa application which turned out successfully </p>
            <img src={ com6 } />
          </NextFeed>
        </MobileImageView>
      </FeedbackContainer>
    </div>
  );
}

const testdata = [
  {
    img: testimony1,
    name: "Thomas Boakye Apraku",
    visa: "Tourist Visa",
    info: "Quickfix Travel and Tour assisted me in securing a tourist visa",
  },
  {
    img: testimony2,
    name: "Degaulle Asare Baffour",
    visa: "Tourist Visa",
    info: "Through the support and guidance of Quickfix Travel and Tour, I was able to secure my tourist visa together with my wife",
  },
  {
    img: testimony3,
    name: "Beatrice Boateng",
    visa: "Tourist Visa",
    info: "Quickfix Travel and Tour supported and guided myself and my husband in our application to secure a tourist visa to Canada",
  },
  {
    img: testimony4,
    name: "Solomon Kofi Obeng",
    visa: "Student Visa",
    info: "Quickfix Travel and Tour supported and guided with my application for a school in Canada as well as my visa application ",
  },
  {
    img: testimony5,
    name: "Florence Donkor",
    visa: "Student Visa",
    info: "Quickfix Travel and Tour helped to obtain admission for me in Canada as well as supported with my visa application",
  },
  {
    img: testimony6,
    name: "Christiana Anagonou",
    visa: "Tourist Visa",
    info: "Quickfix Travel and Tour helped me in putting together my Canada visa application which turned out successfully well",
  },
];
