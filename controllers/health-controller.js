const healthModel = require('../models/health-model');

healthCheck = (req, res)=>{
    return res.status(200).json({status: "OK"});
}

mongoHealthCheck = async (req, res) => {
    try {
        await healthModel.find({}, (err, health) => {
            if (err) {
                return res.status(500).json({status: "MongoDB connection error", error: err.message});
            }
             return res.status(200).json({status: "OK",data: health});
        });
       
    
    }catch (error) {
        return res.status(500).json({status: "MongoDB connection error", error: error.message});
    }
}

module.exports = {
    healthCheck,
    mongoHealthCheck
}