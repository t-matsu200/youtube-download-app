import YoutubeForm from '../form/YoutubeForm';
import YoutubeResponse from '../models/youtubeResponse';
import { instance as axios } from './customAxios';


export default class YoutubeService {

    public getFileName(contentDisposition: string): string {
        let fileName = contentDisposition.substring(contentDisposition.indexOf("''") + 2,
                                                    contentDisposition.length
                                                    );
        //デコードするとスペースが"+"になるのでスペースへ置換します
        fileName = decodeURI(fileName).replace(/\+/g, " ");
        return fileName;
    }

    public post(form: YoutubeForm): Promise<YoutubeResponse> {
        return new Promise((resolve, reject) => {
            axios.post('/download', form)
            .then(response => {
                const blob = new Blob([response.data], {
                    type: response.data.type
                });
                return resolve({
                    data: blob,
                    fileName: this.getFileName(response.headers['content-disposition'])
                } as YoutubeResponse);
            })
            .catch(e => {
                reject(e);
            });
        });
    }
}
