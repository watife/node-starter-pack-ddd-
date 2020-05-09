export default function makeFindAllCompany ({ findAllCompany }) {
  return async function FindAllCompany(_, res) {
    try {
      const allCompany = await findAllCompany()

      return res.status(200).json({
        status: "success",
        company: allCompany
      });

    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message
      });
    }
  }
}