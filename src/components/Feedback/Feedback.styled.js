import styled from "styled-components";

export const FeedbackContainer = styled.div`
  margin-top: 9.5rem;
  position: relative;
  h1 {
    margin: 2rem 0;
    font-family: "Poppins", san-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #514d59; 
  }
  p {
    color: #898989;
    font-family: Poppins;
    font-size: 1rem;
    font-weight: 500;
    max-width: 537.638px;
  }

  .testWrap{
    margin:3.5rem 0 4.55rem;
  }

  @media (max-width: 968px) {
    margin-top: 40px;
    position: unset;
    h1 {
      font-size: 1.9rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    .testCon {
      display: none;
    }
  }
`;

export const TestCon = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;

  .testimonial {
    display: flex;
    width: 385px;
    height: 385px;
    padding: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20.18px;
    background: #077FDE;
    box-shadow: 12.6124px 5.04496px 50.44959px 0px rgba(0, 0, 0, 0.16);

    .testImg {
      width: 100px;
      height: 100.px;
      border-radius: 100px;
    }

    h1 {
      color:#fff;
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      font-weight: 600;
      line-height: 8px; 
    }

    p {
      align-self: stretch;
      color: #B9C8F3;
      text-align: center;
      font-family: Poppins;
      font-size: 16.13px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }
  }

  .rate {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;

    h1 {
      color:  #FFFFFF;
      font-family: Manrope;
      font-size: 20.18px;
      font-style: normal;
      font-weight: 800;
    }

    span {
      color: #B9C8F3;
      font-family: Poppins;
      font-size: 13px;
      font-style: normal;
      font-weight: 800;
    }
  }


  @media (max-width: 968px) {
    display: none;
  }
`
export const MobileImageView = styled.div`
  display: none;
  @media (max-width: 868px) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`

export const FeedComment = styled.div`
  display: none;
  @media (max-width: 868px) {
    //  overflow-y: auto;
    border-radius: 7.739px;
    background: #f6f4ff;
    box-shadow: 0px 15.25215px 45.75646px 0px rgba(0, 0, 0, 0.12);
    width: auto;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-start;
    gap: 12px;
    align-items: center;
    text-align: center;
    height: 72.938px;
    border-bottom: 7px solid #3685fb;
    border-bottom-radius: 7.739px;
    padding: 20px 70px 20px 28px;
    img {
      width: 41.596px;
      height: 41.268px;
    }

    p {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      color: var(--Dark, #25282b);
      text-align: left;
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }

  @media (max-width: 500px) {
    //  overflow-y: auto;
    border-radius: 7.739px;
    background: #f6f4ff;
    box-shadow: 0px 15.25215px 45.75646px 0px rgba(0, 0, 0, 0.12);
    width: auto;
    flex-shrink: 0;
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 72.938px;
    border-bottom: 7px solid #3685fb;
    border-bottom-radius: 7.739px;
    padding: 20px 70px 20px 28px;
    img {
      width: 41.596px;
      height: 41.268px;
    }

    p {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      color: var(--Dark, #25282b);
      text-align: left;
      font-family: "Poppins", sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }
`

export const NextFeed = styled.div`
  display: none;
  @media (max-width: 868px) {
    //#F6F4FF
    border-radius: 7.739px;
    background: #f6f4ff;
    box-shadow: 0px 15.25215px 45.75646px 0px rgba(0, 0, 0, 0.12);
    width: auto;
    flex-shrink: 0;
    display: flex;
    gap: -1px;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    height: 72.938px;
    border-bottom: 7px solid #3685fb;
    border-bottom-radius: 50%;
    padding: 20px 70px 20px 28px;
    img {
      position: relative;
      left: 30px;
      width: 41.596px;
      height: 41.268px;
    }
    p {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      color: var(--Dark, #25282b);
      text-align: right;
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }

  @media (max-width: 500px) {
    //#F6F4FF
    border-radius: 7.739px;
    background: #f6f4ff;
    box-shadow: 0px 15.25215px 45.75646px 0px rgba(0, 0, 0, 0.12);
    width: auto;
    flex-shrink: 0;
    display: flex;
    gap: -1px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 72.938px;
    border-bottom: 7px solid #3685fb;
    border-bottom-radius: 50%;
    padding: 20px 70px 20px 28px;
    img {
      position: relative;
      left: 30px;
      width: 41.596px;
      height: 41.268px;
    }

    p {
      margin-right: -18px;
      display: flex;
      width: 239px;
      height: 38px;
      flex-direction: column;
      justify-content: center;
      color: var(--Dark, #25282b);
      text-align: right;
      font-family: "Poppins", sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }
`
