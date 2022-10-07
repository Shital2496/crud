const express = require("express");
const app =express();
const port=3000
//configuration

//routing 


//create server
app.listen(port,(err)=>{
    if (err)
    
    throw err
    else
    console.log("server is running at port %d",port)
});
