import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo-short.png";
import logoO from "../images/logo-o.png";
import CtaButton from "../components/CtaButton/CtaButton";

export default function Login({ setActiveUser }) {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setUsername(value);
  };

  function handleClick() {
    if (username === "Max") setActiveUser("60620381ba39595a8c3f7ef2");

    if (username === "Lisa") setActiveUser("60620150d254ab59e015a137");
  }

  function handleClickNoUser() {
    setActiveUser("anonym");
  }

  return (
    <>
      <Wrapper>
        <WrapperLogo>
          <img src={logo} alt="logo" width="250"></img>
          <img className="active" src={logoO} alt="logo" width="250"></img>
        </WrapperLogo>
        <WrapperLogin>
          <Input
            type="text"
            name="name"
            placeholder="Enter user name..."
            value={username.name}
            onChange={handleChange}
          />
          <Link to="/home">
            <CtaButton
              backgroundColor="var(--petrol)"
              buttonText="Login"
              clickHandler={handleClick}
            ></CtaButton>
          </Link>
        </WrapperLogin>
        <Link to="/home">
          <CtaButton
            backgroundColor="var(--petrol)"
            buttonText="Start without login"
            clickHandler={handleClickNoUser}
          ></CtaButton>
        </Link>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100vh;
`;

const fadeInTop = keyframes`
0% {
  transform: translateY(-40%)
}
80% {
  transform: translateY(20%)
}
85{
  transform: translateY(-0%)
}
95%{
  transform: translateY(10%)
}
100%{
  transform: translateY(0%)
}
`;

const WrapperLogo = styled.div`
  position: relative;

  & img {
    position: absolute;
    top: -5rem;
    left: -7.8rem;

    &.active {
      animation: ${fadeInTop} 0.7s ease-out;
      
  }
`;

const WrapperLogin = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0.1rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 35%);
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 3rem;
`;

const Input = styled.input`
  margin-top: 1rem;
  border-radius: 0.7rem;
  box-shadow: 0.1rem 0.2rem 0.2rem rgba(0, 0, 0, 35%);
  border: none;
  padding: 0.6rem 2.5rem;
  background: none;
  outline: none;
  font-style: italic;
  color: var(--petrol);
`;

Login.propTypes = {
  setactiveUser: PropTypes.func,
};
