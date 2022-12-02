import { serverURL } from "../constants/server-url";
import { $api } from "../http";

 export class FileService {
    static async getStaticFile (folder: string | string[], fileName: string) {
        const folderName = Array.isArray(folder) ? 
            folder.join("/") :
            folder;
        const requestURL = `${serverURL}/${folderName}/${fileName}`;
        const file = await $api.get(requestURL);
        return file;
    } 
 }
