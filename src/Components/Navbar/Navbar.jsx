import { useState } from "react";
import styled from "styled-components";
import { AiOutlineBars } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from "react-router-dom";

const Navbar = () => {
  const AllLinks = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/Contact", title: "Contact" }
  ]

  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsActive(!isActive);
  };
  return (
    <Container>
      <div className="logo">
      <Link  className="link" to={AllLinks[0].path}>OLY</Link>
      </div>
      <div className={`menu_list ${isActive ? 'active' : ''}`}>
      <div className="list active">
        {
          AllLinks.map((item) => (
            <div key={item.path}>
              <Link className="link" to={item.path} > {item.title}</Link>
            </div>
          ))
        }
      </div>
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
    font-size: 30px;
    font-weight: 600;
  }
  .link{
    text-decoration: none;
    color: #232D3F;
  }
  .list Link{
    list-style: none;
  };
  .menu_list .list{
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 100%;
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
    .menu_list .list{
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
      transition: all 0.3s linear;
  }
  .menu_list.active .list{
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
      transform: translateX(0);
  }

  }
`;
