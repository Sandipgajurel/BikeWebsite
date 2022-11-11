const express = require("express");
const {
  getAllBike,
  createBike,
  getBikeById,
  updateBike,
  deleteBike,
} = require("../contollers/BikeController");
 
const router = express.Router();
 
router.route("/").get(getAllBike).post(createBike);
router.route("/:id").get(getBikeById).put(updateBike).delete(deleteBike);
 
module.exports = router;