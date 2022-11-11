const bikeService =  require("../services/BikeService");

//controller for get all bikes and details
exports.getAllBike = async(req, res) =>{
    try{
        const bikes = await bikeService.getAllBike();
        res.json({data: bikes, status:"success"});
    }catch(err){
        res.status(500),json({ error:err.message });
    }
}


exports.createBike = async(req, res) =>{
    try{
        const bike = await bikeService.createBike(req.body);
        res.json({ data:bike, status:"success"});
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

exports.getBikeById = async (req, res) => {
    try {
      const bike = await bikeService.getBikeById(req.params.id);
      res.json({ data: bike, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
   
  exports.updateBike = async (req, res) => {
    try {
      const bike = await bikeService.updateBike(req.params.id, req.body);
      res.json({ data: bike, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
   
  exports.deleteBike= async (req, res) => {
    try {
      const bike = await bikeService.deleteBike(req.params.id);
      res.json({ data: bike, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };