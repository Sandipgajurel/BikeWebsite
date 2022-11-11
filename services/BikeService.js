const BikeModel = require("../models/BikeDetails");

exports.getAllBike = async () => {
    return await BikeModel.find();
};

exports.createBike = async (bike) => {
    return await BikeModel.create(bike);
  };
  exports.getBikeById = async (id) => {
    return await BikeModel.findById(id);
  };
   
  exports.updateBike = async (id, bike) => {
    return await BikeModel.findByIdAndUpdate(id, bike);
  };
   
  exports.deleteBike = async (id) => {
    return await BikeModel.findByIdAndDelete(id);
  };