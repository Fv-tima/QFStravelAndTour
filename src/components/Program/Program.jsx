import React from 'react'
import AR from "../../assets/svg/ar.svg";
import Image from "../../assets/images/Image.png";
import Frame1 from "../../assets/images/Frame1.png";
import vector from "../../assets/images/Vec.png";
import Avatar1 from "../../assets/images/Avatar1.png";
import {
  PackagesCon,
  PackagesContainer,
  PackagesContent,
  PackagesImg,
  Location,
  Content,
  Ratings,
  Comment
} from '../Packages/Packages.styled'
export default function Program() {
  return (
    <PackagesCon>
      <PackagesContainer>
        <PackagesImg>
          <Location>
            <img src={Frame1} />
            <Content>
              <h2>Ipsum university</h2>
              <p>
                Canada
              </p>
            </Content>
            <Ratings>
              <img src={vector} />
              (4.8)
            </Ratings>
          </Location>
          <img src={Image} />
          <Comment>
            <img src={Avatar1} />
            <Content>
              <h2>John Doe Ofosu</h2>
              <p>Best Tour Guide</p>
            </Content>
          </Comment>
        </PackagesImg>
        <PackagesContent>
          <h1>Study Abroad Programs</h1>
          <p>
          At QFS Travel and Tours, we believe that studying abroad is one of the most rewarding experiences a student can have. That's why we offer a wide range of study abroad programs designed to provide students with a unique and immersive educational experience
          </p>
          <p>Here are some of the programs we offer:</p>
          <ul>
            <li>
            Academic Programs: Study at some of the world's most prestigious universities, and earn credits towards your degree in fields such as business, engineering, and the arts.
            </li>
            <li>
            Language Courses: Improve your language skills and immerse yourself in a new culture with our language courses, which include options for all skill levels and interests.
            </li>
            <li>
            Internships: Gain valuable work experience and learn new skills with our internship programs, which provide opportunities in a variety of fields and industries
            </li>
          </ul>
          <p>
          Our study abroad programs include everything you need for a successful and rewarding experience, including accommodation, language classes (where applicable), and support services throughout your stay. We also offer scholarships and funding options for eligible students.
          </p>
          <p>Ready to start planning your next adventure? Contact us today to learn more about our tour packages and study abroad programs, or to get started on your application.</p>
          <button>
            Take a Trip <img src={AR} />
          </button>
        </PackagesContent>
      </PackagesContainer>
    </PackagesCon>
  );
}

