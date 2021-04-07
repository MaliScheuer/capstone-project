import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as HeartIconPetrol } from "../../icons/heart.petrol.svg";
import { ReactComponent as PhoneIcon } from "../../icons/phone.svg";
import { ReactComponent as MailIcon } from "../../icons/mail.svg";
import { ReactComponent as ProfilePlaceholder } from "../../icons/profile.placeholder.svg";
import CtaButton from "../CtaButton/CtaButton";

export default function MentorsCard({
  mentor,
  open,
  onAddToFavourites,
  isFavourite,
}) {
  const [details, setDetails] = useState(false);

  return (
    <Wrapper open={open}>
      <Section>
        <IconWrapper isFavourite={isFavourite}>
          <HeartIconPetrol onClick={onAddToFavourites} />
        </IconWrapper>

        {mentor.image ? (
          <ProfileImg
            src={`http://localhost:4000/assets/${mentor.image.name}`}
          />
        ) : (
          <ProfilePlaceholder />
        )}

        <WrapperContact details={details}>
          <PhoneMail>
            <a href="tel:">
              <PhoneIcon />
            </a>
            <p>{mentor.phone}</p>
          </PhoneMail>
          <PhoneMail>
            <a href="mailto:">
              <MailIcon />
            </a>
            <p>{mentor.email}</p>
          </PhoneMail>
        </WrapperContact>
        <h2>{mentor.mentor_name}</h2>
        <Competence>{mentor.competence}</Competence>
        <Subline>About Me</Subline>
        <About className="shadow" details={details}>
          {mentor.about}
        </About>
        <Subline>Skills</Subline>
        <WrapperBuzzwords details={details}>
          {mentor.buzzwords.map((buzzword, index) => (
            <Buzzwords key={index}>{buzzword}</Buzzwords>
          ))}
        </WrapperBuzzwords>
        <CtaButton
          clickHandler={() => setDetails(!details)}
          buttonText={details ? "Show less" : "Show more"}
        />
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  opacity: ${({ open }) => (open ? "40%" : "100%")};

  p {
    margin: 0;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 35%);
  padding: 1rem;

  h2,
  h4 {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
`;

const WrapperContact = styled.section`
  height: ${(props) => (props.details ? "auto" : "0")};
  overflow-y: hidden;
  background: var(--petrol-light);
  color: white;
  border-radius: 0.5rem;
  padding: ${(props) => (props.details ? "0.7rem 2rem" : "0")};
  margin: 1rem auto;

  p {
    margin: 0.2rem;
    font-size: 0.8rem;
  }
`;

const PhoneMail = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 5rem;
`;

const Competence = styled.h3`
  color: var(--petrol);
  text-transform: uppercase;
  margin: 0.5rem;
  margin-bottom: 1rem;
  letter-spacing: 0.1rem;
  font-size: 1rem;
`;

const About = styled.p`
  font-size: 0.8rem;
  height: ${(props) => (props.details ? "auto" : "2.4rem")};
  overflow-y: hidden;
`;

const WrapperBuzzwords = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.8rem;
  height: ${(props) => (props.details ? "auto" : "2.4rem")};
  overflow-y: hidden;
`;

const Buzzwords = styled.p`
  background: var(--petrol);
  color: white;
  padding: 0.5rem;
  border-radius: 0.7rem;
  margin: 0;
  text-transform: uppercase;
  font-size: 0.8rem;
  align-self: center;
`;

const Subline = styled.h4`
  margin: 0.5rem auto;
`;

const IconWrapper = styled.button`
  display: flex;
  align-self: flex-end;
  margin-top: 0.7rem;
  margin-right: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  outline: white;

  svg {
    path {
      fill: ${(props) => (props.isFavourite ? "var(--petrol)" : "var(--grey)")};
    }
  }
`;
MentorsCard.propTypes = {
  mentor: PropTypes.object,
  open: PropTypes.bool,
  onAddToFavourites: PropTypes.func,
  isFavourite: PropTypes.bool,
};
