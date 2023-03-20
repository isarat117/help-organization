import  {pool} from "./databaseConn.js";



export const addUser =async (name,mail,phoneNumber,password)=>{
    pool.query(`INSERT INTO users(isimsoyisim, mail, phonenumber,sifre) VALUES ('${name}', '${mail}', '${phoneNumber}', '${password}');`,(err,res)=>{
    if(err){
        console.log(err)
    }else{

        console.log("veri eklendi")
    }
})

}

