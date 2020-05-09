const modelCompany = ({ validate, makeHash }) => {
  return function makeCompany ({
    companyName,
    address,
    password,
    repeat_password,
    email,
  } = {}) {

    validate({ companyName, address, password, repeat_password, email });

    let hashedPassword = makeHash(password);

    return Object.freeze({
      companyName,
      address,
      email,
      password: hashedPassword,
    })
  }
}

export default modelCompany;