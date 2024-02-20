const mongoose = require('mongoose')
const url =
  "mongodb+srv://saurabhrajput9460:Saurabh123@admission.xrt3ghq.mongodb.net/admission?retryWrites=true&w=majority";

const connectdb=()=>{
    return mongoose.connect(url)
    .then(()=>{
        console.log("Connected Succeessfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports=connectdb