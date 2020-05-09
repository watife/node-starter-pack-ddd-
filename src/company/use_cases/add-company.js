import makeCompany from '../entity';

export default function makeAddCompany({ companyDb }) {
  return async function addCompany (companyInfo) {
    const company = makeCompany(companyInfo)
    // const exists = await companyDb.findByEmail({ email: company.email })
    // if (exists) {
    //   return exists
    // }

    return companyDb.create({...company})
  }
}