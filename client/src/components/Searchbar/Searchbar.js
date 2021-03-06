import styled from "styled-components";
import PropTypes from "prop-types";
import CtaButton from "../CtaButton/CtaButton";

export default function Searchbar({
  open,
  searchterm,
  onhandleChange,
  onShowAll,
}) {
  return (
    <>
      <SearchWrapper open={open}>
        <select
          type="text"
          title="competence"
          name="competence"
          value={searchterm.competence}
          onChange={onhandleChange}
          data-testid="competence-input"
        >
          <option>Choose field of competence</option>
          <option>Architecture and Engineering</option>
          <option>Agriculture and Food</option>
          <option>Arts and Entertainment</option>
          <option>Business, Management and Administration</option>
          <option>Education and Training</option>
          <option>Finance and Accounting</option>
          <option>Health and Medicine</option>
          <option>Law and Public Policy</option>
          <option>Sales, Marketing and Communications</option>
          <option>Science and Technology</option>
        </select>

        <input
          id="header-search"
          title="buzzwords"
          type="text"
          name="buzzwords"
          placeholder="Enter skill or buzzword..."
          value={searchterm.buzzwords}
          onChange={onhandleChange}
          data-testid="search-input"
        />
        <CtaButton
          type="button"
          buttonText="Show all"
          clickHandler={onShowAll}
        />
      </SearchWrapper>
    </>
  );
}

const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.2rem 2.3rem;
  gap: 0.2rem;
  opacity: ${({ open, valid }) => (open || valid ? "40%" : "100%")};
  background: var(--petrol);
  box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem rgba(0, 0, 0, 35%);
  border-radius: 1rem;
  padding: 1rem 2rem;

  @media (min-width: 700px) {
    width: 40%;
    margin: 1rem auto;
  }

  input,
  select {
    margin-bottom: 1rem;
    border-radius: 0.7rem;
    box-shadow: 0.1rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 35%);
    border: none;
    padding: 0.6rem;
    background: white;
    outline: none;
    font-style: italic;
    color: var(--petrol);
  }

  input {
    padding-right: 8.8rem;
  }
`;

Searchbar.propTypes = {
  open: PropTypes.bool,
  searchterm: PropTypes.object,
  onhandleChange: PropTypes.func,
  onShowAll: PropTypes.func,
};
