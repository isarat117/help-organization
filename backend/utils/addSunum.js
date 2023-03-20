import  {pool} from "./databaseConn.js";



export const addSunum =async ( etkinlikid, baslangictarih,bitistarih,konu,konusmaci)=>{
    pool.query(`INSERT INTO sunum( etkinlikid, baslangictarih,bitistarih,konu,konusmaci) VALUES 
    ('${etkinlikid}', '${baslangictarih}', '${bitistarih}', '${konu}', '${konusmaci}');`,(err,res)=>{
    if(err){
        console.log(err)
    }else{

        console.log("veri eklendi")
    }
})

}

