const dbConnect = require('./mongodb');
 const deleteData=async ()=>{
    let data= await dbConnect();
    let result =await data.deleteOne({name:'U11'})
 }
 deleteData();  