const { ObjectId } = require("mongodb");

function AlcoholService(alcoholModel) {
  async function addAlcohol(data) {
    const { name, abv, subAlcohol } = data;

    const alcohol = new alcoholModel();
    alcohol.name = name;
    alcohol.abv = abv;
    alcohol.subAlcohol = subAlcohol;

    return alcohol.save();
  }

  async function getAlcohol(qurey) {
    const name = qurey.name ? { name: qurey.name } : {};
    return alcoholModel.find(name);
  }

  async function updateAlcohol(filter, update) {
    const filterValid = {};
    if (filter.id) {
      filterValid._id = new ObjectId(filter.id);
    }
    if (filter.name) {
      filterValid.name = filter.name;
    }
    return alcoholModel.findOneAndUpdate(
      filterValid,
      { ...update },
      { upsert: false }
    );
  }

  async function deleteAlcohol(filter) {
    const filterValid = {};
    if (filter.id) {
      filterValid._id = new ObjectId(filter.id);
    }
    if (filter.name) {
      filterValid.name = filter.name;
    }
    return alcoholModel.findOneAndDelete(filterValid);
  }

  return {
    addAlcohol,
    getAlcohol,
    updateAlcohol,
    deleteAlcohol,
  };
}

module.exports = AlcoholService;
