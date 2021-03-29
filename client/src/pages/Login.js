import styled from "styled-components";
import { Link } from "react-router-dom";
import CtaButton from "../components/CtaButton/CtaButton";

export default function Login({ activeUser, setActiveUser }) {
  function handleClick1() {
    setActiveUser("605b3052fb7697b76d179dfa");
    console.log(activeUser);
  }

  function handleClick2() {
    setActiveUser("605b3dadfb7697b76d179dfc");
    console.log(activeUser);
  }

  return (
    <>
      <Wrapper>
        <Link to="/home">
          <CtaButton
            buttonText="Login Max Mustermann"
            clickHandler={handleClick1}
          ></CtaButton>
        </Link>
        <Link to="/home">
          <CtaButton
            buttonText="Login Lisa Musterfrau"
            clickHandler={handleClick2}
          ></CtaButton>
        </Link>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  background: var(--petrol);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100vh;
`;
