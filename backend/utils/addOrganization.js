import  {pool} from "./databaseConn.js";


export const addOrganization =async (etkinlikismi, aciklama, duzenleyen,duzenleyenUserId,baslangictarihi,adres)=>{
    pool.query(
    `INSERT INTO etkinlik(etkinlikismi, aciklama, duzenleyen,duzenleyenUserId,baslangictarihi,adres) 
    VALUES ('${etkinlikismi}', '${aciklama}', '${duzenleyen}', '${duzenleyenUserId}', '${baslangictarihi}',' ${adres}');`,(err,res)=>{
    if(err){
        console.log(err)
    }else{

        console.log("veri eklendi")
    }
   
})

}

addOrganization("f","sd","f",1,"2022-02-15","f")
