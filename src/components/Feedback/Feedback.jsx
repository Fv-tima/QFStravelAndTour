import React from 'react'
import serviceVector from "../../assets/svg/serVector.svg";
import Fed1 from "../../assets/images/Fed1.png";
import Fed2 from "../../assets/images/Fed2.png";
import Fed3 from "../../assets/images/Fed3.png";
import Fed4 from "../../assets/images/Fed4.png";
import com from "../../assets/images/Ellipse 4.png";
import testimony1 from "../../assets/images/Product.png";
import testimony2 from "../../assets/images/Product-1.png";
import testimony3 from "../../assets/images/Product-2.png";
import testimony4 from "../../assets/images/Product-3.png";
import testimony5 from "../../assets/images/Product-4.png";
import testimony6 from "../../assets/images/Product-5.png";
import { FeedbackContainer, ImgCon, FeedComment, MobileImageView } from './Feedback.styled';

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
          <img src={ testimony1 } id="t1" /> 
          <img src={ testimony2 } id="t2" />
          <img src={ testimony3 } id="t3" />
          <img src={ testimony4 } id="t4" />
          <img src={ testimony5 } id="t5" />
          <img src={ testimony6 } id="t6" />
        </MobileImageView>

          
        

      </FeedbackContainer>
      <FeedComment>
        <img src={ com } />
        <p>“ Great place to spend your vacation while exploring different experiences. “</p>
      </FeedComment>
    </div>
  )
}
