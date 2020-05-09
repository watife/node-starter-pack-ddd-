export default function makeAddCompany ({ addCompany }) { //inject the use-case for adding company
  return async function PostCompany(req, res) {
    try {
      const { body } = req;

      const newCompany = await addCompany({...body})

      return res.status(201).json({
        status: "success",
        company: newCompany
      });

    } catch (error) {
      return res.status(422).json({
        status: "error",
        message: error.message
      });
    }
  }
}