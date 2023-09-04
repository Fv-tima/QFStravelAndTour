import React from 'react'
import serviceVector from "../../assets/svg/serVector.svg";
import Fed1 from "../../assets/images/Fed1.png"
import Fed2 from "../../assets/images/Fed2.png"
import Fed3 from "../../assets/images/Fed3.png"
import Fed4 from "../../assets/images/Fed4.png"
import { FeedbackContainer, ImgCon } from './Feedback.styled';

export default function Feedback() {
  return (
    <FeedbackContainer>
<img src={serviceVector} />
<h1>What customer’s are saying?</h1>
<p>Take a look at what our customer’s are saying. At Nature we not only provide you with services but also we provide you with valuable experiences for your valuable time.</p>
<ImgCon>
<img src={Fed1} id='img1' />
<img src={Fed2} id='img2'/>
<img src={Fed3} id='img3'/>
<img src={Fed4} id='img4'/>
</ImgCon>
    </FeedbackContainer>
  )
}
