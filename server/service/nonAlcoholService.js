function NonAlcoholService(nonAlcoholModel) {
  async function addNonAlcohol(nonAlcoholData) {
    const nonAlcohol = new nonAlcoholModel(nonAlcoholData);
    return nonAlcohol.save();
  }

  async function getNonAlcohol() {
    return nonAlcoholModel.find();
  }

  async function updateNonAlcohol(filter, update) {
    return nonAlcoholModel.findOneAndUpdate(filter, update);
  }

  async function deleteNonAlcohol(filter) {
    return nonAlcoholModel.findOneAndDelete(filter);
  }

  return {
    addNonAlcohol,
    getNonAlcohol,
    updateNonAlcohol,
    deleteNonAlcohol,
  };
}

module.exports = NonAlcoholService;
