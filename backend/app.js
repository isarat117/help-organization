import  express  from "express";
const app = express()


const PORT =3000

app.get('/',(req,res)=>{

    res.send("anasayfa")

})






app.listen(PORT, ()=>{
    console.log(`uygulama http://localhost:${PORT} çalışıyor`)
})