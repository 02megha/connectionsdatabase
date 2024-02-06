const express = require("express");
const app = express();
const {connectDatabase } = require("./connection/connect");
// creating server

// app.use(express.json()); 

// const MOBILE_MODEL = required("./Models/mobile");





// app.post("/api/mobiledata", async (req, res) =>{
//     try{

//         const dbobject = {
// company: req.body.companyname,
// amount: req.body.prices,
// features: req.body.quality,
// selling : req.body.profit,
// ceo: req.body.owner,
// workets:req.body.labour,

// };
// const mobiledata = new MOBILE_MODEL(dbobject);
// await mobiledata.save();
// return res.json({
//     successs: true,
//     message: "mobile registered succesfully",
// });
//     } catch (error) {
//         return res.status (400).json({ success: false, error: error.message});

//     }
// });
 
// app.get("/api/getmobile" , async (req ,res) => {
//     try{
//         const mobiledata = await MOBILE_MODEL.find();
//         return res.json({ success : true , data : mobiledata});
//     } catch (error) {
//         console.log(error);
// return res.status(400).json ({success : false,  error: error.message });

//     }
// });
connectDatabase();
app.listen(8000, async() => {
   await console.log("server is running at port 8000");
});
 

