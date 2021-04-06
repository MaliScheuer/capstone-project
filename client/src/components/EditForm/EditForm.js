import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Buzzwords from "../Buzzwords/Buzzwords";
import isValidMentor from "../../lib/validateFunctions";
import loadFromLocal from "../../lib/loadFromLocal";
import saveToLocal from "../../lib/saveToLocal";

export default function Form({ updateMentorToApi, open, activeUser, mentors }) {
  const activeMentor = mentors.find((mentor) => mentor._id === activeUser);

  const EDITMENTOR_KEY = "mentorToEdit";

  const [editMentor, setEditMentor] = useState(
    loadFromLocal(EDITMENTOR_KEY) ?? activeMentor
  );
  const [valid, setValid] = useState(false);

  console.log(editMentor);

  useEffect(() => {
    setEditMentor(activeMentor);
  }, [activeMentor]);

  useEffect(() => {
    saveToLocal(EDITMENTOR_KEY, editMentor);
  }, [editMentor]);

  let imageInput = null;

  const handleChange = (event) => {
    const field = event.target;
    const value = field.value;

    setEditMentor({
      ...editMentor,
      [field.name]: value,
    });
  };

  const removeImage = () => {
    setEditMentor({
      ...editMentor,
      image: "",
    });
  };

  const handleImageUpload = (event) => {
    const url = "http://localhost:4000/upload";
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    event.preventDefault();

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((result) => result.json())
      .then((image) => setEditMentor({ ...editMentor, image: image }))
      .catch((error) => console.error(error.message));
  };

  function submitForm(event) {
    event.preventDefault();
    if (isValidMentor(editMentor)) {
      setValid(true);
      updateMentorToApi(editMentor);
      setEditMentor(editMentor);
    }
  }

  const addBuzzword = (buzzword) => {
    if (buzzword.length >= 1) {
      setEditMentor({
        ...editMentor,
        buzzwords: [...editMentor.buzzwords, buzzword],
      });
    }
  };

  function deleteBuzzword(buzzwordToDelete) {
    const remainingBuzzwords = editMentor.buzzwords.filter(
      (buzzword) => buzzwordToDelete !== buzzword
    );
    setEditMentor({ ...editMentor, buzzwords: remainingBuzzwords });
  }

  function deleteLastBuzzword() {
    const remainingBuzzwords = editMentor.buzzwords.filter(
      (_, index) => index !== editMentor.buzzwords.length - 1
    );
    setEditMentor({
      ...editMentor,
      buzzwords: remainingBuzzwords,
    });
  }

  return (
    <>
      <Link to="/profile">
        <GoBack>go back</GoBack>
      </Link>
      <FormWrapper open={open} valid={valid} onSubmit={submitForm}>
        <input
          type="text"
          name="mentor_name"
          placeholder="Enter your full name*"
          onChange={handleChange}
          value={editMentor.mentor_name}
        />

        <select
          type="text"
          name="competence"
          onChange={handleChange}
          value={editMentor.competence}
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

        <Buzzwords
          buzzwords={editMentor.buzzwords}
          onCreateBuzzword={addBuzzword}
          onDeleteBuzzword={deleteBuzzword}
          onDeleteLastBuzzword={deleteLastBuzzword}
        ></Buzzwords>

        <input
          type="email"
          name="email"
          placeholder="Enter your email*"
          onChange={handleChange}
          value={editMentor.email}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number*"
          onChange={handleChange}
          value={editMentor.phone}
        />

        <label>About</label>
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
          value={editMentor.about}
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
          {editMentor.image?.name && (
            <img
              src={`/images/${editMentor.image.name}`}
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
          Update Profile
        </SubmitButton>
      </FormWrapper>

      {/*{valid && (
        <SuccessMessage>
          <p>Thanks for your update!</p>
          <a href="/profile">
            <ProfileButton>Checkout your profile</ProfileButton>
          </a>
        </SuccessMessage>
      )}*/}
    </>
  );
}

// update der Daten aus DB erst bei Refresh

const FormWrapper = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 2.3rem;
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
  /*input:valid, 
select:valid, 
textarea:valid{
  box-shadow: 0 0 5px 1px var(--petrol);
}*/
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
  position: relative;
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

const GoBack = styled.button`
  margin: 1rem;
  border: none;
  background: none;
  text-decoration: none;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 35%);
  border-radius: 0.3rem;
  color: var(--petrol);
  padding: 0.3rem 1rem;
  font-size: 0.7rem;
  font-weight: bold;
  cursor: pointer;
`;

Form.propTypes = {
  submitFunction: PropTypes.func,
  open: PropTypes.bool,
};
