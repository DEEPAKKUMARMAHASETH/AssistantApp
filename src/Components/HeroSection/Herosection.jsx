import React from "react";
import styled from "styled-components";

const Herosection = () => {
  return (
    <Container>
      <div className="text">
        <h1>YOU will get your meaning of life passion weak and strong point</h1>
        <p>Empowering You, One Video Call at a Time: Your Personalized Solution to Every Problem</p>
        <p>Mob No: +91 9596667475</p>
      </div>
      <div className="img">
        <img src="images/pngwing.com.png" alt="brnadimage" />
      </div>
    </Container>
  )
}

export default Herosection
const Container = styled.section`
    max-width: 90%;
    height: calc(100vh - 90px);
    margin: 0 auto;
    padding: 0px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
      align-items: center;
    }
    h1{
      font-size: 62px;
      font-weight: 500px;
      /* line-height: 82px;  */
      text-transform: uppercase;
    }
    p{
      font-size: 18px;
      font-weight: 500;
      margin-top: 10px;
    }
    .img img{
      width: 100%;
      background-size: cover;
    }
    @media only screen and (max-width:960px){
        flex-direction: column;
        h1{
          font-size: 42px;
         }
    }
`;

