export default function makeFindAllCompany({ companyDb }) {
  return async function findAllCompany () {
    return companyDb.findAll()
  }
}