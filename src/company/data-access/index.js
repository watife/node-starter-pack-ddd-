import makeCompanyDb from './company-db'
import mongoose from 'mongoose';
import CompanyModel from './schema/company-db-schema';
require('dotenv').config()

const url = process.env.DB_COMPANY_DB_URL
const dbName = process.env.DB_COMPANY_DB_NAME

export async function makeDb () {
  try {
    const connect = await mongoose.connect(url, { useUnifiedTopology: true,  useNewUrlParser: true } );

    if (connect) console.log('connection successful');
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
  
}

const companyDb = makeCompanyDb({ makeDb, CompanyModel })
export default companyDb