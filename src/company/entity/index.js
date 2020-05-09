import bcrypt from 'bcrypt';
import modelCompany from './company';
import companyValidator from './validator';

function makeHash (hash) {
  let hashed = bcrypt.hashSync(hash, 10);
  return hashed;
};

function validate (company) {
  let value = companyValidator.validate(company);
 if (value.error) throw new Error(value.error.details[0].message)
  return value;
};

const makeCompany = modelCompany({ validate, makeHash });

export default makeCompany;