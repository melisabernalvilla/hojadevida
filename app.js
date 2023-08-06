const express = require("express");
const path = require("path");
 const app = express();

 app.listen(process.env.PORT || 3002, ()=>{
    console.log('escuchando en el puerto 3002' + process.env.PORT)
})

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"./views/melisabernal.html"))
})
