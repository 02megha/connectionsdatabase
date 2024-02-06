const mongoose = require("mongoose");
// also known as modelling//

const mobileSchema = new mongoose.Schema({

    company : String,
    amount : number,
    features : String,
    selling : number,
    ceo : String,
    workers : number,
    
// also known as modelling//
  
});

const MOBILEMODEL = mongoose.model("mobile", mobileSchema);
module.exports = MOBILEMODEL;const mongoose = require("mongoose");
// also known as modelling//