import { serverURL } from "../constants/server-url";
import { $api } from "../http";

 export class FileService {
    static async getStaticFile (folder: string, fileName: string) {
        const requestURL = `${serverURL}/public/${folder}/${fileName}`;
        const file = await $api.get(requestURL);
        return file;
    } 
 }
