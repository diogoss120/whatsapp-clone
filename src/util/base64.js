
export class Base64{

    static getMimeType(urlBase64){
        let regex = /^data:(.+);base64,(.*)$/;
        let result = urlBase64.match(regex);
        console.log('regex',result);
        return result[1];
    }

    static toFile(urlBase64){

        let mimeType = Base64.getMimeType(urlBase64);
        let ext = mimetype.split('/')[1];
        let fileName = `file${Date.now()}.${ext}`;

        fetch(urlBase64).then(res => {
            return res.ArrayBuffer();
        }).then(buffer => {
            return new File([buffer], fileName, {
                type: mimetype
            });
        });
    }
}