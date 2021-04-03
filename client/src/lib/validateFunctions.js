export const isValidMentorName = (name) => {
  const letters = /^[a-z ,.'-]+$/i;
  if (name.length >= 2 && name.match(letters)) {
    return true;
  } else {
    alert("Enter your right name");
    return false;
  }
};

export const isValidCompetence = (competence) => {
  if (competence !== "") {
    return true;
  } else {
    alert("You have to choose a field of competence");
    return false;
  }
};

export const isValidBuzzwords = (buzzword) => {
  if (buzzword.length >= 1) {
    return true;
  } else {
    alert("Enter at least one buzzword");
    return false;
  }
};

export const isValidEmail = (email) => {
  if (email.includes("@")) {
    return true;
  } else {
    alert("Enter a valid email");
    return false;
  }
};

export const isValidPhone = (phone) => {
  const phoneno = /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
  if (phone.match(phoneno)) {
    return true;
  } else {
    alert("Enter a valid Phone Number");
    return false;
  }
};

export const isValidAbout = (about) => {
  if (about.length >= 250 && about.length <= 750) {
    return true;
  } else {
    alert("Enter a valid about text");
    return false;
  }
};

const isValidMentor = (mentor) =>
  isValidMentorName(mentor.mentor_name) &&
  isValidCompetence(mentor.competence) &&
  isValidBuzzwords(mentor.buzzwords) &&
  isValidEmail(mentor.email) &&
  isValidPhone(mentor.phone) &&
  isValidAbout(mentor.about);

export default isValidMentor;
