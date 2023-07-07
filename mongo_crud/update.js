const dbConnect = require('./mongodb');
const updateData= async ()=> {
    let data =await dbConnect();
    let result =await data.updateOne(
        {name:'U10'},{
          $set: {name:'U11'} 
        }
    );
    console.warn(result)
}
updateData();