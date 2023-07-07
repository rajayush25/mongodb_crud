const dbConnect=require('./mongodb');
 
const insert=async ()=>{
    const db =await  dbConnect();
    const result =await db.insertMany ([
        {name:'note-5',brand:'vivo',price:3200, category:'mobile'}
    ]);
}
insert();