const express = require('express');
const cors = require('cors');
const db =require('./db');
require('dotenv').config();
const app = express();
const Data =require('./Models/Data');
const Popular =require('./Models/Popular');
app.use(cors());
app.use(express.json());

app.post('/api/Data',async (req,res)=>{
  try{
    const data=req.body;
    const newData=new Data(data);
    const response=await newData.save();
    console.log('data saved');
     res.status(200).json(response);
  }
  catch(error){
     console.log(error);
     res.status(500).json({error:'internal server error'});
  }
});
app.get('/api/Data', async (req, res) => {
  try {
    
    const allData = await Data.find({}); 

   
    res.status(200).json(allData);
  } catch (error) {
    
    console.error("Failed to fetch tours:", error);
    res.status(500).json({ message: "Error fetching data from the database" });
  }
});
app.post('/api/Popular',async (req,res)=>{
  try{
    const data=req.body;
    const newP=new Popular(data);
    const response=await newP.save();
    console.log('data saved');
     res.status(200).json(response);
  }
  catch(error){
     console.log(error);
     res.status(500).json({error:'internal server error'});
  }
});
app.get('/api/Popular', async (req, res) => {
  try {
    
    const allData = await Popular.find({}); 
    res.status(200).json(allData);
  } catch (error) {
    
    console.error("Failed to fetch tours:", error);
    res.status(500).json({ message: "Error fetching data from the database" });
  }
});
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));