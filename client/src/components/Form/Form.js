import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Buzzwords from "../Buzzwords/Buzzwords";
import isValidMentor from "../../lib/validateFunctions";
import loadFromLocal from "../../lib/loadFromLocal";
import saveToLocal from "../../lib/saveToLocal";

export default function Form({ postNewMentorToApi, open, isStatic }) {
  const initialMentor = {
    mentor_name: "",
    competence: "",
    buzzwords: [],
    email: "",
    phone: "",
    about: "",
    image: "",
  };

  const NEWMENTOR_KEY = "newMentorInput";

  const [newMentor, setNewMentor] = useState(
    loadFromLocal(NEWMENTOR_KEY) ?? initialMentor
  );
  const [valid, setValid] = useState(false);
  const [validation, setValidation] = useState([]);

  useEffect(() => {
    saveToLocal(NEWMENTOR_KEY, newMentor);
  }, [newMentor]);

  useEffect(() => {
    if (validation.includes("valid")) {
      postNewMentorToApi(newMentor);
      setValid(true);
      setNewMentor(initialMentor);
      setValidation([]);
    }
  }, [validation]);

  let imageInput = null;

  const handleChange = (event) => {
    const field = event.target;
    const value = field.value;

    setNewMentor({
      ...newMentor,
      [field.name]: value,
    });
  };

  const removeImage = () => {
    setNewMentor({
      ...newMentor,
      image: "",
    });
  };

  const handleImageUpload = (event) => {
    const url = "http://localhost:4000/upload";
    const formData = new FormData();
    formData.append("image", event.target.files[0]);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((result) => result.json())
      .then((image) => setNewMentor({ ...newMentor, image: image }))
      .catch((error) => console.error(error.message));
  };

  const notValid = [];

  const isValidMentorName = (name) => {
    const letters = /^[a-z ,.'-]+$/i;
    if (name.length >= 2 && name.match(letters)) {
      return true;
    } else {
      notValid.push("name");
    }
  };
  const isValidCompetence = (competence) => {
    if (competence !== "") {
      return true;
    } else {
      notValid.push("competence");
    }
  };

  const isValidBuzzwords = (buzzword) => {
    if (buzzword.length >= 1) {
      return true;
    } else {
      notValid.push("buzzwords");
    }
  };

  const isValidEmail = (email) => {
    if (email.includes("@")) {
      return true;
    } else {
      notValid.push("email");
    }
  };

  const isValidPhone = (phone) => {
    const phoneno = /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
    if (phone.match(phoneno)) {
      return true;
    } else {
      notValid.push("phone");
    }
  };

  const isValidAbout = (about) => {
    if (about.length >= 250 && about.length <= 750) {
      return true;
    } else {
      notValid.push("about");
    }
  };

  const allValid = () => {
    if (!notValid.length) {
      notValid.push("valid");
      return true;
    }
  };

  function formValidation() {
    isValidMentorName(newMentor.mentor_name) &&
      isValidCompetence(newMentor.competence) &&
      isValidBuzzwords(newMentor.buzzwords) &&
      isValidEmail(newMentor.email) &&
      isValidPhone(newMentor.phone) &&
      isValidAbout(newMentor.about) &&
      allValid();
    setValidation(notValid);
  }

  function submitForm(event) {
    event.preventDefault();
    formValidation();
  }

  console.log(validation);

  const addBuzzword = (buzzword) => {
    if (buzzword.length >= 1) {
      setNewMentor({
        ...newMentor,
        buzzwords: [...newMentor.buzzwords, buzzword],
      });
    }
  };

  function deleteBuzzword(buzzwordToDelete) {
    const remainingBuzzwords = newMentor.buzzwords.filter(
      (buzzword) => buzzwordToDelete !== buzzword
    );
    setNewMentor({ ...newMentor, buzzwords: remainingBuzzwords });
  }

  function deleteLastBuzzword() {
    const remainingBuzzwords = newMentor.buzzwords.filter(
      (_, index) => index !== newMentor.buzzwords.length - 1
    );
    setNewMentor({
      ...newMentor,
      buzzwords: remainingBuzzwords,
    });
  }

  return (
    <>
      <FormWrapper
        isStatic={isStatic}
        open={open}
        valid={valid}
        onSubmit={submitForm}
      >
        {validation.includes("name") && (
          <ErrorMessage>Please enter your first and last name</ErrorMessage>
        )}
        <input
          type="text"
          name="mentor_name"
          placeholder="Enter your full name*"
          onChange={handleChange}
          value={newMentor.mentor_name}
          className={validation.includes("name") ? "invalid" : ""}
        />
        {validation.includes("competence") && (
          <ErrorMessage>Please choose a field of competence</ErrorMessage>
        )}
        <select
          type="text"
          name="competence"
          onChange={handleChange}
          value={newMentor.competence}
          className={validation.includes("competence") ? "invalid" : ""}
        >
          <option value="">Choose field of competence*</option>
          <option value="Architecture and Engineering">
            Architecture and Engineering
          </option>
          <option value="Agriculture and Food">Agriculture and Food</option>
          <option value="Arts and Entertainment">Arts and Entertainment</option>
          <option value="Business, Management and Administration">
            Business, Management and Administration
          </option>
          <option value="Education and Training">Education and Training</option>
          <option value="Finance and Accounting">Finance and Accounting</option>
          <option value="Health and Medicine">Health and Medicine</option>
          <option value="Law and Public Policy">Law and Public Policy</option>
          <option value="Sales, Marketing and Communications">
            Sales, Marketing and Communications
          </option>
          <option value="Science and Technology">Science and Technology</option>
        </select>

        {validation.includes("buzzwords") && (
          <ErrorMessage>
            Please enter at least one buzzword or skill
          </ErrorMessage>
        )}
        <Buzzwords
          buzzwords={newMentor.buzzwords}
          onCreateBuzzword={addBuzzword}
          onDeleteBuzzword={deleteBuzzword}
          onDeleteLastBuzzword={deleteLastBuzzword}
          validation={validation}
        ></Buzzwords>

        {validation.includes("email") && (
          <ErrorMessage>Please enter a valid email address</ErrorMessage>
        )}
        <input
          type="email"
          name="email"
          placeholder="Enter your email*"
          onChange={handleChange}
          value={newMentor.email}
          className={validation.includes("email") ? "invalid" : ""}
        />

        {validation.includes("phone") && (
          <ErrorMessage>Please enter your valid phone number</ErrorMessage>
        )}
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number*"
          onChange={handleChange}
          value={newMentor.phone}
          className={validation.includes("phone") ? "invalid" : ""}
        />

        <label>About</label>
        {validation.includes("about") && (
          <ErrorMessage>Please use between 250 and 750 characters</ErrorMessage>
        )}
        <textarea
          minLength="250"
          maxLength="750"
          type="text"
          name="about"
          placeholder="Tell the world about yourself,
                why you wanna become a mentor
                and in which areas you can help
                (use 250 - 750 characters)*"
          onChange={handleChange}
          value={newMentor.about}
          className={validation.includes("about") ? "invalid" : ""}
        />

        <label>Add image</label>

        <input
          type="file"
          name="image"
          placeholder="Add image"
          onChange={handleImageUpload}
          style={{ display: "none" }}
          ref={(input) => (imageInput = input)}
        />
        <ImageWrapper>
          {newMentor.image?.name && (
            <img
              src={`http://localhost:4000/assets/${newMentor.image.name}`}
              width="100"
              alt="profile imge"
            />
          )}
          <ImageButton type="button" onClick={() => imageInput.click()}>
            Pick image
          </ImageButton>
          <ImageButton onClick={removeImage} type="button">
            Remove Image
          </ImageButton>
        </ImageWrapper>
        <SubmitButton valid={valid} type="submit">
          Create Profile
        </SubmitButton>
      </FormWrapper>

      {valid && (
        <SuccessMessage>
          <p>
            Thanks for sharing your experience! Now your profile is part of our
            mentors network!
          </p>
          <a href="/search-mentors">
            <ProfileButton>Checkout other mentors</ProfileButton>
          </a>
        </SuccessMessage>
      )}
    </>
  );
}

const FormWrapper = styled.form`
  position: ${(props) => (props.isStatic ? "static" : "absolute")};
  display: flex;
  flex-direction: column;
  margin: 2.3rem;
  gap: 0.2rem;
  opacity: ${({ open, valid }) => (open || valid ? "40%" : "100%")};
  input,
  select,
  textarea {
    margin-bottom: 1rem;
    border-radius: 0.7rem;
    box-shadow: 0.1rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 35%);
    border: none;
    padding: 0.6rem;
    background: none;
    outline: none;
    font-style: italic;
    color: var(--petrol);
  }

  .invalid {
    box-shadow: 0.1rem 0.2rem 0.2rem #ff6750;
  }

  textarea {
    height: 6rem;
    padding: 0.8rem;
  }
  label {
    margin-left: 0.5rem;
    color: var(--petrol);
  }
`;

const SubmitButton = styled.button`
  background: ${({ valid }) => (!valid ? "var(--red)" : "var(--lightgrey)")};
  padding: 1rem;
  border-radius: 0.4rem;
  border: none;
  color: white;
  text-transform: uppercase;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 35%);
  cursor: pointer;
  width: 230px;
  font-size: 1.1rem;
  align-self: center;
`;

const SuccessMessage = styled.div`
  background: var(--petrol);
  color: white;
  padding: 1rem;
  margin: 2rem;
  position: ${(props) => (props.isStatic ? "static" : "relative")};
  border-radius: 0.3rem;
`;

const ProfileButton = styled.button`
  border: none;
  outline: none;
  border-radius: 0.3rem;
  color: var(--petrol);
  padding: 0.5rem;
  margin-top: 1rem;
  background: var(--lightgrey);
  letter-spacing: 0.1rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  cursor: pointer;
`;

const ImageWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 35%);
  padding: 1rem;
  border-radius: 1rem;
`;

const ImageButton = styled.button`
  border: none;
  background: var(--petrol);
  color: white;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 35%);
  border-radius: 0.5rem;
  padding: 0.5rem;
  height: 70%;
  outline: none;
  cursor: pointer;
  margin-left: 0.5rem;
`;
const ErrorMessage = styled.div`
  color: #ff6750;
  font-size: 0.7rem;
  font-style: italic;
`;

Form.propTypes = {
  submitFunction: PropTypes.func,
  open: PropTypes.bool,
};
