// const alcoholModel = require("../../models/alcohol");
// const AlcoholService = require("../../service/AlcoholService");

// const checkAlcoholDuplicate = async (req, res, next) => {
//   const { name } = req.body;

//   try {
//     await AlcoholService(alcoholModel).checkDuplicate(name);
//   } catch (error) {
//     console.log(error.message);
//     return res.status(403).send(error.message);
//   }

//   next();
// };

// module.exports = checkAlcoholDuplicate;
