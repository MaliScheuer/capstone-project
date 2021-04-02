import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import CtaButton from "../components/CtaButton/CtaButton";

export default function Login({ setActiveUser }) {
  function handleClick1() {
    setActiveUser("60620381ba39595a8c3f7ef2");
  }

  function handleClick2() {
    setActiveUser("60620150d254ab59e015a137");
  }

  function handleClickNoUser() {
    setActiveUser("anonym");
  }

  return (
    <>
      <Wrapper>
        <img src={logo} alt="logo" width="200"></img>
        <Link to="/home">
          <CtaButton
            backgroundColor="var(--petrol)"
            buttonText="Login Max Mustermann"
            clickHandler={handleClick1}
          ></CtaButton>
        </Link>
        <Link to="/home">
          <CtaButton
            backgroundColor="var(--petrol)"
            buttonText="Login Lisa Musterfrau"
            clickHandler={handleClick2}
          ></CtaButton>
        </Link>
        <Link to="/home">
          <CtaButton
            backgroundColor="var(--petrol)"
            buttonText="Start without Login"
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

Login.propTypes = {
  setactiveUser: PropTypes.func,
};
