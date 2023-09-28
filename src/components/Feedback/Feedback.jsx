import React from 'react'
import serviceVector from "../../assets/svg/serVector.svg";
import Fed1 from "../../assets/images/Fed1.png";
import Fed2 from "../../assets/images/Fed2.png";
import Fed3 from "../../assets/images/Fed3.png";
import Fed4 from "../../assets/images/Fed4.png";
import com1 from "../../assets/images/Ellipse 4.png";
import com2 from "../../assets/images/Ellipse 1.png";
import com3 from "../../assets/images/Ellipse 2.png";
import com4 from "../../assets/images/Ellipse 3.png";
import com5 from "../../assets/images/Ellipse 5.png";
import com6 from "../../assets/images/Ellipse 6.png";
import testimony1 from "../../assets/images/Product.png";
import testimony2 from "../../assets/images/Product-1.png";
import testimony3 from "../../assets/images/Product-2.png";
import testimony4 from "../../assets/images/Product-3.png";
import testimony5 from "../../assets/images/Product-4.png";
import testimony6 from "../../assets/images/Product-5.png";
import { FeedbackContainer, ImgCon, FeedComment, MobileImageView, NextFeed } from './Feedback.styled';

export default function Feedback () {
  return (
    <div>
      <FeedbackContainer>
        <img src={ serviceVector } />
        <h1>Client Testimonials</h1>
        <p>Take a look at what our customer’s are saying. At Nature we not only provide you with services but also we provide you with valuable experiences for your valuable time.</p>
        <ImgCon>
          <img src={ Fed1 } id='img1' />
          <img src={ Fed2 } id='img2' />
          <img src={ Fed3 } id='img3' />
          <img src={ Fed4 } id='img4' />

        </ImgCon>
        <MobileImageView>
          <FeedComment>
            <img src={ com1 } />
            <p>Quickfix Travel and Tour assisted me in securing a tourist visa</p>
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
  )
}
