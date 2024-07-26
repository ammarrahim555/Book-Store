import express from 'express'
import {PORT , mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import cors from 'cors'
import booksrouter from "./routes/bookroutes.js" 


const app = express();

app.use(express.json());
app.use(cors());

//  app.use(cors({
//    origin : "",
//    methods : ['GET','POST','PUT','DELETE'],
//    allaowedHeader : ['Content-Type'] 
// }));


// app.get('/' ,  (request , response) => {
//     console.log(request);
//    return response.status(234).send('welcom to mern stack');
// })

app.use("/books",booksrouter);

  
 
 
mongoose.connect(mongoDBURL)
.then(() => {
  console.log('app conected to database');
  app.listen(PORT , () => {
    console.log(`app is listen to port : ${PORT}`);
}); 

})
.catch ((error)=>{
  console.log(error);
});

