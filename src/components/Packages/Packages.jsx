import React from "react";
import serviceVector from "../../assets/svg/serVector.svg";
import AR from "../../assets/svg/ar.svg";
import PImage from "../../assets/images/PImage.png";
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
  Comment
} from "./Packages.styled";
export default function Packages () {
  // took out ratings div
  return (
    <PackagesCon>
      <img src={serviceVector} />
      <h1>Our Packages</h1>
      <PackagesContainer>
        <PackagesImg>
          <Location>
            <img src={Frame1} />
            <Content>
              <h2>Heaven Resort <img src={ vector } /> (4.8)</h2>
              <p>
                Starts from <span>$</span>
                <span>450</span>
              </p>
            </Content>
          </Location> 
          <img src={PImage} />
          <Comment>
            <img src={Avatar1} />
            <Content>
              <h2>John Doe Ofosu</h2>
              <p>Best Tour Guide</p>
            </Content>
          </Comment>
        </PackagesImg>
        <PackagesContent>
          <h1>Tour Packages</h1>
          <p>
            At QFS Travel and Tours, we offer a wide range of tour packages to
            some of the most exciting destinations in the world. Our packages
            are designed to cater to all types of travelers, whether you're
            looking for a relaxing beach vacation, an adventurous trek through
            the mountains, or a cultural tour of a new city.
          </p>
          <p>Here are some of the destinations we offer:</p>
          <ul>
            <li>
              Canada: Discover the natural beauty of Canada with our tour
              packages, which include visits to popular destinations such as
              Banff National Park, Niagara Falls, and Vancouver.
            </li>
            <li>
              UK: Experience the rich history and culture of the UK with our
              tour packages, which include visits to iconic landmarks such as
              Buckingham Palace, Stonehenge, and the Scottish Highlands.
            </li>
            <li>
              {" "}
              Australia: Explore the diverse landscapes and wildlife of
              Australia with our tour packages, which include visits to the
              Great Barrier Reef, the Outback, and Sydney.
            </li>
            <li>
              {" "}
              USA: From the beaches of Hawaii to the skyscrapers of New York
              City, our tour packages to the USA offer something for everyone.
              Visit popular destinations such as Las Vegas, the Grand Canyon,
              and Yellowstone National Park.{" "}
            </li>
            <li>South Africa</li>
            <li>Dubai</li>
          </ul>
          <p>
            Our tour packages include everything you need for a hassle-free
            vacation, including flights, accommodations, meals, and activities.
            And if you don't see a package that fits your needs, we can also
            customize a tour just for you.
          </p>
          <button>
            Take a Trip <img src={AR} />
          </button>
        </PackagesContent>
      </PackagesContainer>
    </PackagesCon>
  );
}
