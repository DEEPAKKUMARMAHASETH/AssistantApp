import { useState } from "react";
import Button from "../Button/Button";
import styled from "styled-components";
import { AiOutlineBars } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import SearchBox from "../SearchBox/SearchBox";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };
  return (
    <Container>
      <div className="logo"><h1>LOGO</h1></div>
      <div className={`menu_list ${isActive ? 'active' : ''}`}>
        <ul className="list active">
          <li href="#">Home</li>
          <li href="#">About</li>
          <li href="#">Service</li>
          <li href="#">Contact</li>
        </ul>
      </div>
      <div className="search_box">
        <SearchBox />
      </div>
      <div className="register">
        <Button onclick={() => { }} text="Login" />
        <Button onclick={() => { }} text="Signup" />
      </div>
      <div className="icon">
        <AiOutlineBars className={isActive?"close":"open"} onClick={toggle} />
        <AiOutlineClose className={isActive?"open":"close"} onClick={toggle} />
      </div>
    </Container>
  );
};

export default Navbar;
const Container = styled.div`
  width: 100%;
  height: 62px;
  margin: 0 auto;
  display: flex;
  align-items:center;
  justify-content: space-around;
  position: relative;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  .logo{
    font-size: 12px;
  }
  ul li{
    list-style: none;
  };
  .menu_list ul{
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 100%;
  }
  .register Button{
   display: block;
  }
  .register{
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .icon{
    font-size: 24px;
    font-weight: 500;
    display: none;
  }

  @media only screen and (max-width:960px){
    .icon{
      display:block;
    }
    .close{
      display: none;
    }
    .menu_list ul{
      position: absolute;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      top: 50px;
      width: 100px;
      height: 200px;
      align-items: flex-start;
      right: 0;
      opacity: 1;
      pointer-events: none;
      visibility: hidden;
      transform: translateX(100%);
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      transition: all 0.5s linear;
  }
  .menu_list.active ul{
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
      transform: translateX(0);
  }

  }
`;
