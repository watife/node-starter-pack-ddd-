/**
 * Dependencies (depends on use-cases)
 */
import { addCompany, findAllCompany } from '../use_cases';

/**
 * controllers
 */
import makeAddCompany from './post-company';
import makeFindAllCompany from './findAll-company';

const postCompany = makeAddCompany({ addCompany })
const findAllCompanies = makeFindAllCompany({ findAllCompany })

const companyController = Object.freeze({
  postCompany,
  findAllCompany,
})

export default companyController
export { postCompany, findAllCompanies }