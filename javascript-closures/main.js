function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D');
const lawSchool = graduate('Esq.');

medicalSchool('Natalie Nunez');
lawSchool('Natalie Nunez');
