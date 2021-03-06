import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactComponent as PhoneIcon } from "../../icons/phone.svg";
import { ReactComponent as MailIcon } from "../../icons/mail.svg";
import { ReactComponent as EditIcon } from "../../icons/edit.svg";
import { ReactComponent as ProfilePlaceholder } from "../../icons/profile.placeholder.svg";
import background from "../../images/rectangle-petrol.png";

export default function ProfileCard({ open, mentor, setMentors, activeUser }) {
  const history = useHistory();

  /*const setInactive = (mentor) => {
    let active = !mentor.isActive;
    fetch("/mentors/" + mentor._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isActive: active,
      }),
    })
      .then((response) => response.json())
      .then(() => history.push("/profile"))
      //.then((mentor) => setMentors(mentor))
      .catch((error) => console.error(error.message));
  };*/

  const setInactive = (mentor) => {
    let active = !mentor.isActive;
    fetch("/mentors/" + mentor._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isActive: active,
      }),
    })
      .then(
        fetch("/mentors")
          .then((result) => result.json())

          .then((mentors) => setMentors(mentors))
          .catch((error) => console.error(error.message))
      )
      .then(() => history.push("/profile"))
      .catch((error) => console.error(error.message));
  };

  return (
    <Section toggle={mentor.isActive} open={open}>
      <div onChange={() => setInactive(mentor)}>
        <SwitchIcon className={mentor.isActive && "active"}>
          <input type="checkbox" />
          <Slider className={mentor.isActive && "active"} />
        </SwitchIcon>
      </div>
      <WrapperImageContact>
        {mentor.image ? (
          <ProfileImg src={`/assets/${mentor.image.name}`} />
        ) : (
          <ProfilePlaceholder />
        )}
        <Name>{mentor.mentor_name}</Name>
        <WrapperContact>
          <PhoneMail>
            <PhoneIcon />
            <p>{mentor.phone}</p>
          </PhoneMail>
          <PhoneMail>
            <MailIcon />
            <p>{mentor.email}</p>
          </PhoneMail>
        </WrapperContact>
      </WrapperImageContact>
      <Subline>Field of Competence</Subline>
      <Competence>{mentor.competence}</Competence>
      <Subline>About Me</Subline>
      <About>{mentor.about}</About>
      <Subline>Skills</Subline>
      <WrapperBuzzwords>
        {mentor.buzzwords.map((buzzword, index) => (
          <Buzzwords key={index}>{buzzword}</Buzzwords>
        ))}
      </WrapperBuzzwords>
      <Link to="/edit-profile">
        <EditButton>
          <EditIcon />
          Edit
        </EditButton>
      </Link>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ open, toggle }) => (open || !toggle ? "40%" : "100%")};
  position: relative;
  top: -0.2rem;
  text-align: center;
  padding: 1.2rem;
  background: url(${background});
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  height: 110px;
  h3,
  h4 {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
  p {
    margin-top: 0.3rem;
  }
  a {
    text-decoration: none;
  }
`;

const SwitchIcon = styled.label`
  opacity: 50%;
  position: relative;
  top: -1.1rem;
  left: 38vw;
  display: inline-block;
  background-color: white;
  border-radius: 2rem;
  width: 50px;
  height: 28px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  &.active {
    opacity: 100%;
  }
  @media (min-width: 600px) {
    left: 24vw;
  }
  @media (min-width: 1000px) {
    left: 16vw;
  }
`;
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: var(--petrol);
    border-radius: 50%;
  }
  &.active {
    left: 20px;
  }

  @media (min-width: 600px) {
    left: 25px;
  }
`;
const WrapperImageContact = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 0.5rem;
  background: var(--petrol-light);
  border-radius: 2.5rem;
  padding: 1.4rem;
  text-align: left;
  box-shadow: 0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 35%);

  @media (min-width: 600px) {
    width: 60vw;
    padding: 2.5rem;
  }
  @media (min-width: 1000px) {
    width: 40vw;
    padding: 2rem;
  }
`;
const Name = styled.h4`
  color: white;
  align-self: center;
  grid-row: span 2;
  line-height: 1.5rem;

  @media (min-width: 600px) {
    font-size: 1.3rem;
  }
`;

const WrapperContact = styled.section`
  color: white;
  grid-row: span 2;
  p {
    margin: 0.1rem;
    font-size: 0.65rem;
    @media (min-width: 600px) {
      font-size: 1rem;
    }
  }
`;

const PhoneMail = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ProfileImg = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 5rem;
  grid-row: span 3;
  align-self: flex-end;
`;

const Competence = styled.p`
  color: var(--petrol);
  font-weight: bold;
  @media (min-width: 600px) {
    width: 50vw;
  }
`;

const About = styled.p`
  font-size: 0.8rem;
  @media (min-width: 600px) {
    width: 40vw;
  }
`;

const WrapperBuzzwords = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.8rem;
  @media (min-width: 600px) {
    width: 50vw;
  }
`;

const Buzzwords = styled.p`
  background: var(--red);
  color: white;
  padding: 0.5rem;
  border-radius: 0.7rem;
  margin: 0;
`;

const Subline = styled.h4`
  align-items: flex-end;
  margin-top: 1.5rem;
  color: var(--petrol);
  @media (min-width: 600px) {
    width: 50vw;
  }
`;

const EditButton = styled.button`
  position: relative;
  left: 33vw;
  margin-top: 1rem;
  margin-bottom: 2rem;
  border-radius: 0.3rem;
  border: none;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 35%);
  color: var(--petrol);
  background: var(--grey);
  padding: 0.3rem 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 600px) {
    left: 22vw;
  }

  @media (min-width: 1000px) {
    left: 15vw;
  }
`;

ProfileCard.propTypes = {
  open: PropTypes.bool,
  mentor: PropTypes.object,
};
