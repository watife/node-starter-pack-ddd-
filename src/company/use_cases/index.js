import makeAddCompany from './add-company';
import makeFindAllCompany from './find-company';
import companyDb from '../data-access';

const addCompany = makeAddCompany({ companyDb })
const findAllCompany = makeFindAllCompany({ companyDb })

const companyService = Object.freeze({
  addCompany,
  findAllCompany,
})

export default companyService;
export {addCompany, findAllCompany}