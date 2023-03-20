import qr from "qrcode"


export const generateQRCode =(obj)=>{
    return new Promise((resolve, reject) => {
        const json = JSON.stringify(obj)
        qr.toString(json,{type:"svg"},(err,code)=>{
        resolve(code)
    })
    })

}

