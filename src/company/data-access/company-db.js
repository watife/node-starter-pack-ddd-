export default function makeCompanyDb ({ makeDb, CompanyModel }) {
  return Object.freeze({
    findAll,
    create,
  })

  async function create (companyData) {
    await makeDb();
    const result = await CompanyModel.create(companyData);
    return result;
  }

  async function findAll() {
    await makeDb();
    const result = await CompanyModel.find({});
    return result;
  }
}