import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Company's name is required"],
    unique: true
  },
  address: {
    type: String,
    required: [true, "Address is required"]
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  }
}, {timestamps: true})

const CompanyModel = mongoose.model('company', companySchema);

export default CompanyModel;