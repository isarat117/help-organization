const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser")
const bcrypt  =require("bcryptjs")
const {pool} = require('../config/db');


router.post('/signup',async (req, res) => {
  const { name, email, password } = req.body;
  await insertUser(name,email,password)
  res.status(201).send(name)
});



router.post('/signin',async (req, res) => {
    const {email, password } = req.body;
    const response = await isRightUser(email,password)
    console.log(response)
    if(response.mail===false){
        return res.status(400).send("Böyle bir kullanıcı bulunamadı")
    }else{
        if(response.password===false){
            return  res.status(400).send("Girdiğiniz şifre yalnış")
        }else{
            return  res.status(200).send("Giriş Başarılı")
        }
    }
   
   
    
});
  

const isRightUser =async(email,password)=>{
  
    try {
      const client = await pool.connect();
      const response=  await client.query(`Select * from users where email = '${email}'`);
      if(response.rows.length>0){
      const userPassword = response.rows[0].password
      isCorecctPassword = await bcrypt.compare(password,userPassword)
      if(isCorecctPassword){
        client.release();
        return {
            mail:true,
            password:true
        }
      }
      else{
        client.release();
        return {
            mail:true,
            password:false
        }
      }
      
      }else{
        client.release();
        return {
            mail:false,
            password:false
        }
      }
     
    } catch (error) {
      console.error(error);
    }
    
}







const insertUser = async (name, email, password) => {
    
    
    try {
      const client = await pool.connect();
      await client.query(`INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${await hashPassword(password)}');`);
      client.release();
    } catch (error) {
      console.error(error);
    }
};



const hashPassword =async(password)=>{
    const hashPassword = await bcrypt.hash(password,10)
    return hashPassword
}

module.exports = router;



