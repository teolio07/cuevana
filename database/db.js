const mongoose = require('mongoose');

URI ="mongodb://adminStore:mono19teo@cluster0-shard-00-00.08d2x.mongodb.net:27017,cluster0-shard-00-01.08d2x.mongodb.net:27017,cluster0-shard-00-02.08d2x.mongodb.net:27017/cuevana?ssl=true&replicaSet=atlas-qyi3nf-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(URI)
  .then((resolve)=>{
    console.log(`conectado a: ${resolve.connection.name}`)
  })
    .catch((error)=>{
      console.log("algo salio mal al conectarse a la db")
    })