// const http=require('http');
// const data = require('./data');
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-Type':'application\json'});
// resp.write(JSON.stringify());
// resp.end();
// }).listen(5500);
// const fs=require('fs');
// const input = process.argv;
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }
// else {
//     console.log("Invalid input")
// }
// fs.writeFileSync('apple.txt','this is a apple file');
// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath=`${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'This is a text file');

// // read the file
// fs.readFile(filePath,(err,item)=>{
//     console.log(item)
// })

// // add the statement in the file
// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is updated")
// })

// // rename the file
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated")
// })

// // delete the file
// fs.unlinkSync(`${dirPath}/fruit.txt`)


// let a=10;
// let b=0;

// let waiting = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })
// waiting.then((data)=>{
//   b=data;
//   console.log(a+b)  
// })


// const express=require('express');
// const app= express();
// const path = require('path');
// const publicPath = path.join(__dirname,'public')
// app.set('view engine','ejs');
// app.get('',(req,resp)=>{
// resp.send('<h1>Welcome,to Home page</h1><a href="/about">Go to about sextion</a>')
// });
// app.get('/about',(req,resp)=>{
// resp.send([
//     {
//     name:'Ayush',
//     email:'ayush@test.com'
//     },
//     {
//         name:'Mani',
//     email:'Mani@test.com'
//     }
// ]);
// });
// app.get('/help',(req,resp)=>{
//     resp.send(`
//         <input type="text" placeholder="User name" value="${req.query.name}"/>
//         <button>Click me</button>
//     `);
//     });
// app.use(express.static(publicPath)); 
// app.get('',(_,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// })
// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })
// app.get('/help',(_,resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)
// })
// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicPath}/nopage .html`)
// })
// app.get('/profile',(_,resp)=>{
//     const user={
//         name:'Ayush',
//         email:'Ayush@test.com',
//         city:'Noida',
//         skills:['java','python','Computer Networks']
//     }
//     resp.render('profile',{user});
// })
// app.get('/login',(_,resp)=>{
//     resp.render('login'); 
// })
// app.listen(7500);




// const express=require('express');
// const app=express();
// const reqFilter=require('./middleware')
// const route=express.Router();
// // app.use(reqFilter)
// route.use(reqFilter);
// app.get('/',(req,resp)=>{
//     resp.send('welcome to home page')
// });
// app.get('/user',(req,resp)=>{
//     resp.send('welcome to users page')
// });
// route.get('/about',(req,resp)=>{
//     resp.send('welcome to about page')
// });
// route.get('./contact',(req,resp)=>{
//     resp.send('contacts page')
// });
// app.use('/',route);
// app.listen(8500)


// #MONGODB CONNECTION
const dbConnect=require('./mongodb')
dbConnect().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.warn(data)
    })
})
// console.warn(dbConnect());

// const main = async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.warn(data);
// }
// main();
