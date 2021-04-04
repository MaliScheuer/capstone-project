export const notValid = [];

export const isValidMentorName = (name) => {
  const letters = /^[a-z ,.'-]+$/i;
  if (name.length >= 2 && name.match(letters)) {
    return true;
  } else {
    notValid.push("name");
  }
};
export const isValidCompetence = (competence) => {
  if (competence !== "") {
    return true;
  } else {
    notValid.push("competence");
  }
};

export const isValidBuzzwords = (buzzword) => {
  if (buzzword.length >= 1) {
    return true;
  } else {
    notValid.push("buzzwords");
  }
};

export const isValidEmail = (email) => {
  if (email.includes("@")) {
    return true;
  } else {
    notValid.push("email");
  }
};

export const isValidPhone = (phone) => {
  const phoneno = /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
  if (phone.match(phoneno)) {
    return true;
  } else {
    notValid.push("phone");
  }
};

export const isValidAbout = (about) => {
  if (about.length >= 250 && about.length <= 750) {
    return true;
  } else {
    notValid.push("about");
  }
};

export const allValid = () => {
  if (!notValid.length) {
    notValid.push("valid");
    return true;
  }
};

export default {
  notValid,
  isValidMentorName,
  isValidCompetence,
  isValidBuzzwords,
  isValidEmail,
  isValidPhone,
  isValidAbout,
  allValid,
};
