import React from "react";
import { About, AboutContainer, AboutContent, AboutInnerContent, AboutUs, AboutLastInfo, AboutLastInfoContents, BottomContainer, BottomImgCon, TeamNames , Mission} from "./AboutBody.styled";
import serviceVector from "../../assets/svg/serVector.svg";
import Group63 from "../../assets/images/Group63.png";
import Group64 from "../../assets/images/Group64.png";
import Rectangle71 from "../../assets/images/Rectangle71.png";
import Rectangle34 from "../../assets/images/Rectangle34.png";
import Rectangle35 from "../../assets/images/Rectangle35.png";
import Rectangle36 from "../../assets/images/Rectangle36.png";
import Rectangle37 from "../../assets/images/Rectangle37.png";

export default function AboutBody () {
  return ( 

    <About > 
      <img src={ serviceVector } />
      <h1>About QFS Travel and Tours</h1>
      <AboutContainer>
        <AboutContent>

          <AboutInnerContent>
            <img src={ Group63 } />
            <h1>Explore Our Website
              <p>
                Ready to start planning your next adventure? Explore
                our website to learn more about our services and destinations.
                You can browse our tour packages, learn about our study abroad
                programs, and read our travel guides and tips. And if you have any questions,
                dont hesitate to contact us - our team is always ready to help.
              </p>
            </h1>
          </AboutInnerContent>

        </AboutContent>
        <AboutContent>

          <AboutInnerContent>

            <AboutUs>
              <h1>
                About Us
                <p>
                  At QFS Travel and Tours, we are passionate about providing
                  our clients with the best possible travel experience. With over 10
                  years of experience in the travel industry, we have established
                  ourselves as a leading provider of tour packages and study abroad
                  programs.
                </p>
              </h1>
              <img src={ Group64 } />
            </AboutUs>

          </AboutInnerContent>
        </AboutContent>
        <AboutContent>

          <AboutInnerContent >
            <Mission>
                <img src={ Rectangle71 } /> 
                <h1>Our Mission
                  <p>
                    Our mission is to provide our clients with exceptional travel and study experiences
                    that exceed their expextations. We are committed to offering personalized
                    service, attention to detail, and a wide range of travel and study options
                    to suit every need and budget. We aim to inspire and enrich
                    the lives of our clients through travel, and to foster a love of
                    exploration and adventure.
                  </p>
                </h1>
            </Mission>
          </AboutInnerContent>

        </AboutContent>
        <AboutLastInfo>
          <div className="values">
            <h1 className="valuesheader">Our Values</h1>
            <AboutLastInfoContents>
              <p id="values">At QFS Travel and Tours, we believe in the following values:</p>
              <ul>
                <li>Excellence: We strive for excellence in everything we do, from the quality
                  of our travel packages to the level of service we provide.
                </li>
                <br />
                <li>
                  Integrity: We operate with the highest level on integrity and transparency
                  in all our dealings, building trust and confidence with our clients.
                </li>
                <br />
                <li>
                  Innovation: We are constantly seeking out new and innovative ways to
                  improve our services and offerings, staying ahead of the curve in the
                  travel industry.
                </li>
                <br />
                <li>
                  Customer Satisfaction: We are dedicated to ensuring that our fully
                  satisfied with their travel experiences, and we go above and beyond
                  to make sure that every trip is unforgettable.
                </li>
              </ul>
            </AboutLastInfoContents>
          </div>
        </AboutLastInfo>
        <AboutLastInfo>
          <h1 className="team">Our Team</h1>
          <AboutLastInfoContents>
            <p id='team'>
              Our team professionals is made up experience and knowlegdeable
              individuals who a passionate about travel. We provide ourselves on our friendly
              and approachable service, and we are always available to answer questions or
              concerns our client may have.
            </p>
          </AboutLastInfoContents>
        </AboutLastInfo>
        <BottomContainer>
          <BottomImgCon>
            <img src={ Rectangle34 } id='img1' />
            <TeamNames>
              <h1 id="princess">Princess Harriet Osei
                <p>General Manager</p>
              </h1>
            </TeamNames>
          </BottomImgCon>
          <BottomImgCon>
            <img src={ Rectangle35 } id='img2' />
            <TeamNames><h1 id='victor'>Victor Obour Gyan
              <p>Director</p>
            </h1>
            </TeamNames>
          </BottomImgCon>
          <BottomImgCon>
            <img src={ Rectangle36 } id='img3' />
            <TeamNames><h1 id='frank'>Frank Bonah
                <p>Operations</p>
              </h1>
            </TeamNames>
          </BottomImgCon>
          <BottomImgCon>
            <img src={ Rectangle36 } id='img4' />
            <TeamNames><h1 id='solo'>Solomon Sackey
                <p>Digital Marketing Manager</p>
              </h1>
            </TeamNames>
          </BottomImgCon>
        </BottomContainer>
      </AboutContainer>
    </About>

  )
}