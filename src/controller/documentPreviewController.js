const pdfjs = require('pdfjs-dist');
const path = require('path');

pdfjs.GlobalWorkerOptions.workerSrc = path.resolve(__dirname, '../../dist/pdf.worker.bundle.js');

export class DocumentPreviewController {
    constructor(file) {
        this._file = file;

    }

    getPreviewData() {

        return new Promise((resolve, reject) => {

            let reader = new FileReader();

            switch (this._file.type) {
                case 'image/png':
                case 'image/jpeg':
                case 'image/jpg':
                case 'image/gif':

                    reader.onload = e => {
                        resolve({
                            src: reader.result,
                            info: '0'
                        });
                    }

                    reader.onerror = e => {
                        reject(e);
                    }

                    reader.readAsDataURL(this._file);

                    break;
                case 'application/pdf':

                    reader.onload = e => {

                        pdfjs.getDocument(new Uint8Array(reader.result)).then(pdf => {

                            pdf.getPage(1).then(page => {

                                console.log('page', page);
                                let viewport = pdf.getViewport(1);

                                let canvas = document.createElement('canvas');
                                let canvasContext = canvas.getContext('2d');

                                canvas.width = viewport.width;
                                canvas.height = viewport.height;


                                page.render({
                                    canvasContext,
                                    viewport
                                }).then(() => {
                                    let _l = (pdf.numPages > 1) ? 's' : '';
                                    resolve({
                                        src: canvas.toDataURL('image/pdf'),
                                        info: `pdf.numPages página${_l}`
                                    });
                                }).catch(err => {
                                    reject(err);
                                });

                            }).catch(err => {
                                reject(err);
                            });

                        }).catch(err => {
                            reject(err);
                        });
                    }

                    reader.readAsArrayBuffer(this._file);

                    break;
            }
        });
    }
}