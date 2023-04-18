const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const usersRouter = require("./routes/users")

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/users',usersRouter)

app.get('/',(req,res)=>{
  
    res.send("g")
    console.log("bağlandı")

})

const PORT =3000

app.listen(PORT, ()=>{
    console.log(`uygulama http://localhost:${PORT} çalışıyor`)
})
